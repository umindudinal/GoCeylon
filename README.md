# 🌴 GoCeylon — Sri Lanka Travel & Tour Website

<div align="center">


**Explore the Beauty of Sri Lanka**

A modern, fully responsive travel and tourism website built with React, Vite, and Tailwind CSS — showcasing Sri Lanka's finest destinations, tour packages, and travel services.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-orange?style=for-the-badge)](https://umindudinal.github.io/GoCeylon/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📸 Preview

> Visit the live site: **[https://umindudinal.github.io/GoCeylon/](https://umindudinal.github.io/GoCeylon/)**

---

## ✨ Features

- 🏝️ **Destination Showcase** — Highlights Sri Lanka's most iconic locations: Sigiriya, Kandy, Ella, Yala, Mirissa, and Galle
- 📦 **Tour Packages** — 6 curated tour packages ranging from cultural triangles to coastal escapes
- 🎨 **Scroll Animations** — Smooth AOS (Animate on Scroll) animations throughout the page
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- ⚡ **Fast Performance** — Built with Vite for lightning-fast dev and build times
- 🚀 **GitHub Pages Deployment** — Auto-deploys on every push to `main`

---

## 🗂️ Project Structure

```
GoCeylon/
├── public/
│   └── logo.png              # Site logo
├── src/
│   ├── assets/               # Images (hero, services, packages, about)
│   ├── sections/
│   │   ├── Header.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── About.jsx         # About the travel agency
│   │   ├── Services.jsx      # Destination highlights
│   │   ├── CtaOne.jsx        # Call-to-action section
│   │   ├── Packages.jsx      # Tour packages grid
│   │   ├── Features.jsx      # Why travel with us
│   │   └── Footer.jsx        # Footer
│   ├── export.js             # Shared data (tour packages, features)
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🏖️ Sections Overview

| Section | Description |
|---|---|
| **Header** | Sticky navigation with smooth scroll links |
| **Hero** | Full-screen banner with background image and CTA button |
| **About** | Agency intro with key highlights (Best Destinations, Affordable Price) |
| **Services** | Grid of 6 featured Sri Lankan destinations |
| **CTA** | Mid-page call-to-action to encourage bookings |
| **Packages** | 6 tour packages with pricing, duration, and group size |
| **Features** | Three trust signals: Local Guides, Certified Agency, 24/7 Support |
| **Footer** | Contact and copyright info |

---

## 🧳 Tour Packages

| Package | Duration | Price/Person | Group Size |
|---|---|---|---|
| Cultural Triangle Explorer | 4D/3N | $69 | 7 pax |
| Hill Country Scenic Journey | 2D/4N | $79 | 10 pax |
| Wildlife Safari Adventure | 7D/4N | $99 | 12 pax |
| South Coast Beach Escape | 8D/2N | $85 | 14 pax |
| Ultimate Sri Lanka Highlights | 1D/2N | $299 | 3 pax |
| East Coast Beach & Culture | 9D/3N | $79 | 13 pax |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI framework |
| [Vite](https://vitejs.dev/) | 7.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [AOS](https://michalsnik.github.io/aos/) | 2.3.x | Scroll animations |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.x | Icon library |
| [React Router DOM](https://reactrouter.com/) | 7.x | Client-side routing |
| [React Scroll](https://www.npmjs.com/package/react-scroll) | 1.9.x | Smooth scroll navigation |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | 6.x | GitHub Pages deployment |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/umindudinal/GoCeylon.git

# 2. Navigate into the project
cd GoCeylon

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🌐 Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages via the `gh-pages` package.

### One-time setup

1. Go to your repository on GitHub
2. Open **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

### Manual deploy

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then publishes the `dist/` folder to the `gh-pages` branch.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Umindu Dinal**

- GitHub: [@umindudinal](https://github.com/umindudinal)

---

<div align="center">
  Made with ❤️ for Sri Lanka 🇱🇰
</div>
