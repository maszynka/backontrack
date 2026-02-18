# WYAH Module — "Why Am I Here?"

> The cognitive intervention engine of BackOnTrack.

---

## Purpose

WYAH captures the user's **browsing intent** at the moment of arrival. By explicitly stating *why* they opened a page, users create an anchor that resists the pull of infinite feeds and autoplay.

## How It Works

### Activation Flow

```
User clicks toolbar icon
  → chrome.browserAction.onClicked fires
    → content_script.js runs
      → executeScript(wyah.js) into active tab
      → insertCSS(wyah.css) into active tab
        → wyah.js checks if #wyah exists
          → If not: wyahInit() creates Shadow DOM + form
          → dissociationSwitch() toggles visual effect
```

### The Form

WYAH injects a minimal HTML form with two fields:

1. **Text input** — `placeholder: "Why are you here?"`
2. **Number input** — `placeholder: "5"` (minutes until reminder)

### Shadow DOM Encapsulation

The form is wrapped in a Shadow DOM root to prevent CSS conflicts:

```javascript
var div = document.createElement('div');
div.id = "wyah";
var root = div.createShadowRoot();
root.innerHTML = htmlString;
document.documentElement.appendChild(div);
```

A fallback is provided for browsers without Shadow DOM support, including a link to compatibility information on Can I Use.

### Duplicate Prevention

Before injection, the script checks:

```javascript
var wyahExists = document.getElementById("wyah");
if (!wyahExists) {
    wyahInit();
} else {
    console.log('Wyah already exists!');
}
```

This prevents multiple form instances on repeated clicks.

---

## Key Features

| Feature | Description |
|---|---|
| **Shadow DOM isolation** | Form styles never conflict with host page |
| **Duplicate detection** | Prevents multiple injection on repeated clicks |
| **Dissociation trigger** | Immediately calls dissociationSwitch() on activation |
| **CSS Reset** | 150-line comprehensive reset ensures consistent rendering |
| **Auto-growing textarea** | Input area expands dynamically as user types |

---

## Files

| File | Role |
|---|---|
| `js/content_script.js` | Background listener — bridges toolbar click to content injection |
| `js/wyah.js` | Core logic — DOM injection, dissociation toggle, auto-resize |
| `css/reset.css` | Comprehensive CSS reset scoped to `#wyah-wrap` |
| `sass/wyah.scss` | Full WYAH styling with transitions and page effects |

---

## Current Status

### Working
- DOM injection via Shadow DOM
- Dissociation class toggle
- CSS reset isolation
- Duplicate detection

### In Progress
- Intent text storage and retrieval
- Countdown timer implementation
- Reminder notification system
- Form submit handling and collapse

---

## Integration with Dissociation Module

WYAH calls `dissociationSwitch()` immediately upon activation. This means every WYAH activation also triggers the visual disruption, creating a combined **cognitive + perceptual** intervention:

```
WYAH activates → dissociationSwitch() runs → page blurs + form appears
                                            → user must consciously re-engage
                                            → user states intent in form
                                            → timer starts
```

The two modules are tightly coupled — WYAH is the trigger, Dissociation is the amplifier.

---

## TODOs from Source Code

```javascript
// TODO: Add list of websites that the code will run at every time
// TODO: Consider using shadowDOM (partially done)
```

---

[← Back to Overview](../ABOUT-BACK-ON-TRACK.md)
