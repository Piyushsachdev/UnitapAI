import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../api";

const PRIMARY_TEAL = "#3F6F7E";

export const ViewProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const profileUrl = useMemo(
    () =>
      `https://unitap.com/${encodeURIComponent(username || "username")}`,
    [username]
  );

  const [profile, setProfile] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!username) return;
    (async () => {
      try {
        const { profile } = await getProfile(username);
        if (!cancelled) setProfile(profile);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <div className="profile-view-root">
      <section className="hero-card">
        <div className="hero-main">
          <div className="avatar-large">
            {(profile?.full_name || username || "U")[0].toUpperCase()}
          </div>
          <div>
            <h1 className="hero-name">
              {profile?.full_name || username || "Your name"}
            </h1>
            <p className="hero-meta">
              {(profile?.job_title || "Job title") + " • " + (profile?.organization || "Organization")}
            </p>
            <p className="hero-bio">
              {profile?.bio ||
                "Short bio about who you are, what you do, and how you can help."}
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <button className="primary" type="button">
            Save Contact
          </button>
          <button className="secondary" type="button">
            Book a Meeting
          </button>
        </div>
      </section>

      {error && <div className="error-banner">{error}</div>}

      <section className="section">
        <h2 className="section-title">Profile link & QR</h2>
        <div className="link-row">
          <span className="profile-url">{profileUrl}</span>
          <button
            className="chip-button"
            type="button"
            onClick={() => navigator.clipboard.writeText(profileUrl)}
          >
            Copy
          </button>
        </div>
        <div className="qr-view-box">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
              profileUrl
            )}`}
            alt="Profile QR"
          />
        </div>
      </section>

      <style>{`
        .profile-view-root {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .hero-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-main {
          display: flex;
          gap: 12px;
        }
        .avatar-large {
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 600;
        }
        .hero-name {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }
        .hero-meta {
          margin: 4px 0 0;
          font-size: 13px;
          color: #616161;
        }
        .hero-bio {
          margin: 8px 0 0;
          font-size: 13px;
          color: #424242;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .hero-actions .primary,
        .hero-actions .secondary {
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          border: none;
        }
        .hero-actions .primary {
          background: ${PRIMARY_TEAL};
          color: #ffffff;
        }
        .hero-actions .secondary {
          background: #ffffff;
          border: 1px solid ${PRIMARY_TEAL};
          color: ${PRIMARY_TEAL};
        }
        .section {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px 18px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .section-title {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 600;
        }
        .error-banner {
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .link-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .profile-url {
          font-size: 13px;
          color: #000000;
          word-break: break-all;
        }
        .chip-button {
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          padding: 6px 10px;
          font-size: 12px;
          background: #fafafa;
          cursor: pointer;
        }
        .qr-view-box {
          margin-top: 14px;
          display: flex;
          justify-content: center;
        }
        .qr-view-box img {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          background: #fafafa;
        }
        @media (min-width: 769px) {
          .hero-card {
            padding: 22px 24px 18px;
          }
          .hero-main {
            gap: 16px;
          }
          .hero-name {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

