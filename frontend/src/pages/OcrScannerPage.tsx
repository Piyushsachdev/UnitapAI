import { useEffect, useMemo, useRef, useState } from "react";
import { exportScansUrl, listScans, scanBusinessCard } from "../api";

const PRIMARY_TEAL = "#3F6F7E";

type Scan = {
  id: string;
  created_at: number;
  name?: string | null;
  job_title?: string | null;
  company?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  address?: string | null;
  raw_text?: string | null;
};

export const OcrScannerPage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "error"; message: string }
    | { type: "done" }
  >({ type: "idle" });
  const [latest, setLatest] = useState<Scan | null>(null);
  const [history, setHistory] = useState<Scan[]>([]);
  const [editableFields, setEditableFields] = useState<Partial<Scan>>({});

  useEffect(() => {
    if (latest) {
      setEditableFields({
        name: latest.name || "",
        job_title: latest.job_title || "",
        company: latest.company || "",
        email: latest.email || "",
        phone: latest.phone || "",
        website: latest.website || "",
        raw_text: latest.raw_text || ""
      });
    }
  }, [latest]);

  const handleFieldChange = (field: keyof Scan, value: string) => {
    setEditableFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveConnection = async () => {
    if (!latest) return;
    setStatus({ type: "loading" });
    try {
      // For MVP, we'll just re-save to the backend as a "confirmed" connection
      // This could be a new endpoint, but let's see if we can just update the scan
      const res = await fetch(`${import.meta.env.VITE_API_BASE || "http://localhost:8788"}/api/scans/${latest.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editableFields)
      });
      if (!res.ok) throw new Error("Failed to save connection");
      await refreshHistory();
      setStatus({ type: "done" });
    } catch (e) {
      setStatus({ type: "error", message: (e as Error).message });
    }
  };

  const exportUrl = useMemo(() => exportScansUrl(), []);

  const refreshHistory = async () => {
    const { scans } = await listScans();
    setHistory(scans as any);
  };

  useEffect(() => {
    refreshHistory().catch(() => {});
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFile = async (file: File) => {
    setStatus({ type: "loading" });
    try {
      const { scan } = await scanBusinessCard(file);
      setLatest(scan as any);
      await refreshHistory();
      setStatus({ type: "done" });
    } catch (e) {
      setStatus({ type: "error", message: (e as Error).message });
    }
  };

  return (
    <div className="scanner-root">
      <section className="scanner-header">
        <div className="brand-badge">UNITAP CARDS</div>
        <h1>AI Smart Scanner</h1>
        <p>
          Extract contact details from physical cards with precision.
          Save them as connections or create professional profiles instantly.
        </p>
      </section>

      <section className="scanner-tabs">
        <div className="tab active">Business card</div>
        <div className="tab">QR code</div>
        <div className="tab">Scan to profile</div>
      </section>

      <section className="scanner-card card">
        <div className="camera-placeholder">
          <div className="upload-icon">↑</div>
          <span>Upload a business card image</span>
        </div>
        <div className="scanner-actions">
          <button type="button" className="btn-primary">
            Capture with camera
          </button>
          <button type="button" className="btn-secondary" onClick={handleUploadClick}>
            Upload from device
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.currentTarget.value = "";
            }}
          />
        </div>
        <p className="hint">
          Powered by UNITAP AI. Scans are secure and private.
        </p>
      </section>

      <section className="scanner-fields card">
        <div className="scanner-fields-header">
          <h2>Extracted details</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label>Full name</label>
            <input 
              value={editableFields.name || ""} 
              onChange={(e) => handleFieldChange("name", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field">
            <label>Job title</label>
            <input 
              value={editableFields.job_title || ""} 
              onChange={(e) => handleFieldChange("job_title", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field">
            <label>Company</label>
            <input 
              value={editableFields.company || ""} 
              onChange={(e) => handleFieldChange("company", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
              value={editableFields.email || ""} 
              onChange={(e) => handleFieldChange("email", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input 
              value={editableFields.phone || ""} 
              onChange={(e) => handleFieldChange("phone", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field">
            <label>Website</label>
            <input 
              value={editableFields.website || ""} 
              onChange={(e) => handleFieldChange("website", e.target.value)} 
              placeholder="—" 
            />
          </div>
          <div className="field full-width">
            <label>Raw OCR Text (AI Verification)</label>
            <textarea
              value={editableFields.raw_text || ""}
              onChange={(e) => handleFieldChange("raw_text", e.target.value)}
              placeholder="Waiting for scan data..."
              rows={4}
            />
          </div>
        </div>
        <div className="scanner-cta-row">
          <button type="button" className="btn-primary" onClick={handleSaveConnection}>
            Save as connection
          </button>
          <a href={exportUrl} download="unitap_scans.xlsx" style={{ textDecoration: 'none' }}>
            <button type="button" className="excel-btn">
              📊 See the excel file
            </button>
          </a>
          <button type="button" className="btn-ghost">
            Create UNITAP profile
          </button>
        </div>
        {status.type === "loading" && <div className="info-banner">AI is analyzing the card...</div>}
        {status.type === "error" && <div className="error-banner">{status.message}</div>}
      </section>

      <section className="history">
        <div className="history-header">
          <h2>Scan history</h2>
          <button className="link-button" type="button" onClick={() => refreshHistory()}>
            Refresh
          </button>
        </div>
        {history.length === 0 ? (
          <div className="history-empty">No scans yet. Upload a card to start.</div>
        ) : (
          <div className="history-list">
            {history.slice(0, 10).map((s) => (
              <button
                key={s.id}
                type="button"
                className="history-item card"
                onClick={() => setLatest(s)}
              >
                <div className="history-top">
                  <div className="history-name">{s.name || "Unknown"}</div>
                  <div className="history-date">
                    {new Date(s.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="history-meta">
                  {(s.job_title || "—") + " • " + (s.email || s.phone || "—")}
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .scanner-root {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .brand-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary-teal);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .scanner-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
        }
        .scanner-header p {
          font-size: 15px;
          color: var(--gray-700);
          max-width: 500px;
        }
        .scanner-tabs {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .tab {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          cursor: pointer;
          background: var(--accent-white);
          transition: var(--transition-smooth);
        }
        .tab.active {
          background: var(--primary-teal);
          border-color: var(--primary-teal);
          color: var(--accent-white);
        }
        .camera-placeholder {
          height: 220px;
          border-radius: var(--radius-md);
          border: 2px dashed var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--gray-400);
          font-size: 14px;
          background: #fafafa;
          gap: 12px;
          transition: var(--transition-smooth);
        }
        .upload-icon {
          font-size: 32px;
        }
        .scanner-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }
        .btn-secondary {
          background: var(--accent-white);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .btn-secondary:hover {
          background: var(--gray-50);
        }
        .excel-btn {
          background: #1D6F42;
          color: var(--accent-white);
          border-radius: 999px;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .excel-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(29, 111, 66, 0.2);
        }
        .hint {
          font-size: 12px;
          color: var(--gray-400);
          margin-top: 12px;
        }
        .scanner-fields h2 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .field-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .field.full-width {
          grid-column: 1 / -1;
        }
        .field label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .field input, .field textarea {
          width: 100%;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          padding: 12px;
          font-size: 14px;
          outline: none;
          transition: var(--transition-smooth);
        }
        .field input:focus, .field textarea:focus {
          border-color: var(--primary-teal);
          box-shadow: 0 0 0 3px rgba(63, 111, 126, 0.1);
        }
        .scanner-cta-row {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .info-banner, .error-banner {
          margin-top: 20px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 14px;
        }
        .info-banner {
          background: #e3f2fd;
          color: #0d47a1;
          border: 1px solid #bbdefb;
        }
        .error-banner {
          background: #ffebee;
          color: #b71c1c;
          border: 1px solid #ffcdd2;
        }
        .history-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .history-item {
          text-align: left;
          width: 100%;
          border: 1px solid var(--border-color);
          cursor: pointer;
        }
        .history-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .history-name {
          font-weight: 600;
          font-size: 16px;
        }
        .history-date {
          font-size: 12px;
          color: var(--gray-400);
        }
        .history-meta {
          margin-top: 8px;
          font-size: 13px;
          color: var(--gray-700);
        }
        .link-button {
          background: none;
          border: none;
          color: var(--primary-teal);
          font-size: 14px;
          font-weight: 500;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

