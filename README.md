# 🌴 GoCeylon

> A modern, responsive Sri Lanka travel website built with React and Tailwind CSS — showcasing tour packages, destinations, and services to help travelers explore the beauty of Sri Lanka.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

🌐 **Live Demo:** [umindudinal.github.io/GoCeylon](https://umindudinal.github.io/GoCeylon/)

---

## 📖 About

**GoCeylon** is a front-end Sri Lanka travel and tour website built with React 19, Tailwind CSS 4, and Vite. It features AOS scroll animations, smooth React Scroll navigation, and is deployed on GitHub Pages. The site presents curated Sri Lanka tour packages, popular destinations, and travel services — designed to inspire visitors to explore Sri Lanka's beaches, heritage sites, wildlife, and hill country.

---

## ✨ Features

- 🏠 **Hero** — Full-screen banner with the headline *"Explore the Beauty of Sri Lanka"* and a Book Your Tour CTA button
- ℹ️ **About** — Company intro with Best Destination and Affordable Price highlights
- 🗺️ **Services** — 5 featured Sri Lanka destinations: Sigiriya, Kandy, Ella, Yala, Mirissa
- 📦 **Packages** — 6 tour package cards with price, duration, group size, and description
- 🎯 **CTA** — *"Ready to Explore Sri Lanka?"* call-to-action banner section
- ⭐ **Features** — 3 trust-building highlights: Professional Local Guides, Certified Agency, 24/7 Support
- 📧 **Footer** — Newsletter subscription, Quick Links, contact details, and Travel Services list
- 📱 **Responsive Design** — Mobile-friendly with animated slide-down hamburger menu
- 🎞️ **AOS Animations** — Scroll-triggered zoom-in and slide-up animations throughout

---

## 🗺️ Tour Packages

| Package | Duration | Group Size | Price |
|---------|----------|------------|-------|
| Cultural Triangle Explorer | 4D/3N | 7 pax | $69 |
| Hill Country Scenic Journey | 2D/4N | 10 pax | $79 |
| Wildlife Safari Adventure | 7D/4N | 12 pax | $99 |
| South Coast Beach Escape | 8D/2N | 14 pax | $85 |
| Ultimate Sri Lanka Highlights Tour | 1D/2N | 3 pax | $299 |
| East Coast Beach & Culture Tour | 9D/3N | 13 pax | $79 |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React 19 | Component-based UI |
| Tailwind CSS 4 | Utility-first styling |
| Vite 7 | Build tool and dev server |
| AOS 2.3 | Scroll animation library |
| React Icons 5 | Icon components |
| React Router DOM 7 | Client-side routing |
| React Scroll | Smooth anchor scrolling |
| gh-pages | GitHub Pages deployment |

---

## 📁 Project Structure

```
GoCeylon/
│
├── index.html              # App entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
│
└── src/
    ├── main.jsx            # React DOM render entry
    ├── App.jsx             # Root component — assembles all sections
    ├── index.css           # Global styles
    ├── export.js           # Shared data (tour packages, features)
    │
    ├── sections/           # Page section components
    │   ├── Header.jsx      # Navbar with mobile hamburger menu
    │   ├── Hero.jsx        # Full-screen hero with CTA
    │   ├── About.jsx       # About section with highlights
    │   ├── Services.jsx    # Destinations grid (Sigiriya, Kandy, Ella...)
    │   ├── CtaOne.jsx      # Call-to-action banner
    │   ├── Packages.jsx    # Tour packages cards
    │   ├── Features.jsx    # Why travel with us section
    │   └── Footer.jsx      # Footer with newsletter and links
    │
    └── assets/             # Images and global CSS
        ├── hero.webp
        ├── about2.webp
        ├── packages1.webp ... packages6.webp
        ├── service1.webp / service2.webp / service4.webp
        ├── logo1.jpg ... logo6.jpg
        └── index.css
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/umindudinal/GoCeylon.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd GoCeylon
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🚀 Deployment

This project is deployed to GitHub Pages using the `gh-pages` package.

```bash
# Build and deploy
npm run deploy
```

The `homepage` field in `package.json` is set to:
```
https://umindudinal.github.io/GoCeylon/
```

---

## 🧭 Navigation Sections

| Section | Anchor |
|---------|--------|
| Home | `#home` |
| About | `#about` |
| Services | `#services` |
| Features | `#features` |
| Contact | `#contact` |

---

## 👨‍💻 Author

**Umindu Dinal**
- GitHub: [@umindudinal](https://github.com/umindudinal)
- Email: umindudinal@gmail.com
- Phone: +97 77 964 8818

---

## 📄 License

Copyright © 2025 GoCeylon. All Rights Reserved.

---

<p align="center">Made with ❤️ for Sri Lanka Tourism</p>
