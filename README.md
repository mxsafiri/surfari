# Surfari

A Tanzania life-sim on the real map of Dar es Salaam: ride the city, go to
real places, work shifts and build your life. Next.js 16, Mapbox GL,
three.js, Neon Postgres. Deployed on Vercel.

Split out of [mxsafiri/ubongo.os](https://github.com/mxsafiri/ubongo.os)
with its full history.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in DATABASE_URL and NEXT_PUBLIC_MAPBOX_TOKEN
npm run dev                  # http://localhost:3000 → /surfari
```

## Environment

| Variable | What |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string (the same database as before the split) |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox public token |

## Test

```bash
npm test                                   # unit tests
TEST_DATABASE_URL=postgres://… npm test    # include the database tests
```

Read `AGENTS.md` before changing Next.js code: this Next.js version differs
from older docs.
