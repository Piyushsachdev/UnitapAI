import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

const PRIMARY_TEAL = "#3F6F7E";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";

  return (
    <div className="app-root">
      {!isAuthPage && (
        <header className="app-header">
          <div className="app-logo">UNITAP</div>
        </header>
      )}
      <main className="app-main">{children}</main>
      {!isAuthPage && (
        <nav className="app-bottom-nav">
          <NavLink to="/dashboard" className="nav-item">
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </NavLink>
          <NavLink to="/profiles/new" className="nav-item">
            <span className="nav-icon">🧾</span>
            <span className="nav-label">Profile</span>
          </NavLink>
          <NavLink to="/scanner" className="nav-item">
            <span className="nav-icon">📷</span>
            <span className="nav-label">AI Scanner</span>
          </NavLink>
          <NavLink to="/meeting-companion" className="nav-item">
            <span className="nav-icon">🧠</span>
            <span className="nav-label">Companion</span>
          </NavLink>
          <NavLink to="/settings" className="nav-item nav-item-disabled">
            <span className="nav-icon">⚙️</span>
            <span className="nav-label">Settings</span>
          </NavLink>
        </nav>
      )}
      <style>{`
        .app-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f5f5f5;
          color: #000;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
        }
        .app-header {
          height: 56px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #e0e0e0;
        }
        .app-logo {
          font-weight: 700;
          letter-spacing: 0.08em;
          font-size: 18px;
          color: ${PRIMARY_TEAL};
        }
        .app-main {
          flex: 1;
          padding: 16px 16px 72px;
        }
        .app-bottom-nav {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 64px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          border-top: 1px solid #e0e0e0;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #9e9e9e;
          text-decoration: none;
          gap: 2px;
        }
        .nav-item-active,
        .nav-item.active {
          color: ${PRIMARY_TEAL};
        }
        .nav-item-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .nav-icon {
          font-size: 18px;
        }
        @media (min-width: 769px) {
          .app-root {
            flex-direction: row;
          }
          .app-header {
            display: none;
          }
          .app-bottom-nav {
            position: static;
            width: 240px;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 16px;
            gap: 8px;
          }
          .nav-item {
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            padding: 8px 12px;
            border-radius: 8px;
          }
          .nav-item.active {
            background: rgba(63, 111, 126, 0.08);
          }
          .app-main {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

