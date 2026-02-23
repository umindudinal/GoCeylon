# GoCeylon (React + Vite)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

This project includes a workflow at `.github/workflows/deploy.yml` that automatically deploys on every push to `main`.

One-time setup in GitHub repo settings:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, push to `main` and GitHub will build and publish the site automatically.
