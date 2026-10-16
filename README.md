# SUTRA CoatTwin — An AI-Assisted Coating Intelligence Platform

An independent prototype concept developed for academic and innovation purposes. Not an official Asian Paints product or endorsed platform.

## Overview

SUTRA CoatTwin is a bilingual (English/हिन्दी), responsive, interactive web application demonstrating an AI-assisted coating intelligence workflow. It was built to illustrate how formulation variables can be explored and linked to performance indicators in a way that is transparent and scientifically honest.

### Key Features

- **Bilingual UI**: English (default) and हिन्दी with instant switching (no full reload), persisted in `localStorage`
- **8 Working Pages**: Landing, Overview Dashboard, Formulation Studio, AI Prediction Lab, Formulation Comparison, Explainable Insights, Validation Centre, Data Explorer, About
- **Prediction Workflow**: Guided 6-step flow with demo mode clearly labelled "Demonstration only — not scientifically validated"
- **Comparisons**: Compare up to 3 saved formulations side-by-side
- **Insights & Validation**: Explainable driver visualisations and synthetic validation pairs with demo metrics
- **Honest by Design**: Illustrative values only; no trained/claimed production model; all seeded/synthetic data labelled; no fabricated lab results

## Tech Stack

**Frontend (React + Vite + TypeScript)**

- React 18, Vite 5, TypeScript 5.6
- Tailwind CSS 3.4 (with custom warm palette)
- React Router DOM 6
- Framer Motion (page transitions, animations; respects `prefers-reduced-motion`)
- Recharts (charts)
- Lucide React (icons)

**Backend (Optional - FastAPI)**

- FastAPI, Uvicorn, Pydantic
- pandas, numpy, scikit-learn (for integrating a real model)
- Python 3.11+ compatible (tested with Python 3.15)

## Quick Start

### Prerequisites

- Node.js v18+ and npm (project tested on Node 24.18.0, npm 11.16.0)
- Python 3.11+ (for optional backend)

### 1. Install Frontend Dependencies

```bash
cd C:\Users\lenovo\Downloads\SUTRA CoatTwin
npm install
```

### 2. Run Frontend (Dev)

```bash
npm run dev
```

The app will be available at http://localhost:5173 by default. The dev server will also run on the next available port if 5173 is busy (e.g., http://localhost:5199).

### 3. Build for Production

```bash
npm run build
```

The build outputs to `dist/`. Preview with:

```bash
npm run preview
```

### 4. Typecheck

```bash
npm run typecheck
```

## Optional: Connect a Real ML Model (FastAPI Backend)

The frontend can call an optional FastAPI backend when `VITE_PREDICTION_PROVIDER=api`. A demo backend is included in `backend/`.

### Setup Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API will be available at http://127.0.0.1:8000. Interactive docs at http://127.0.0.1:8000/docs.

### Backend Endpoints

- `GET /health` - Health check
- `POST /predict` - Predict a single property for a formulation (returns `PredictionResponse` with `kind: "illustrative"` and `modelStatus: "demo"` in this prototype)
- `POST /validate` - Return validation metrics for a pair of formulations
- `GET /` - Root info

The request/response shapes are documented in `src/pages/About.tsx` under "Connecting to a Real ML Model / API Contract".

### Frontend Configuration

Copy `.env.example` to `.env` (or use environment variables):

```env
# Use 'demo' (default) or 'api'
VITE_PREDICTION_PROVIDER=api

# Backend base URL when using api provider
VITE_API_BASE_URL=http://127.0.0.1:8000

# Optional: proxy API calls via Vite (e.g., /api)
# VITE_API_PROXY=/api
```

When using `VITE_API_PROXY=/api`, Vite will proxy `/api/*` to the backend. Update your backend to serve under `/api` if desired, or adjust accordingly.

### Connecting Your Own Model

1. Replace the demo logic in `backend/app/main.py` with your trained model (load model/artifacts at startup)
2. Return predictions with appropriate units and, if your model produces uncertainty, populate `uncertainty` with a clear `basis`
3. Update `providerLabel` and `modelStatus` appropriately
4. Ensure `kind` remains truthful: only set `kind: "measured"` if using real measured values; for model predictions use `predicted` (and label as such)
5. Validate inputs and return meaningful error messages
6. The frontend's `PredictionResult` shape is defined in `src/lib/types.ts` and is swappable via the provider interface (`src/lib/prediction/`)

**Important:** This prototype is deliberately conservative about scientific claims. The frontend UI shows demo disclaimers. Any real integration must preserve honest labelling.

## Project Structure

```
src/
├── components/       # UI components, layout, charts, illustrations
├── i18n/             # English and Hindi translations
├── lib/              # Types, validation, demo data, storage, prediction providers
├── pages/            # All 8 pages + landing + 404
├── state/            # Context providers (toast, formulations, predictions)
└── App.tsx           # Routes and providers

backend/
├── app/main.py       # FastAPI demo backend
└── requirements.txt
```

## Design & Constraints

- **Scientific Honesty**: Demo mode is clearly labelled throughout. No fabricated lab results, no official partnerships claimed.
- **Bilingual**: All user-facing strings are translated; missing keys fall back to English. Type-safe via `Dictionary = typeof en`.
- **Performance**: Code-split not forced, but Vite handles bundling; Framer Motion animations respect reduced-motion.
- **Persistence**: User formulations and predictions saved to `localStorage`. Synthetic/dataset records are generated in-memory per session.
- **Styling**: Warm palette defined in Tailwind config; Manrope/Plus Jakarta Sans + Noto Sans Devanagari via Google Fonts (in `index.html`).
- **Responsiveness**: Mobile-friendly with sidebar drawer on small screens.

## Data & Demo Mode

- **Seeded Examples**: Read-only example formulations provided for exploration
- **Synthetic Dataset**: Generated in-browser with a seeded PRNG for demo visualisations in Data Explorer and Validation Centre
- **Prediction Provider**: Controlled via `VITE_PREDICTION_PROVIDER` (default `demo`). The demo provider uses rule-based heuristics and returns `kind: "illustrative"`, `modelStatus: "demo"`, `uncertainty: null`

## Browser Compatibility

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Tested in development environment.

## Notes on Implementation

- Language switching does **not** remount the app, so drafts/results/scroll state persist
- Formulations from examples can be duplicated to create editable copies
- CSV import/export utilities in `src/lib/storage.ts` for formulation data (demo-labelled)
- All charts and numbers include kind/labels where appropriate
- The landing page (`/`) sits outside the app shell for a clean marketing layout

## License & Disclaimer

**Independent prototype concept** developed for academic and innovation purposes. **Not an official Asian Paints product or endorsed platform.** "Demonstration only — not scientifically validated." All illustrative values are generated for demonstration purposes only.

## Run Commands Summary

```bash
# Install
npm install

# Dev (frontend)
npm run dev

# Typecheck
npm run typecheck

# Build
npm run build

# Preview production build
npm run preview

# Backend (optional)
cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload --port 8000
```
