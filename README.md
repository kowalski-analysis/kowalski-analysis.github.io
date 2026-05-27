# kowalski-analysis.github.io

Personal security research and systems engineering portfolio.
Built with Vite + React. Deployed via GitHub Actions to GitHub Pages.

Live at: https://kowalski-analysis.github.io

---

## Quick Start — Deploy in 5 Steps

### 1. Create the GitHub repo

Name it **exactly**: `kowalski-analysis.github.io`

Go to https://github.com/new, set it to Public, do NOT initialise
with a README or any files.

### 2. Extract and enter the project

```bash
unzip kowalski-portfolio-source.zip
cd portfolio/
```

### 3. Install dependencies

```bash
npm install
```

### 4. Push to GitHub

```bash
git init
git remote add origin https://github.com/kowalski-analysis/kowalski-analysis.github.io.git
git add .
git commit -m "Initial portfolio"
git branch -m master main
git push -u origin main
```

When prompted for password, use a Personal Access Token (not your
GitHub password). Generate one at:
https://github.com/settings/tokens/new
Scope required: repo (top-level checkbox)

### 5. Enable GitHub Pages

GitHub repo -> Settings -> Pages -> Source -> GitHub Actions -> Save

The workflow in .github/workflows/deploy.yml runs npm run build on
every push to main and deploys the dist/ output. Live in ~2 minutes
at https://kowalski-analysis.github.io

---

## Local Development

```bash
npm install
npm run dev
# open http://localhost:5173
```

---

## Project Structure

```
portfolio/
├── index.html                        Root HTML, meta tags, font imports
├── vite.config.js                    Build config, vendor chunk split
├── package.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml                Auto-build and deploy on push to main
├── public/
│   └── assets/                       Static assets (add avatar.png here)
└── src/
    ├── main.jsx                      React entry point
    ├── App.jsx                       Root component, section order
    ├── hooks/
    │   └── useScrollReveal.js        IntersectionObserver scroll reveal
    ├── components/
    │   ├── Nav.jsx                   Fixed nav, mobile hamburger drawer
    │   ├── Hero.jsx                  Name, handle, roles typewriter, socials, stats
    │   ├── About.jsx                 Bio paragraphs and meta table
    │   ├── Skills.jsx                Skill tag groups
    │   ├── Experience.jsx            Timeline work history
    │   ├── Projects.jsx              Open-source tools (SAS, PrivescCheck-Color)
    │   ├── Certifications.jsx        Two tracks: Offensive Security + Systems Engineering
    │   ├── Platforms.jsx             HTB, THM, OffSec PG, CTF stats and awards
    │   ├── Writeups.jsx              Security CTF/machine writeups with filter
    │   ├── SysContent.jsx            Systems engineering cert roadmap + lab posts
    │   ├── Contact.jsx               Contact cards (email, github, linkedin, x, youtube, htb)
    │   └── Footer.jsx
    └── styles/
        ├── globals.css               CSS variables, resets, shared utilities
        ├── Nav.module.css
        ├── Hero.module.css
        ├── About.module.css
        ├── Skills.module.css
        ├── Experience.module.css
        ├── Projects.module.css
        ├── Certifications.module.css
        ├── Platforms.module.css
        ├── Writeups.module.css
        ├── SysContent.module.css
        ├── Contact.module.css
        └── Footer.module.css
```

---

## Sections

| # | ID          | Component          | Purpose                                     |
|---|-------------|--------------------|---------------------------------------------|
| — | hero        | Hero.jsx           | Name, handle, roles, socials, stats         |
| 01| about       | About.jsx          | Bio and meta                                |
| 02| skills      | Skills.jsx         | Offensive techniques, tools, languages      |
| 03| experience  | Experience.jsx     | Work history timeline                       |
| 04| projects    | Projects.jsx       | Open-source tools                           |
| 05| certs       | Certifications.jsx | Offensive Security + Systems Engineering    |
| 06| platforms   | Platforms.jsx      | HTB, THM, OffSec PG, CTF, awards            |
| 07| writeups    | Writeups.jsx       | Security machine/challenge writeups         |
| 08| syseng      | SysContent.jsx     | Cert roadmap + Linux/OpenShift/K8s lab posts|
| 09| contact     | Contact.jsx        | Email, GitHub, LinkedIn, X, YouTube, HTB    |

---

## Updating Content

All content is in the data arrays at the top of each component file.
Edit the array, save, push. GitHub Actions rebuilds automatically.

### Placeholders still to fill in

| What                      | File                     | Field                     |
|---------------------------|--------------------------|---------------------------|
| Your email address        | src/components/Contact.jsx | CARDS array (appears twice) |
| HTB numeric user ID       | src/components/Hero.jsx  | SOCIALS array href        |
|                           | src/components/Contact.jsx | CARDS array href + value  |
| HTB real stats            | src/components/Hero.jsx  | STATS array               |
|                           | src/components/Platforms.jsx | PLATFORMS array        |
| HTB rank title            | src/components/Platforms.jsx | PLATFORMS[0].stats    |
| TryHackMe username        | src/components/Hero.jsx  | SOCIALS array href        |
| Work history              | src/components/Experience.jsx | JOBS array            |
| Real writeup titles + URLs| src/components/Writeups.jsx | WRITEUPS array           |
| CTF team name             | src/components/Platforms.jsx | PLATFORMS[3]            |
| CTF event placements      | src/components/Platforms.jsx | AWARDS array            |
| Lab post titles + URLs    | src/components/SysContent.jsx | POSTS array            |
| PGP fingerprint (optional)| src/components/Contact.jsx | pgpKey section          |

### Adding a security writeup

In src/components/Writeups.jsx, add to the WRITEUPS array:

```js
{
  platform: 'hackthebox',   // hackthebox | tryhackme | offsec
  name: 'Machine Name',
  diff: 'hard',             // easy | medium | hard | insane
  date: '2025-06',
  href: 'https://your-writeup-url',
},
```

### Adding a systems engineering lab post

In src/components/SysContent.jsx, add to the POSTS array:

```js
{
  track: 'rhcsa',           // rhcsa | openshift | kubernetes | ansible
  title: 'Your post title',
  type:  'lab',             // lab | guide | notes | walkthrough
  date:  '2025-06',
  href:  'https://your-post-url',
},
```

### Adding a cert track or exam to the roadmap

In src/components/SysContent.jsx, edit CERT_TRACKS.
Each level entry:

```js
{
  num:    'L3',
  label:  'Specialist',
  exam:   'EX430 — OpenShift Advanced Cluster Security',
  status: 'planned',        // earned | progress | planned
  goal:   true,             // optional, renders amber 'goal' badge
}
```

---

## Typography

- Special Elite    Typewriter display. Mirrors IBM Selectric output used in
                   the 1973 Bell Telephone Laboratories Unix Programmer's Manual.
- IM Fell English  17th-century English serif digitisation. Closest freely
                   available analogue to the manual's body text.
- Fira Code        Monospace for navigation, labels, and terminal elements.

---

## Technology

- Vite 6 + React 18
- CSS Modules (no CSS-in-JS, no Tailwind)
- Zero runtime dependencies beyond React
- GitHub Actions for CI/CD
- GitHub Pages for hosting (free)
