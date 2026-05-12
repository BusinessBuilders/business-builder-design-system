# Business Builder — Design System

> **Logo to launch. Online, in print & beyond.**
> A bold American retro identity for a web-development & AI-automation agency that builds for small businesses.

---

## Index

| File / Folder | What's inside |
|---|---|
| `colors_and_type.css` | All design tokens — colors, typography, spacing, radius, shadows. **Import this first.** |
| `assets/` | Logos (transparent + solid), background textures, icon set |
| `fonts/` | (loaded via Google Fonts — see Type below) |
| `preview/` | Cards rendered into the Design System tab |
| `ui_kits/agency-website/` | The original 3-tier agency pricing UI kit |
| `ui_kits/ad-services/` | One-time setup pricing for ad campaign builds (Static / Combo / Motion) |
| `ui_kits/social-media-services/` | Monthly retainer pricing for real estate social media management (Foundation / Growth / Showcase) |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code |
| `uploads/` | Original source files from the brief |

---

## Source materials

- `uploads/BizBuilder.png` — primary logo on a dark canvas (JPEG, 1280×1280)
- `uploads/WhiteBB.png` — same logo on a white canvas (JPEG, 1280×1280)
- `uploads/business-builder-intro.mp4` — short intro video (not yet referenced in the system)
- `uploads/DESIGN.md` — a *Lamborghini-inspired* design doc the user attached as a structural template (not as visual direction). Useful as a model for how to organize a design system, but **the Business Builder visual direction is independent of it.**

> **Note:** Both supplied logo files are JPEGs with a baked-in background. A best-effort transparent PNG was generated at `assets/logo-transparent.png` by knocking out near-black pixels. If you have the original vector or a true PNG with alpha, please drop it in — see Caveats at the end.

---

## Brand at a glance

**Who:** Business Builder
**What:** A small-shop web-dev & AI-automation agency. Logo design, website builds, print collateral, automations — handled end-to-end.
**For:** Small business owners. Plumbers, bakeries, contractors, family lawyers, regional restaurants. People who want pros doing the work, not "platforms" or "solutions."
**Voice:** Confident, warm, plain-spoken, a little swaggering. Like a sign painter who's been doing this for thirty years and just shook your hand.
**NOT:** Tech. SaaS. "Innovation." Glossy AI futurism. Soft pastels. Inter on a white card.

---

## Content fundamentals

### Tone & voice
- **Plain-spoken, never corporate.** "We build the website" — not "We deliver web solutions."
- **Confident, not aggressive.** Says what it does and doesn't oversell.
- **Warm, with a hint of pitchman.** A little 70s sign-painter swagger. "Logo to launch. Online, in print & beyond." reads like the bottom of a handpainted truck door.
- **You-focused.** "Your shop." "Your brand." "Your customers." Avoid "users," "audiences," "stakeholders."
- **We, not us.** The agency is "we" — small team, hands on the wheel.
- **Concrete verbs.** *Build, paint, launch, ship, hand-letter, wire up, automate.* Avoid: *leverage, empower, transform, unlock.*

### Casing
- **Display headlines** lean Title Case or Sentence case — the script display face does the shouting; you don't need ALL CAPS.
- **Section eyebrows / labels / button text** — `UPPERCASE` with wide tracking (`+0.12em`). Reads like a vintage signpainted label across the top of a window.
- **Body** — sentence case, Oxford commas, em-dashes welcome.

### Examples — DO
- "We build websites for the people who run things."
- "From your hand-drawn napkin to launch day."
- "Three plans. Pick one. We get to work."
- "Logo, site, automations, print — all under one roof."
- "Done in weeks, not quarters."

### Examples — DON'T
- "Empower your business with cutting-edge AI-driven solutions." ❌
- "Unlock synergies across your digital touchpoints." ❌
- "🚀 Let's transform your brand! ✨" ❌

### Emoji
- **Don't.** This brand is hand-painted, not chat-room. If you need a glyph, use a typographic ornament (✦ ✱ ❖ ✺) or a small icon — never a smiley.

### Punctuation flourishes
- **Eyebrow ornaments**: `✦` and `✺` are fine for separating eyebrow words: `PLAN ONE ✦ STARTER`
- **Bullet character**: `·` (middle dot) for inline lists (`Logo · Site · Print`).
- **Em-dash freely.** Period-period-period for casual asides is OK. No exclamation points unless a CTA earns it.

