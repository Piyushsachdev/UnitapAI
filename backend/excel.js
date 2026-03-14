const fs = require("node:fs");
const path = require("node:path");
const ExcelJS = require("exceljs");

const DEFAULT_HEADERS = [
  { key: "created_at", header: "created_at" },
  { key: "name", header: "name" },
  { key: "job_title", header: "job_title" },
  { key: "company", header: "company" },
  { key: "phone", header: "phone" },
  { key: "email", header: "email" },
  { key: "website", header: "website" },
  { key: "address", header: "address" },
  { key: "raw_text", header: "raw_text" }
];

async function ensureWorkbook(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const wb = new ExcelJS.Workbook();
  if (fs.existsSync(filePath)) {
    try {
      await wb.xlsx.readFile(filePath);
      let ws = wb.getWorksheet("Scans");
      if (!ws) {
        ws = wb.addWorksheet("Scans");
        ws.columns = DEFAULT_HEADERS;
      } else {
        // Ensure columns are mapped correctly if the worksheet existed but headers weren't set
        ws.columns = DEFAULT_HEADERS;
      }
      return wb;
    } catch (err) {
      console.error("Error reading workbook, creating new one:", err);
      // If file is corrupt or empty, continue to create new
    }
  }

  const ws = wb.addWorksheet("Scans");
  ws.columns = DEFAULT_HEADERS;
  await wb.xlsx.writeFile(filePath);
  return wb;
}

async function appendScanRow(filePath, scan) {
  try {
    // If file exists, delete it and recreate from DB to ensure it's always fresh and uncorrupted
    // This is more robust for an MVP than trying to append to potentially locked/corrupted files
    const { db } = require("./db");
    const rows = db.prepare("SELECT * FROM scans ORDER BY created_at ASC").all();

    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Scans");
    ws.columns = DEFAULT_HEADERS;

    for (const s of rows) {
      ws.addRow({
        created_at: s.created_at ? new Date(s.created_at).toISOString() : "",
        name: s.name || "",
        job_title: s.job_title || "",
        company: s.company || "",
        phone: s.phone || "",
        email: s.email || "",
        website: s.website || "",
        address: s.address || "",
        raw_text: s.raw_text || ""
      });
    }

    // Write to a temporary file first, then rename to target path to avoid partial writes
    const tempPath = filePath + ".tmp";
    await wb.xlsx.writeFile(tempPath);
    
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.warn("Could not delete existing excel file, it might be open in another program. Attempting to overwrite directly.");
      }
    }
    
    fs.renameSync(tempPath, filePath);
    console.log(`Excel file rebuilt successfully with ${rows.length} records: ${filePath}`);
  } catch (err) {
    console.error("Failed to rebuild Excel file:", err);
  }
}

module.exports = { ensureWorkbook, appendScanRow };

