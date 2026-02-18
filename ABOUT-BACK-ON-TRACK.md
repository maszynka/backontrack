# BackOnTrack — Mindful Browsing Extension

> A browser extension that fights mindless scrolling by asking one simple question: **"Why are you here?"**

---

## The Problem

Modern websites are engineered to capture attention. Users lose track of intent the moment they arrive.

- Infinite scroll patterns hijack dopamine loops
- Auto-playing content derails focus
- No mechanism exists to check your own intent
- The average person spends 7+ hours daily online, much of it unintentional

## The Solution

BackOnTrack creates a **micro-intervention** that restores intentionality to browsing.

- Prompts you to declare your intent on arrival
- Reminds you of that intent after a set time
- Visually dissociates the page to break the trance
- Lightweight, non-intrusive, fully user-controlled

---

## How It Works

```
1. Click extension icon  →  2. Type why you're here  →  3. Set timer (5 min)  →  4. Get reminded
```

---

## Core Modules

### ["Why Am I Here?" (WYAH)](docs/MODULE-WYAH.md)

The **cognitive** module. Injects a minimal input form into any webpage via Shadow DOM. You declare your reason for visiting, set a countdown timer, and the extension reminds you of your stated purpose when time expires.

**Pipeline:** Intent Capture → Timer → Reminder

### [Dissociation Effect](docs/MODULE-DISSOCIATION.md)

The **perceptual** module. Applies a visual distortion effect to the entire page content, creating a CSS-driven "dissociation" that makes the page feel unfamiliar — breaking the autopilot state and forcing conscious re-engagement.

**Pipeline:** Visual Disruption → Break Autopilot

### Module Relationship

```
┌─────────────────┐          ┌──────────────────────┐
│   WYAH Module   │─triggers─│  Dissociation Module  │
│  (cognitive)    │─enhances─│    (perceptual)       │
└─────────────────┘          └──────────────────────┘
```

The two modules work in tandem: WYAH triggers the dissociation effect immediately upon activation, creating a combined cognitive + perceptual intervention.

---

## Architecture

```
┌──────────────────────────────────────────┐
│           User Layer                      │
│       Browser Toolbar Button              │
└──────────────────┬───────────────────────┘
                   │ click
┌──────────────────▼───────────────────────┐
│      BackOnTrack Extension (MV2)          │
│           manifest.json                   │
└──────────────────┬───────────────────────┘
                   │ browserAction.onClicked
┌──────────────────▼───────────────────────┐
│      Background: content_script.js        │
│  executeScript(wyah.js) + insertCSS       │
└──────────┬───────────────┬───────────────┘
           │               │
┌──────────▼──────┐ ┌─────▼──────────────┐
│    wyah.js      │ │  wyah.css/reset.css │
│  DOM injection  │ │  Style isolation    │
│  Shadow DOM     │ │                     │
└──────────┬──────┘ └────────────────────┘
           │
┌──────────▼──────────────────────────────┐
│     Target: Any Webpage DOM              │
│  .dissociation-prepare + .dissociated    │
└──────────────────────────────────────────┘
```

### File Structure

```
backontrack/
├── manifest.json          # Chrome extension manifest (V2)
├── js/
│   ├── content_script.js  # Background script — listens for toolbar click
│   └── wyah.js            # Main logic — DOM injection + dissociation
├── css/
│   └── reset.css          # CSS reset for injected elements
├── sass/
│   ├── wyah.scss          # WYAH form styles + page effects
│   └── dissociate.scss    # Dissociation visual effect styles
├── images/
│   └── icon.png           # Extension icon
└── README.md
```

---

## Technology Stack

| Technology | Usage |
|---|---|
| **JavaScript (ES5+)** | Core logic, DOM manipulation |
| **Chrome Extensions API** | browserAction, executeScript, insertCSS |
| **Manifest V2** | Extension configuration |
| **Shadow DOM** | Isolated form injection |
| **SCSS / Sass** | Stylesheet preprocessing |
| **CSS Animations** | Dissociation transitions |

No frameworks. No build dependencies beyond Sass. Intentionally lightweight.

---

## Business & Social Value

### Productivity
By restoring intent-driven browsing, users reclaim hours previously lost to aimless scrolling. Even a 20% reduction in unintentional browsing saves ~1.5 hours daily.

### Mental Wellbeing
Mindless consumption correlates with increased anxiety and decreased satisfaction. BackOnTrack promotes conscious digital habits, supporting healthier screen relationships.

### Digital Literacy
Teaching users to recognize attention-hijacking patterns builds lasting awareness. The tool educates through practice, not preaching.

### Privacy by Architecture
Runs entirely client-side. No analytics, no tracking, no server calls. Your browsing intent stays on your machine.

### Open Source
Fully open, auditable, and extensible. Community-driven development ensures the tool serves users, not advertisers.

### Scalable Impact
As a browser extension, deployment is instant and global. Every install is one more person practicing intentional browsing.

---

## Current Status

| Feature | Status |
|---|---|
| DOM Injection (Shadow DOM) | Working |
| Dissociation visual effect | Working |
| CSS Reset isolation | Working |
| Intent input & storage | In Progress |
| Countdown timer | In Progress |
| Reminder notifications | In Progress |
| Website whitelist | Planned |

---

## HTML Documentation

- [Main Overview](ABOUT-BACK-ON-TRACK.html)
- [WYAH Module Details](app-wyah.html)
- [Dissociation Module Details](app-dissociation.html)