---

## Visual foundations

### Color
- **Black canvas** (`#0a0a0a`) is the default surface. Not pure `#000` — a hair of warmth.
- **Warm cream** (`#f5e6c8`) is the primary text color. Off-white, not white. Reads like signpainter's enamel.
- **Four accent colors pulled from the logo stripes**, used as a *system*, not a rainbow:
  - **Sign-Orange** `#e85d1a` — primary accent. Buttons, ornaments, headline strokes.
  - **Diner-Teal** `#2a7fa8` — secondary accent. Eyebrows, links, secondary surfaces.
  - **Brick-Red** `#c23b22` — tertiary. Underlines, drop-shadow on hand-lettering, pricing emphasis.
  - **Sign-Gold** `#d4a847` — quaternary. "Pro" tier, premium accents, a touch of warmth.
- **Cream tints** for hierarchy: `#f5e6c8` (cream) → `#c8b896` (taupe) → `#7a6f5a` (dust) → `#3a342a` (deep umber). Same hue, dropping in saturation+value.

### Type — trending pairing (2026)
The logo is the "shouting" element — it does not need a script font on the page repeating it. Instead we pair the retro script lockup with a clean, modern, on-trend grotesque that's having a moment in 2025–2026 brand work.

- **Display caps & big numbers: "Funnel Display"** — variable weight 300–800. A confident, slightly humanist sans for section starters, tier prices, and stacked-shadow headlines. Plays well as the "modern" half of the retro-vs-modern tension.
- **Body / UI / Headlines: "Bricolage Grotesque"** — the variable, optical-size grotesque that's everywhere right now. Friendly without being cute; technical without being cold. Wide weight range (300–800) covers everything from 11px micro labels to 64px display.
- **Eyebrows & labels: Bricolage Grotesque 600 UPPERCASE + 0.14em tracking** — wide tracking, narrow optical size for crisp small caps.
- **Script lockup: only the actual logo PNG.** No web font is going to match the logo's bespoke brush lettering, so we don't try — the logo earns the hero, and everything around it is clean and modern. (Lobster Two is kept as a fallback `--bb-font-display` for the rare case a designer wants a script flourish.)

### Spacing system
4px base. Scale: `2 4 8 12 16 24 32 48 64 96 128`. Section vertical rhythm at 96–128px. Card inner padding 32px.

### Background treatment
- **Solid warm-black** is the default. Resist the urge to gradient.
- **Subtle paper-grain texture** (overlaid via CSS `radial-gradient` noise or the `bg-grain.png` asset) on hero and pricing surfaces — gives the screen the feel of a printed flyer pinned to a wall.
- **Dark wood-grain** (warm umber) is an *optional* background motif for testimonials or section banners — used sparingly.
- **No bluish-purple tech gradients. Ever.**

### Borders
- **Cream hairlines** at 1px (`rgba(245, 230, 200, 0.18)`) for subtle dividers.
- **Orange or teal solid 2–3px** for accent borders on the featured pricing tier.
- **Double-rule** `border-top: 3px double var(--bb-cream)` is the signpainter-style divider. Use it for section breaks.

### Corner radii
- **8px** for cards (small, almost-square — feels more like a paper sticker than a software UI).
- **4px** for buttons (tight, just enough to soften the edge — like a printed coupon).
- **0px** acceptable for full-bleed banners and ornament rules.
- **999px (pill)** ONLY for tags / chips / step counters — small affordances, not buttons.

### Shadows
- **Drop shadow on display lettering**: `2px 4px 0 var(--bb-brick), 4px 8px 0 var(--bb-teal)` — hard-edged, multi-color, no blur. Echoes the logo's stacked stripes.
- **Card lift**: `0 12px 0 -4px var(--bb-brick), 0 24px 48px rgba(0,0,0,0.6)` — a small offset hard shadow + a soft ambient. Featured tier doubles up.
- **Inset glow** on the featured tier: `inset 0 0 0 2px var(--bb-orange)`.
- **No soft purple glows.**

