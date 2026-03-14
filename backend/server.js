require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const { db } = require("./db");
const { id, nowMs, pickEmail, pickPhone, pickWebsite } = require("./utils");
const { ocrSpaceBusinessCard } = require("./providers/ocrSpace");
const { hfTranscribeAudio, hfSummarize, hfActionItems } = require("./providers/huggingFace");
const { appendScanRow, ensureWorkbook } = require("./excel");

const PORT = Number(process.env.PORT || 8787);
const CORS_ORIGIN = process.env.CORS_ORIGIN || "";
const OCR_SPACE_API_KEY = process.env.OCR_SPACE_API_KEY || "";
const HF_TOKEN = process.env.HF_TOKEN || "";
const EXPORT_XLSX_PATH = process.env.EXPORT_XLSX_PATH || "./data/unitap_scans.xlsx";

const app = express();
app.use(
  cors({
    origin(origin, cb) {
      // Allow non-browser clients (no Origin header)
      if (!origin) return cb(null, true);

      // If explicitly configured, enforce it (useful for production)
      if (CORS_ORIGIN) return cb(null, origin === CORS_ORIGIN);

      // Dev default: allow localhost on any port (Vite may switch ports)
      try {
        const u = new URL(origin);
        const isLocal =
          u.hostname === "localhost" || u.hostname === "127.0.0.1";
        return cb(null, isLocal);
      } catch {
        return cb(null, false);
      }
    }
  })
);
app.use(express.json({ limit: "2mb" }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 12 * 1024 * 1024 }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// Profiles (MVP)
app.post("/api/profiles", (req, res) => {
  const p = req.body || {};
  if (!p.username || !p.fullName || !p.email || !p.phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const record = {
    id: id("pro"),
    created_at: nowMs(),
    username: String(p.username),
    full_name: String(p.fullName),
    email: String(p.email),
    phone: String(p.phone),
    organization: p.organization ? String(p.organization) : null,
    job_title: p.jobTitle ? String(p.jobTitle) : null,
    bio: p.bio ? String(p.bio) : null
  };

  try {
    db.prepare(
      `INSERT INTO profiles (id, created_at, username, full_name, email, phone, organization, job_title, bio)
       VALUES (@id, @created_at, @username, @full_name, @email, @phone, @organization, @job_title, @bio)`
    ).run(record);
    res.json({ profile: record });
  } catch (e) {
    res.status(400).json({ error: String(e.message || e) });
  }
});

app.get("/api/profiles/:username", (req, res) => {
  const row = db
    .prepare("SELECT * FROM profiles WHERE username = ?")
    .get(req.params.username);
  if (!row) return res.status(404).json({ error: "Not found" });
  res.json({ profile: row });
});

// OCR Scan (business card)
app.post("/api/scans/business-card", upload.single("image"), async (req, res) => {
  try {
    if (!OCR_SPACE_API_KEY) {
      return res.status(500).json({ error: "Missing OCR_SPACE_API_KEY in backend .env. Please set OCR_SPACE_API_KEY and restart server." });
    }
    if (!req.file) return res.status(400).json({ error: "Missing image file" });

    const { rawText, providerResponse } = await ocrSpaceBusinessCard({
      apiKey: OCR_SPACE_API_KEY,
      imageBuffer: req.file.buffer
    });

    console.log(`OCR detected text length: ${rawText.length}`);
    if (!rawText.trim()) {
      return res.status(400).json({ error: "No text detected in image. Please try a clearer picture." });
    }

    const email = pickEmail(rawText);
    const phone = pickPhone(rawText);
    const website = pickWebsite(rawText);

    // Extremely simple heuristics for MVP. We can refine with better parsing later.
    const lines = rawText.split("\n").map((l) => l.trim()).filter(Boolean);
    const name = lines[0] || null;
    const job_title = lines[1] || null;

    console.log(`Extracted: Name=${name}, Job=${job_title}, Email=${email}`);

    const scan = {
      id: id("scan"),
      created_at: nowMs(),
      source: "ocr_space",
      raw_text: rawText,
      name,
      job_title,
      company: null,
      phone,
      email,
      website,
      address: null,
      extra_json: JSON.stringify({ provider: "ocr_space", providerResponse }, null, 0)
    };

    db.prepare(
      `INSERT INTO scans
       (id, created_at, source, raw_text, name, job_title, company, phone, email, website, address, extra_json)
       VALUES
       (@id, @created_at, @source, @raw_text, @name, @job_title, @company, @phone, @email, @website, @address, @extra_json)`
    ).run(scan);

    try {
      await appendScanRow(EXPORT_XLSX_PATH, scan);
      console.log(`Successfully added scan ${scan.id} to Excel`);
    } catch (err) {
      console.error(`Error adding scan ${scan.id} to Excel:`, err);
    }

    res.json({ scan });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
});

app.get("/api/scans", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM scans ORDER BY created_at DESC LIMIT 200")
    .all();
  res.json({ scans: rows });
});

app.patch("/api/scans/:id", async (req, res) => {
  const { id } = req.params;
  const p = req.body || {};

  try {
    const existing = db.prepare("SELECT * FROM scans WHERE id = ?").get(id);
    if (!existing) return res.status(404).json({ error: "Scan not found" });

    const updated = {
      ...existing,
      name: p.name !== undefined ? String(p.name) : existing.name,
      job_title: p.job_title !== undefined ? String(p.job_title) : existing.job_title,
      company: p.company !== undefined ? String(p.company) : existing.company,
      email: p.email !== undefined ? String(p.email) : existing.email,
      phone: p.phone !== undefined ? String(p.phone) : existing.phone,
      website: p.website !== undefined ? String(p.website) : existing.website,
      raw_text: p.raw_text !== undefined ? String(p.raw_text) : existing.raw_text
    };

    db.prepare(
      `UPDATE scans SET
       name = @name,
       job_title = @job_title,
       company = @company,
       email = @email,
       phone = @phone,
       website = @website,
       raw_text = @raw_text
       WHERE id = @id`
    ).run(updated);

    // Also update Excel with the new details
    try {
      await appendScanRow(EXPORT_XLSX_PATH, updated);
      console.log(`Successfully updated Excel file for scan ${id}`);
    } catch (err) {
      console.error(`Error updating Excel for scan ${id}:`, err);
    }

    res.json({ scan: updated });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
});

app.get("/api/scans/export.xlsx", (req, res) => {
  res.download(EXPORT_XLSX_PATH, "unitap_scans.xlsx");
});

// Meeting companion: upload audio -> transcript -> summary + action items
app.post("/api/meetings", upload.single("audio"), async (req, res) => {
  try {
    if (!HF_TOKEN) {
      return res.status(400).json({ error: "Missing HF_TOKEN in backend .env" });
    }
    if (!req.file) return res.status(400).json({ error: "Missing audio file" });

    const transcript = await hfTranscribeAudio({
      token: HF_TOKEN,
      audioBuffer: req.file.buffer
    });

    console.log(`Transcript: ${transcript ? transcript.substring(0, 50) + "..." : "Empty"}`);

    if (!transcript) {
      throw new Error("No transcription text could be extracted from the audio. Please speak clearly and try again.");
    }

    const summary = transcript
      ? await hfSummarize({ token: HF_TOKEN, transcript })
      : "No transcript produced.";

    console.log(`Summary: ${summary ? summary.substring(0, 50) + "..." : "Empty"}`);

    const actionItems = transcript
      ? await hfActionItems({ token: HF_TOKEN, transcript })
      : [];

    console.log(`Action Items: ${actionItems.length} items found`);

    const meeting = {
      id: id("meet"),
      created_at: nowMs(),
      title: req.body?.title ? String(req.body.title) : null,
      transcript,
      summary,
      action_items_json: JSON.stringify(actionItems)
    };

    db.prepare(
      `INSERT INTO meetings (id, created_at, title, transcript, summary, action_items_json)
       VALUES (@id, @created_at, @title, @transcript, @summary, @action_items_json)`
    ).run(meeting);

    res.json({
      meeting: {
        ...meeting,
        action_items: actionItems
      }
    });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
});

app.get("/api/meetings", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM meetings ORDER BY created_at DESC LIMIT 100")
    .all()
    .map((r) => ({
      ...r,
      action_items: JSON.parse(r.action_items_json || "[]")
    }));
  res.json({ meetings: rows });
});

app.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`UNITAP backend running on http://0.0.0.0:${PORT}`);
});

