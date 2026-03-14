## UNITAP – Real-World Networking OS (MVP)

This repo contains the **MVP implementation skeleton** for UNITAP based on your PRD.

### Tech Stack (proposed)
- **Frontend**: React (Vite) + TypeScript, PWA-ready
- **Backend**: Node.js + Express (TypeScript-ready), REST API
- **Database**: PostgreSQL (via Prisma or another ORM – to be wired up next)

### Structure
- `frontend/` – React app (PWA shell, pages, components, routing)
- `backend/` – API server (auth stub, profiles, QR generation, connections)

### Next Steps to Run (once Node/npm are installed)
1. Install Node.js (LTS) and npm on your system.
2. Inside `frontend/`:
   - `npm install`
   - `npm run dev`
3. Inside `backend/`:
   - create a `.env` file with `OCR_SPACE_API_KEY=<your-key-here>` and optionally `HF_TOKEN=<your-hf-token>`
   - `npm install`
   - `npm run dev`

I’ve scaffolded initial files and components to match **Phase 1 MVP**:
- Basic routing and layout
- Home dashboard shell with Quick Send UI
- Profile creation form skeleton
- Profile display page with QR URL wiring

You can open the project in Cursor and iterate from here.

