# miniproject
A small component library featuring reusable and accessible UI components (InputField, DataTable), styled with CSS and documented in Storybook. Demonstrates component-driven development, state handling, and deployment via Chromatic/Vercel.

# Frontend Assignment — Component Library

## Deliverables
- **GitHub Repository**: https://github.com/<your-username>/<repo-name>
- **Storybook Preview**:
  - Chromatic: https://www.chromatic.com/build?appId=<your-app-id>
  - OR Vercel: https://<your-vercel-deployment>.vercel.app

## Project Overview
This project implements reusable UI components (`InputField`, `DataTable`) with responsive design and accessibility in mind.  
Storybook is used for interactive documentation, testing different states, and visual regression checks.

## Repository Structure
- `src/components/` — React components with CSS and stories
- `storybook/` — Storybook configuration
- `public/` — Static assets
- `.github/workflows/` — CI for Chromatic deployment

## Setup Instructions
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run storybook   # Run Storybook locally
