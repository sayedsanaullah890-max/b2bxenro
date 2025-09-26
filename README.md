# B2B Starter Medusa (with Admin placeholder)

This repo has 3 parts:

- `backend/` → Express backend (replace later with Medusa backend and run migrations/admin user)
- `storefront/` → Next.js storefront
- `admin/` → Minimal Next.js admin shell (you can replace with official Medusa Admin)

## Deploy
- Backend → Render (set env vars from `backend/.env.example`)
- Storefront → Vercel (`NEXT_PUBLIC_MEDUSA_BACKEND_URL` points to backend)
- Admin → Vercel (`NEXT_PUBLIC_MEDUSA_BACKEND_URL` points to backend)

After you switch to a real Medusa backend, you can remove this placeholder admin and deploy the official Admin app.
