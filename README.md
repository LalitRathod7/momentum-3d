# Momentum — 3D Web Experience (Task 3)

An interactive 3D product page built with **React + Vite**, **React Three Fiber** (Three.js), and **GSAP ScrollTrigger**, for Task 3 of the frontend internship (Week 3).

## ⚠️ About the Algoryx Community asset

The brief asks you to download an asset from "Algoryx Community." I looked into this before building: **Algoryx is a real company, but they make physics-simulation software (AGX Dynamics) for robotics and heavy machinery — I couldn't find a public "Community 3D assets" download section on their site.** It's possible your program means a different or internal link, or the name is slightly off.

Creating an account and downloading a gated asset also isn't something that can be done for you automatically — it needs a person to sign up and click through the actual site.

**What this project does instead:** it ships with a fully working, production-quality 3D experience built around a *procedural* stand-in asset — a robotic arm built from plain Three.js primitives (no external file needed) — chosen because it matches what Algoryx's actual software (AGX Dynamics) simulates: articulated machinery and robotics. Everything else (layout, lighting, scroll animation, interactive orbit controls) is asset-agnostic and works the same regardless of what 3D model sits inside it.

### To finish this properly for submission:

1. Find the actual asset source your program means (ask your mentor/coordinator if "Algoryx Community" doesn't resolve to anything for you either — it's a fair question to raise).
2. Sign in and download a `.glb` or `.gltf` file.
3. Drop it in `public/models/your-asset.glb`.
4. Open `src/components/CustomAssetExample.jsx` — it's a fully commented, ready-to-use component using `@react-three/drei`'s `useGLTF` loader. Copy its pattern into `Hero.jsx` and `Showcase.jsx` in place of `<RoboticArm />`.

That swap is the only thing separating this from being "your real downloaded asset integrated into a polished site" — the architecture already assumes it.

## Preview

- **Live demo:** _add your Vercel/Netlify URL_
- **Screenshots:** `screenshots/desktop.png`, `screenshots/mobile.png`

## Project requirements checklist

| Requirement | Where |
| --- | --- |
| Responsive layout | Every section is mobile-first with `sm:`/`md:` breakpoints |
| Professional navbar | `Navbar.jsx` — solidifies on scroll, mobile drawer menu |
| Hero | `Hero.jsx` — full-bleed 3D canvas behind the headline |
| Multiple sections | Hero, Showcase, Features, Specs, Contact, Footer |
| 3D asset integration | `RoboticArm.jsx` rendered in both `Hero.jsx` (ambient) and `Showcase.jsx` (user-controlled orbit/zoom) |
| Footer | `Footer.jsx` |
| Typography | Space Grotesk (display) + Space Mono (technical labels) + Inter (body) |
| Smooth transitions | GSAP `ScrollTrigger` reveals (`useReveal.js`), CSS transitions on hover/nav |

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + Vite |
| 3D | Three.js via `@react-three/fiber` + `@react-three/drei` |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger |
| Icons | lucide-react |

## Project structure

```
momentum-3d/
├── public/
│   └── models/           # put your real downloaded .glb here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx              # ambient 3D canvas + headline
│   │   ├── Showcase.jsx          # interactive orbit/zoom canvas
│   │   ├── RoboticArm.jsx        # procedural stand-in 3D asset
│   │   ├── CustomAssetExample.jsx# how to load YOUR real asset
│   │   ├── SceneLighting.jsx     # shared lights/environment
│   │   ├── Features.jsx
│   │   ├── Specs.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx            # GSAP scroll-reveal wrapper
│   ├── hooks/
│   │   └── useReveal.js
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
npm run preview
```

## Performance notes

- The procedural model uses primitive geometries only — no textures to load, so first paint is fast. A real `.glb` should be kept under a few MB and compressed (Draco/meshopt) for the same effect.
- `dpr={[1, 1.5]}` caps the canvas pixel ratio so high-DPI phones don't render at full resolution unnecessarily.
- `<Suspense>` wraps the 3D content so a real (async-loading) asset won't block the rest of the page from rendering.

## Deployment

Static Vite build, deploys the same way as the other tasks:

1. Push to GitHub.
2. Import into Vercel/Netlify.
3. Build command: `npm run build`, output directory: `dist`.

## Learning outcomes covered

- Integrating Three.js into React via React Three Fiber (declarative scene graph, `useFrame` for animation loops)
- Scroll-driven animation with GSAP `ScrollTrigger`
- Structuring a 3D scene (lighting, materials, camera) as reusable components
- Designing for a 3D asset that may change (procedural placeholder → real download) without touching layout code
- Basic 3D performance considerations (DPR capping, Suspense boundaries, shadow map sizing)
