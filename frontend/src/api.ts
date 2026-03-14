const API_BASE =
  (import.meta.env.VITE_API_BASE as string | undefined) ||
  "http://localhost:8788";

export interface ApiError {
  error: string;
}

async function handleJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  const json = text ? (JSON.parse(text) as unknown) : {};
  if (!res.ok) {
    const msg =
      typeof (json as any)?.error === "string"
        ? (json as any).error
        : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return json as T;
}

export async function createProfile(payload: {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  jobTitle?: string;
  bio?: string;
}) {
  const res = await fetch(`${API_BASE}/api/profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return handleJson<{ profile: any }>(res);
}

export async function getProfile(username: string) {
  const res = await fetch(`${API_BASE}/api/profiles/${encodeURIComponent(username)}`);
  return handleJson<{ profile: any }>(res);
}

export async function scanBusinessCard(imageFile: File) {
  const fd = new FormData();
  fd.set("image", imageFile);
  const res = await fetch(`${API_BASE}/api/scans/business-card`, {
    method: "POST",
    body: fd
  });
  return handleJson<{ scan: any }>(res);
}

export async function listScans() {
  const res = await fetch(`${API_BASE}/api/scans`);
  return handleJson<{ scans: any[] }>(res);
}

export function exportScansUrl() {
  return `${API_BASE}/api/scans/export.xlsx`;
}

export async function createMeeting(payload: { title?: string; audioFile: File }) {
  const fd = new FormData();
  if (payload.title) fd.set("title", payload.title);
  fd.set("audio", payload.audioFile);
  const res = await fetch(`${API_BASE}/api/meetings`, {
    method: "POST",
    body: fd
  });
  return handleJson<{ meeting: any }>(res);
}

export async function listMeetings() {
  const res = await fetch(`${API_BASE}/api/meetings`);
  return handleJson<{ meetings: any[] }>(res);
}

