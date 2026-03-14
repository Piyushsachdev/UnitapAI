import { useEffect, useMemo, useRef, useState } from "react";
import { createMeeting, listMeetings } from "../api";

const PRIMARY_TEAL = "#3F6F7E";

type Meeting = {
  id: string;
  created_at: number;
  title?: string | null;
  transcript: string;
  summary: string;
  action_items?: string[];
};

export const MeetingCompanionPage = () => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "recording" }
    | { type: "processing" }
    | { type: "error"; message: string }
    | { type: "done" }
  >({ type: "idle" });

  const [title, setTitle] = useState("");
  const [latest, setLatest] = useState<Meeting | null>(null);
  const [history, setHistory] = useState<Meeting[]>([]);

  const canRecord = useMemo(() => typeof MediaRecorder !== "undefined", []);

  const refresh = async () => {
    const { meetings } = await listMeetings();
    setHistory(meetings as any);
  };

  useEffect(() => {
    refresh().catch(() => {});
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setRecording(true);
      setStatus({ type: "recording" });
    } catch (e) {
      setStatus({ type: "error", message: (e as Error).message });
    }
  };

  const stopRecording = async () => {
    const mr = mediaRecorderRef.current;
    if (!mr) return;
    setRecording(false);
    setStatus({ type: "processing" });

    await new Promise<void>((resolve) => {
      mr.onstop = () => resolve();
      mr.stop();
    });

    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    const file = new File([blob], "meeting.webm", { type: "audio/webm" });

    try {
      const { meeting } = await createMeeting({
        title: title.trim() || undefined,
        audioFile: file
      });
      setLatest(meeting as any);
      await refresh();
      setStatus({ type: "done" });
    } catch (e) {
      setStatus({ type: "error", message: (e as Error).message });
    }
  };

  return (
    <div className="mc-root">
      <section className="mc-header">
        <div className="brand-badge">UNITAP MEETINGS</div>
        <h1>AI Meeting Companion</h1>
        <p>
          Turn real-world conversations into structured summaries, action items,
          and follow-ups with intelligent audio analysis.
        </p>
      </section>

      <section className="mc-actions card">
        <input
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Meeting title (e.g., Q1 Strategy Planning)"
        />
        <div className="action-buttons">
          {!recording ? (
            <button
              type="button"
              className="btn-primary"
              onClick={startRecording}
              disabled={!canRecord || status.type === "processing"}
            >
              Start Recording
            </button>
          ) : (
            <button type="button" className="btn-danger" onClick={stopRecording}>
              Stop & Generate Summary
            </button>
          )}
        </div>
      </section>

      {status.type === "processing" && (
        <div className="info-banner">
          <span className="spinner">⏳</span> AI is processing your audio. This can take up to 30 seconds on the free tier.
        </div>
      )}
      {status.type === "error" && (
        <div className="error-banner">{status.message}</div>
      )}

      {latest && (status.type === "done" || status.type === "idle") && (
        <section className="mc-result card">
          <div className="result-header">
            <h2>Latest Analysis</h2>
            <div className="meeting-time">
              {new Date(latest.created_at).toLocaleString()}
            </div>
          </div>
          
          <div className="summary-section">
            <h3>Executive Summary</h3>
            <div className="mc-summary">{latest.summary}</div>
          </div>

          <div className="items-section">
            <h3>Action Items</h3>
            {(latest.action_items || []).length === 0 ? (
              <div className="muted">No specific action items were detected in the conversation.</div>
            ) : (
              <ul className="items">
                {(latest.action_items || []).map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      <section className="mc-list">
        <div className="mc-list-header">
          <h2>Recent meetings</h2>
          <button className="link-button" type="button" onClick={() => refresh()}>
            Refresh history
          </button>
        </div>
        {history.length === 0 ? (
          <div className="mc-empty-hint card">
            No meetings recorded yet. Use the button above to start your first session.
          </div>
        ) : (
          <div className="history-grid">
            {history.slice(0, 10).map((m) => (
              <button
                key={m.id}
                type="button"
                className="mc-card card"
                onClick={() => setLatest(m)}
              >
                <div className="mc-card-main">
                  <div className="avatar">
                    {(m.title || "M")[0].toUpperCase()}
                  </div>
                  <div className="mc-card-content">
                    <div className="mc-title">{m.title || "Untitled meeting"}</div>
                    <div className="mc-meta">
                      {new Date(m.created_at).toLocaleDateString()}
                    </div>
                    <div className="mc-tags">
                      <span className="tag">{(m.action_items || []).length} items</span>
                      <span className="tag">{m.transcript ? "Transcript" : "Summary only"}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .mc-root {
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
        .mc-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
        }
        .mc-header p {
          font-size: 15px;
          color: var(--gray-700);
          max-width: 500px;
        }
        .mc-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .action-buttons {
          display: flex;
          gap: 12px;
        }
        .title-input {
          width: 100%;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          font-size: 14px;
          outline: none;
          background: var(--accent-white);
          transition: var(--transition-smooth);
        }
        .title-input:focus {
          border-color: var(--primary-teal);
          box-shadow: 0 0 0 3px rgba(63, 111, 126, 0.1);
        }
        .btn-danger {
          background: #c62828;
          color: var(--accent-white);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .btn-danger:hover {
          background: #b71c1c;
          transform: translateY(-1px);
        }
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }
        .meeting-time {
          font-size: 13px;
          color: var(--gray-400);
        }
        .summary-section h3, .items-section h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--gray-700);
          margin-bottom: 12px;
        }
        .mc-summary {
          font-size: 16px;
          line-height: 1.6;
          color: var(--secondary-black);
          margin-bottom: 32px;
        }
        .items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .items li {
          padding-left: 24px;
          position: relative;
          font-size: 15px;
        }
        .items li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--primary-teal);
          font-weight: bold;
        }
        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .mc-card {
          text-align: left;
          width: 100%;
          cursor: pointer;
          border: 1px solid var(--border-color);
          padding: 16px;
        }
        .mc-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .mc-card-main {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .avatar {
          width: 48px;
          height: 48px;
          background: var(--primary-teal);
          color: var(--accent-white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
        }
        .mc-title {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 4px;
        }
        .mc-meta {
          font-size: 12px;
          color: var(--gray-400);
          margin-bottom: 8px;
        }
        .mc-tags {
          display: flex;
          gap: 8px;
        }
        .tag {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          background: var(--gray-50);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--gray-700);
        }
        .info-banner {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .spinner {
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

