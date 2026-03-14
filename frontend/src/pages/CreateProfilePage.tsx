import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProfile } from "../api";

const PRIMARY_TEAL = "#3F6F7E";

interface BasicProfileForm {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  jobTitle: string;
  bio: string;
  username: string;
}

export const CreateProfilePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<BasicProfileForm>({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
    bio: "",
    username: ""
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "idle" | "saving" | "error" | "success";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (
    field: keyof BasicProfileForm,
    value: string
  ): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.username.trim()) return;
    setStatus({ type: "saving" });
    try {
      await createProfile({
        username: form.username.trim(),
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        organization: form.organization.trim() || undefined,
        jobTitle: form.jobTitle.trim() || undefined,
        bio: form.bio.trim() || undefined
      });
      const url = `https://unitap.com/${encodeURIComponent(form.username)}`;
      setPreviewUrl(url);
      setStatus({ type: "success" });
      navigate(`/p/${encodeURIComponent(form.username)}`);
    } catch (err) {
      setStatus({ type: "error", message: (err as Error).message });
    }
  };

  return (
    <div className="page-root">
      <h1 className="page-title">Create your profile</h1>
      <p className="page-subtitle">
        Start with the essentials. You can add documents, media, and dual
        profiles later.
      </p>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <label>Username *</label>
          <input
            required
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="username"
          />
          <div className="field-hint">
            Your profile URL will be{" "}
            <span>unitap.com/{form.username || "username"}</span>
          </div>
        </div>

        <div className="field">
          <label>Full name *</label>
          <input
            required
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Your full name"
          />
        </div>

        <div className="field-grid">
          <div className="field">
            <label>Email *</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@company.com"
            />
          </div>
          <div className="field">
            <label>Phone *</label>
            <input
              required
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label>Organization</label>
            <input
              value={form.organization}
              onChange={(e) => handleChange("organization", e.target.value)}
              placeholder="Company name"
            />
          </div>
          <div className="field">
            <label>Job title</label>
            <input
              value={form.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              placeholder="Your role"
            />
          </div>
        </div>

        <div className="field">
          <label>Bio</label>
          <textarea
            rows={4}
            value={form.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            placeholder="Short intro, what you do, who you help."
          />
        </div>

        <button className="primary-button" type="submit">
          {status.type === "saving" ? "Publishing..." : "Publish & generate QR"}
        </button>
        {status.type === "error" && (
          <div className="error-banner">{status.message}</div>
        )}
      </form>

      {previewUrl && (
        <div className="preview-card">
          <div className="preview-header">Preview</div>
          <div className="preview-content">
            <div className="preview-left">
              <div className="preview-avatar">
                {form.fullName ? form.fullName[0].toUpperCase() : "U"}
              </div>
              <div>
                <div className="preview-name">
                  {form.fullName || "Your name"}
                </div>
                <div className="preview-meta">
                  {form.jobTitle || "Your role"} •{" "}
                  {form.organization || "Your company"}
                </div>
                <div className="preview-url">{previewUrl}</div>
              </div>
            </div>
            <div className="preview-qr">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  previewUrl
                )}`}
                alt="Profile QR"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .page-root {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .page-title {
          font-size: 22px;
          font-weight: 600;
          margin: 0;
        }
        .page-subtitle {
          font-size: 13px;
          color: #616161;
          margin: 0 0 8px;
        }
        .form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        label {
          font-size: 13px;
          color: #616161;
        }
        input,
        textarea {
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
          resize: vertical;
        }
        input:focus,
        textarea:focus {
          border-color: ${PRIMARY_TEAL};
        }
        .field-hint {
          font-size: 12px;
          color: #9e9e9e;
        }
        .field-hint span {
          color: ${PRIMARY_TEAL};
        }
        .primary-button {
          margin-top: 4px;
          border-radius: 999px;
          border: none;
          padding: 10px 16px;
          background: ${PRIMARY_TEAL};
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          align-self: flex-start;
        }
        .error-banner {
          margin-top: 8px;
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .preview-card {
          margin-top: 8px;
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .preview-header {
          font-size: 13px;
          color: #616161;
          margin-bottom: 10px;
        }
        .preview-content {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .preview-left {
          display: flex;
          gap: 10px;
          align-items: center;
          min-width: 0;
        }
        .preview-avatar {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .preview-name {
          font-size: 15px;
          font-weight: 600;
        }
        .preview-meta {
          font-size: 12px;
          color: #616161;
          margin-top: 2px;
        }
        .preview-url {
          font-size: 12px;
          color: ${PRIMARY_TEAL};
          margin-top: 6px;
          word-break: break-all;
        }
        .preview-qr img {
          width: 112px;
          height: 112px;
          border-radius: 12px;
          border: 1px solid #e0e0e0;
          background: #fafafa;
        }
        @media (min-width: 769px) {
          .field-grid {
            flex-direction: row;
          }
          .field-grid .field {
            flex: 1;
          }
          .form-card {
            padding: 20px 20px 22px;
          }
        }
      `}</style>
    </div>
  );
};

