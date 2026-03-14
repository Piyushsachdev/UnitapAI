import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY_TEAL = "#3F6F7E";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now we simulate a successful login and send the user to the main feature hub.
    navigate("/dashboard");
  };

  return (
    <div className="login-root">
      <div className="login-card">
        <div className="brand-mark">UNITAP</div>
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">
          Access your digital profile, AI scanner, and meeting companion from
          one place.
        </p>

        <button
          type="button"
          className="google-button"
          onClick={() => navigate("/dashboard")}
        >
          <span className="google-icon">G</span>
          <span>Continue with Google</span>
        </button>

        <div className="divider">
          <span />
          <span className="divider-label">or use email</span>
          <span />
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" required placeholder="you@company.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" required placeholder="••••••••" />
          </div>
          <button className="primary-button" type="submit">
            Continue
          </button>
        </form>

        <p className="helper-text">
          By continuing you agree to UNITAP&apos;s Terms and Privacy Policy.
        </p>
      </div>

      <style>{`
        .login-root {
          min-height: calc(100vh - 56px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-card {
          width: 100%;
          max-width: 380px;
          background: #ffffff;
          border-radius: 20px;
          padding: 24px 24px 20px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.12);
        }
        .brand-mark {
          font-size: 14px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${PRIMARY_TEAL};
          font-weight: 600;
          margin-bottom: 10px;
        }
        .login-title {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .login-subtitle {
          margin: 6px 0 18px;
          font-size: 13px;
          color: #616161;
        }
        .google-button {
          width: 100%;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          background: #ffffff;
          cursor: pointer;
        }
        .google-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .divider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 18px 0 14px;
        }
        .divider span:first-child,
        .divider span:last-child {
          flex: 1;
          height: 1px;
          background: #e0e0e0;
        }
        .divider-label {
          font-size: 12px;
          color: #9e9e9e;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field label {
          font-size: 13px;
          color: #616161;
        }
        .field input {
          border-radius: 10px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
        }
        .field input:focus {
          border-color: ${PRIMARY_TEAL};
        }
        .primary-button {
          margin-top: 6px;
          width: 100%;
          border-radius: 999px;
          border: none;
          padding: 10px 14px;
          background: ${PRIMARY_TEAL};
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        .helper-text {
          margin: 14px 0 0;
          font-size: 11px;
          color: #9e9e9e;
          text-align: center;
        }
        @media (min-width: 769px) {
          .login-root {
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