### Animations
- **Mostly none.** Snappy 120ms color transitions on interactive elements. No bounces, no parallax, no fancy entrance choreography.
- **Hover** = color shift (lighten/saturate the accent) + 1px upward translate on cards.
- **Press** = tiny `scale(0.98)` + slightly darker accent.
- **Focus** = 2px cream outline at 3px offset — visible, not subtle.

### Imagery
- **Warm.** Tungsten-lit interiors. Hand-painted signage. Print shop close-ups. Brown leather, brass, enamel, kraft paper.
- **Avoid:** screenshot mockups on floating phones, abstract gradients, AI-generated futurism, anything cool-blue or "clean."
- **Grain is welcome.** A subtle 35mm film grain overlay on hero photography fits this brand perfectly.

### Layout rules
- **Asymmetric is fine.** Don't be afraid to anchor a hero with one big lockup off to the left and let the right side breathe.
- **Generous vertical rhythm.** 96–128px between major sections.
- **Max content width 1240px.** Hero & banners can go full-bleed.
- **Sticky elements:** none on marketing surfaces. Let the page scroll.

### Use of transparency / blur
- **Sparingly.** A `backdrop-filter: blur(12px) saturate(120%)` over a translucent cream surface (`rgba(245,230,200,0.06)`) is OK for a "floating note" callout — used at most once per page.
- No frosted-glass nav bars. The nav is opaque.

---

## Iconography

### Approach
This brand prefers **typographic emphasis and ornament over icons**. Where icons are needed (feature lists, plan benefits), they are used **small, monoline, and warm-cream** — never colorful, never duotone, never animated.

### Set
- **Lucide Icons** (CDN) is the active icon set. Stroke `1.75`, color `var(--bb-cream)` for default, `var(--bb-orange)` for featured states. CDN: `https://unpkg.com/lucide@latest`.
- **Substitution flag:** Lucide is not part of the original brand brief — it's the closest CDN-available match for the warm/minimal stroke aesthetic this brand wants. Replace if you have a custom set.

### Ornaments (preferred over icons where possible)
Hand-set typographic ornaments are part of the visual vocabulary:
- ` ✦ ` star — eyebrow separator
- ` ✺ ` rosette — section ornament
- ` ❖ ` lozenge — pricing/feature emphasis
- ` ◆ ` filled diamond — list bullet
- `///` triple-slash — vintage signpainter divider

### Emoji
Never. Not in copy, not in UI.

### Logo usage
- `assets/logo-transparent.png` — primary, drop on any background.
- `assets/logo-black-bg.jpg` — original on dark canvas, use when transparency would introduce halos.
- `assets/logo-white-bg.jpg` — light-mode contexts.
- Minimum width: 120px on screen. Below that, use the wordmark only (not provided — request from client).

---

## Caveats & open questions

- **Typography pairing is intentional.** The logo carries the retro script DNA on its own; the page type uses **Bricolage Grotesque + Funnel Display**, a trending modern pairing chosen to contrast with (not echo) the script. Lobster Two is parked as a fallback only.
- **Logo:** Real transparent PNG provided (`assets/logo-transparent.png`). Drops cleanly on any background.
- **Iconography.** Awaiting custom set from client. Until then, Lucide stroke icons (1.75) are the placeholder.
- **Brand assets we don't have:** wordmark-only lockup, monogram (`BB`), favicon, social avatars, photography. Pricing page falls back to typographic placeholders where photos would normally go.
- **Video** (`uploads/business-builder-intro.mp4`) wasn't referenced — let me know if you want it featured in the hero or kept as reference.

---

## Index of cards in the Design System tab

- **Brand** — Logos (transparent + black + white), wordmark treatment
- **Colors** — Black canvas + cream, four accent stripes, cream tint scale, semantic uses
- **Type** — Display (Lobster Two), Heavy display (Bowlby One SC), Body (Barlow Condensed), Eyebrow & labels
- **Spacing** — Spacing scale, radius scale, shadow system
- **Components** — Buttons (primary, ghost, link), Pricing tier card, Eyebrow + ornament, Form field, Tag/badge
- **UI kits** — three live kits:
  - `ui_kits/agency-website/index.html` — original agency pricing page
  - `ui_kits/ad-services/index.html` — one-time ad campaign setup pricing
  - `ui_kits/social-media-services/index.html` — monthly real estate SMM retainer pricing

