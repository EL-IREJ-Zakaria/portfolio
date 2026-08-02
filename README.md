# Zakaria El Irej — Portfolio

A world-class, production-ready developer portfolio built with React 19, TypeScript, Vite, TailwindCSS, and Framer Motion.

## ✨ Features

- **Loading screen** with animated progress bar
- **Custom animated cursor** with spring physics
- **Scroll progress indicator** at the top
- **Command palette** (Ctrl+K) for keyboard navigation
- **Back to top** button
- **Sticky glassmorphism navbar** with active section tracking
- **Hero section** with typing effect, floating tech icons, particle background, and parallax
- **Tech marquee** strip
- **About section** with passion cards and animated counters
- **Skills section** with tabbed category view and animated skill badges
- **Projects section** with hover-animated cards, tech badges, GitHub/Demo links
- **Experience section** with timeline layout
- **Education section** with timeline + animated language progress bars
- **Applications section** with mobile app cards and status badges
- **Contact section** with form + social links
- **Footer** with navigation and tech stack

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 19, TypeScript |
| Build | Vite 6 |
| Styling | TailwindCSS 3, glassmorphism utilities |
| Animation | Framer Motion 11, GSAP 3 |
| Scroll | Lenis smooth scroll |
| Icons | React Icons 5, Lucide React |
| UI | Shadcn UI (Button component) |

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx          # Shadcn button
│   ├── About.tsx
│   ├── AnimatedCounter.tsx
│   ├── Applications.tsx
│   ├── BackToTop.tsx
│   ├── CommandPalette.tsx
│   ├── Contact.tsx
│   ├── CursorGlow.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionHeader.tsx
│   ├── SectionWrapper.tsx
│   ├── Skills.tsx
│   └── TechMarquee.tsx
├── constants/
│   └── data.ts                 # All content data
├── hooks/
│   ├── useMousePosition.ts
│   ├── useScrollProgress.ts
│   ├── useSmoothScroll.ts
│   └── useTypingEffect.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#030712` |
| Card | `#111827` |
| Primary | `#3B82F6` |
| Secondary | `#60A5FA` |
| Accent | `#06B6D4` |
| Muted | `#94A3B8` |
| Font | Inter + JetBrains Mono |

## 📄 CV

Place your CV at `public/zakariaCV.pdf` — the Download CV button links to it automatically.

## 🌐 Deployment

The project builds to `dist/` and can be deployed to any static host:

- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop `dist/`
- **GitHub Pages**: use `gh-pages` package

---

Made with ❤️ by **Zakaria El Irej**
