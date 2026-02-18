# Dissociation Module — Visual Pattern Break

> The perceptual intervention engine of BackOnTrack.

---

## Concept

The Dissociation module applies a **CSS-driven visual distortion** to the entire page, making familiar content feel suddenly unfamiliar. This triggers the brain's orienting response and breaks the autopilot state that enables mindless scrolling.

## How It Works

### The Toggle

A single function controls the entire effect:

```javascript
function dissociationSwitch() {
    document.documentElement.classList.toggle('dissociation-prepare');
    document.documentElement.classList.toggle('dissociated');
    console.log('Class .dissociated toggled');
}
```

### CSS Classes

Two classes are toggled on the `<html>` element:

| Class | Purpose |
|---|---|
| `.dissociation-prepare` | Preparation state — may set up transitions |
| `.dissociated` | Active state — applies visual distortions |

### Visual Transformations

The SCSS files define the following transformations when `.dissociated` is active:

| CSS Property | Value | Effect |
|---|---|---|
| `filter: blur()` | ~3px | Softens all content, removing readable detail |
| `filter: saturate()` | ~0.3 | Drains color vibrancy to near-grayscale |
| `filter: contrast()` | ~0.7 | Flattens visual depth |
| `opacity` | ~0.5 | Fades overall page presence |
| `transform: scale()` | ~0.98 | Subtle shrink creates perceptual distance |
| `transition` | 0.5-0.8s ease | Gradual onset avoids startling the user |

---

## Psychology: Why It Works

### The Orienting Response

When the brain detects an unexpected change in the visual environment, it triggers the **orienting response** — an involuntary shift of attention toward the novel stimulus. This is the same mechanism that makes you notice movement in your peripheral vision.

### Breaking Flow State

By subtly distorting a familiar page, the dissociation effect hijacks this response and redirects it toward **conscious self-awareness**. The user suddenly notices they are looking at a screen, rather than being absorbed by the content.

### Design Principles

The effect is designed to be:

- **Uncomfortable but not aversive** — enough to break flow, not enough to cause annoyance
- **Gradual** — 0.5s transition prevents a startling experience
- **Fully reversible** — a second click restores everything instantly
- **Non-destructive** — only CSS classes are toggled, no DOM modifications

---

## Files

| File | Role |
|---|---|
| `js/wyah.js` | Contains `dissociationSwitch()` function |
| `sass/dissociate.scss` | Primary dissociation effect styles (~76KB of comprehensive CSS) |
| `sass/wyah.scss` | Additional page-level effects and transitions (~77KB) |

### Why Are the SCSS Files So Large?

The SCSS files contain **base64-encoded background images** embedded directly in the stylesheets. This eliminates external image dependencies, keeping the extension self-contained and fast.

---

## Integration

The Dissociation module is **not standalone** — it is always triggered by the WYAH module:

```
User clicks extension
  → content_script.js fires
    → wyah.js loads
      → dissociationSwitch() called immediately
        → .dissociation-prepare + .dissociated toggled
          → CSS transitions activate
            → Page visually distorts
              → User's attention captured
                → WYAH form appears for intent input
```

### Coupling

The modules are tightly coupled by design. Dissociation serves as the **perceptual amplifier** for WYAH's cognitive prompt. Together they create a two-layer intervention:

```
Layer 1 (Perceptual):  Page distorts → "Something changed" → Attention captured
Layer 2 (Cognitive):   Form appears  → "Why am I here?"    → Intent declared
```

---

## Current Status

### Working
- Class toggle on `<html>` element
- Smooth transition between states
- Full reversibility on second click
- Works across all tested websites

### TODO
- Move all CSS that is set by the extension to one class for easier un-setting
- Prevent any possible site behavior changes from the effect
- Add CSS animation completion callbacks

---

[← Back to Overview](../ABOUT-BACK-ON-TRACK.md)
