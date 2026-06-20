# Portfolio

A premium, interactive, and fully responsive developer portfolio built using React.js, Vite, and custom design tokens in Vanilla CSS. Features a dynamic dual-theme switch, scroll-spy navbar, categorized stack displays, alternating timelines, and responsive animations.

---

## Features

- **Dual-Theme System**: Easily toggle between a clean, human-friendly Light Theme (default) and a futuristic Dark Theme (neon highlights, ambient glows, and dark cards). Preference is saved in `localStorage`.
- **Sticky Scroll-Spy Navbar**: Sticky navigation header that detects the user's scroll position and dynamically highlights the active section. Accompanied by a responsive mobile drawer menu.
- **Fluid Animations**: Floating orbital nodes (animated SVG), scaling cards, hovering badges, and smooth scroll behaviors.
- **Scannable Tech Stack**: Categorized skills representation (Languages, Frontend, Backend, Tools) for quick reading by hiring managers.
- **Chronological Timelines**: Alternating professional experience blocks (internships, teaching assistant positions) and academic milestones.
- **Projects Showcase**: Grid cards showing description tags, source code, and live preview links.

---

## Tech Stack

- **Core**: React.js 19, HTML5
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Keyframes, Custom Transitions)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

---

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js (v18+) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arnim2006/Portfolio.git
   ```
2. Navigate into the project folder:
   ```bash
   cd Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### Building for Production

To compile and bundle the files for deployment:
```bash
npm run build
```
This generates optimized assets inside the `dist/` directory, ready to be hosted on Vercel, Netlify, or GitHub Pages.

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg      # Page favicon
│   └── icons.svg        # Helper vector icon definitions
├── src/
│   ├── assets/          # Static logos and image assets
│   ├── components/      # Modular portfolio components (Navbar, Hero, Skills...)
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Skills.jsx & Skills.css
│   │   └── ...
│   ├── App.jsx          # Main layout container & theme controller
│   ├── index.css        # Global CSS variables & design tokens
│   └── main.jsx         # Render mount point
├── index.html           # Main page structure & font imports
└── package.json         # Project dependency configurations
```
