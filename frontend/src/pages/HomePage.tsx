import { Link } from "react-router-dom";
import { useState } from "react";

const PRIMARY_TEAL = "#3F6F7E";

export const HomePage = () => {
  const [quickSendNumber, setQuickSendNumber] = useState("");

  const handleQuickSend = () => {
    if (!quickSendNumber.trim()) return;
    const encodedText = encodeURIComponent(
      "Connect with me on UNITAP: https://unitap.com/demo-user"
    );
    const url = `https://wa.me/${quickSendNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <div className="home-root">
      <section className="home-header-card">
        <div className="home-header-main">
          <div>
            <div className="home-welcome">Welcome back,</div>
            <div className="home-name">Demo User</div>
          </div>
          <div className="home-meetings-pill">
            <span className="dot" />
            0 upcoming meetings
          </div>
        </div>
        <div className="home-subtitle">
          What do you want to do right now?
        </div>
      </section>

      <section className="feature-grid">
        <Link to="/profiles/new" className="feature-card profile">
          <div className="feature-icon">🧾</div>
          <div className="feature-title">Online Profile</div>
          <div className="feature-text">
            Create and share your UNITAP digital profile with QR and link.
          </div>
          <div className="feature-cta">Open profile studio →</div>
        </Link>

        <Link to="/scanner" className="feature-card scanner">
          <div className="feature-icon">📷</div>
          <div className="feature-title">AI OCR Scanner</div>
          <div className="feature-text">
            Scan business cards and QR codes. Auto-extract contacts into
            UNITAP.
          </div>
          <div className="feature-cta">Start scanning →</div>
        </Link>

        <Link
          to="/meeting-companion"
          className="feature-card meeting-companion"
        >
          <div className="feature-icon">🧠</div>
          <div className="feature-title">AI Meeting Companion</div>
          <div className="feature-text">
            Capture conversations, get instant summaries, and never miss a
            follow-up.
          </div>
          <div className="feature-cta">Open companion →</div>
        </Link>
      </section>

      <section className="home-quick-send">
        <div className="section-title">Quick Send (WhatsApp)</div>
        <div className="quick-send-row">
          <div className="country-code">+91</div>
          <input
            className="quick-send-input"
            placeholder="Enter WhatsApp number"
            value={quickSendNumber}
            onChange={(e) => setQuickSendNumber(e.target.value)}
          />
          <button
            className="quick-send-button"
            type="button"
            onClick={handleQuickSend}
          >
            Send Profile
          </button>
        </div>
        <div className="helper-text">
          Opens WhatsApp with a pre-filled message. You just hit send.
        </div>
      </section>

      <style>{`
        .home-root {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .home-header-card {
          background: linear-gradient(135deg, ${PRIMARY_TEAL}, #24404a);
          color: #ffffff;
          border-radius: 16px;
          padding: 16px 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        }
        .home-header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .home-welcome {
          font-size: 14px;
          opacity: 0.9;
        }
        .home-name {
          font-size: 22px;
          font-weight: 600;
          margin-top: 2px;
        }
        .home-meetings-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          font-size: 12px;
        }
        .home-meetings-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4caf50;
        }
        .home-subtitle {
          margin-top: 10px;
          font-size: 13px;
          opacity: 0.95;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .feature-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 14px 14px 16px;
          border-radius: 16px;
          background: #ffffff;
          color: #000000;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .feature-card.profile {
          border-left: 4px solid ${PRIMARY_TEAL};
        }
        .feature-card.scanner {
          border-left: 4px solid #ffb300;
        }
        .feature-card.meeting-companion {
          border-left: 4px solid #7b1fa2;
        }
        .feature-icon {
          font-size: 22px;
        }
        .feature-title {
          font-size: 16px;
          font-weight: 600;
        }
        .feature-text {
          font-size: 13px;
          color: #616161;
        }
        .feature-cta {
          margin-top: 4px;
          font-size: 13px;
          color: ${PRIMARY_TEAL};
          font-weight: 500;
        }
        .home-quick-send {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }
        .quick-send-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .country-code {
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          font-size: 14px;
        }
        .quick-send-input {
          flex: 1;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
        }
        .quick-send-input:focus {
          border-color: ${PRIMARY_TEAL};
        }
        .quick-send-button {
          border-radius: 8px;
          border: none;
          background: ${PRIMARY_TEAL};
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }
        .helper-text {
          font-size: 12px;
          color: #616161;
        }
        @media (min-width: 769px) {
          .home-root {
            max-width: 960px;
            margin: 0 auto;
          }
          .home-header-card {
            padding: 20px 22px;
          }
          .home-name {
            font-size: 24px;
          }
          .feature-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

