# Real Estate Social Media Management — Page & Pricing Design

**Date:** 2026-05-12
**Status:** Approved by user, ready for implementation plan
**Author:** Brainstorm session w/ Claude

---

## 1. Context & Motivation

Business Builder currently has one services-pricing page live: `ui_kits/ad-services/index.html` — a 3-tier offering of one-time ad campaign builds ($899 / $1,499 / $2,499 setup).

A solo real estate agent has approached Business Builder asking for social media management. She is busy (showing houses, closings, on-the-phone evenings) and is unable to scope the offer herself — Business Builder needs to define both the offering and the pricing.

This spec defines a **new, second services page** for monthly-recurring social media management, priced specifically for the real estate vertical, with the existing ad-services page preserved unchanged.

## 2. Goals

1. Build a marketing page that closes solo real estate agents on a $699–$2,999/mo retainer.
2. Visually and tonally mirror the existing `ad-services/index.html` so both pages feel like the same brand.
3. Make the commercial model (monthly retainer) visibly distinct from the existing one-time setup model on the ad-services page — clients must not confuse the two.
4. Anchor pricing in 2026 industry standards for real estate SMM (research summary in §8).
5. Offer a "headline capability" on the top tier — virtual house walkthrough — that differentiates Business Builder from generic SMM agencies.

## 3. Non-Goals

- This page is **not** an ad-services page. Paid ads are handled by the existing ad-services page; SMM here is organic content management.
- We are not building a client portal, dashboard, scheduling tool, or any backend.
- We are not redesigning the design system. We reuse `colors_and_type.css` tokens verbatim and follow the visual language of the existing ad-services page.
- We are not modifying `ui_kits/ad-services/`. That page stays exactly as it is.
- We are not adding a starter/$199 tier. A 4th tier dilutes the BB brand voice; à la carte add-ons capture budget needs instead.

## 4. Audience & Positioning

**Primary audience:** Solo real estate agents, 1–5 active listings, busy enough that posting consistently is the first thing that drops when work piles up.

**Secondary audience:** Small real estate teams (2–5 agents) — same offering, same prices; the tiers scale via à la carte add-ons for additional volume.

**Positioning line:** "You're busy. That's why we exist."

## 5. Page Structure

Mirrors `ui_kits/ad-services/index.html` section-for-section, with content adapted to SMM/real estate. Section order:

1. **Header** — identical pattern (logo, nav, "Let's Talk" CTA)
2. **Hero** — script-logo lockup, retro-pitchman headline, dual CTA (See the Numbers / How It Works)
3. **Problem section** — 3 cards, BB-voice pain points
4. **How It Works** — 3 numbered steps (build voice → make content → post & engage)
5. **Pricing** — 3 tiers + ad-spend-style callout adapted to "monthly retainer, content included"
6. **À La Carte add-on strip** — 6 small cards under the tier grid
7. **Walkthrough hero section** — dedicated callout for the headline real estate capability
8. **Guarantee**
9. **FAQ**
10. **CTA**
11. **Footer** — identical pattern

### 5.0 "Sample Note" Banner (above hero or immediately below header)

The page is being prepared as a **sample** for a specific solo-agent prospect who hasn't yet replied. The page itself opens with a friendly handwritten-note callout that frames the page as a starting point, not a take-it-or-leave-it pitch. This keeps the door open and signals attentiveness.

Visual treatment: cream-on-warm-black ribbon with a kraft-paper feel; uses the `bb-grain` texture and the "floating note" backdrop-blur card style allowed once per page (per design system rules). Pinned just above the hero, max-width ~720px, centered. Small dismiss `×` (cosmetic only — page works fine if it stays).

Copy:

> **A note before you scroll —**
> We hadn't heard back yet, so we went ahead and put together a sample of what working with us could look like. Everything here is a starting point — the tiers, the prices, the pieces. Call us, we'll shape it around your actual listings and how you like to work.
> *— Donovan & the Business Builder team*

This note appears **only** on the SMM page (not on the existing ad-services page) and is implemented as a discrete section so it can be removed in one line once the deal closes and we want a clean "live" page.

### 5.1 Hero Copy

- Eyebrow: `Real Estate Social ✦ Done For You`
- Headline: `We run your social. You run your business.`
- Subhead: `You're showing houses, running closings, and answering your phone at 9pm. We'll post for you while you do the work that actually pays.`
- CTAs: `See the Plans` (primary) · `How It Works` (ghost)

### 5.2 Problem Section Copy

Eyebrow: `✺ Sound Familiar? ✺`
Headline: `Posting every day is its own full-time job.`

Three cards:
- "You meant to post that new listing. Three days ago."
- "You took a great video at an open house. It's still sitting in your phone."
- "You finally posted — and got crickets, because the algorithm hates inconsistent accounts."

Closing line (cream-orange emphasis): `We post for you. Every day. In your voice. Without you ever thinking about it.`

### 5.3 How It Works — 3 Steps

1. **We Build Your Voice** — quick onboarding call, look at your past posts, define the voice. Logo treatment, post templates, caption style — yours, not generic.
2. **We Make the Content** — you send us phone clips when you're at a listing (a 30-second walkthrough, a quick "just listed" piece-to-camera). We edit, brand, caption, and schedule. No clips? We design graphic posts to fill the gaps.
3. **We Post & Engage** — daily posting on autopilot. We reply to comments and DMs in your voice. You get a report showing what landed. Every month we lean harder into what's working.

## 6. Pricing Tiers

### Tier 1 — Foundation — $699/mo

**Eyebrow:** `Tier One ✦ Foundation`
**Name:** `The Foundation`
**Pitch:** "Show up consistently. Stop ghosting your feed."

| Item | Volume |
|---|---|
| Feed posts/mo | 15 (mix of IG + FB) |
| Reels/mo (edited from your clips) | 3 |
| Stories | — |
| Platforms | IG + FB |
| Custom graphics | Basic branded templates |
| Community management | 30 min/day |
| Reporting | Monthly performance report |

### Tier 2 — Growth — $1,499/mo · "best value" sticker

**Eyebrow:** `Tier Two ✦ Growth`
**Name:** `The Growth`
**Pitch:** "Look like you post daily — without thinking about it once."

Everything in Foundation, plus:

| Item | Volume |
|---|---|
| Feed posts/mo | 25 (mix of IG + FB) |
| Reels/mo (edited from your clips) | 8 |
| Stories | 10/mo |
| Listing-launch reels | 2 included (per new listing) |
| Custom graphics | Full branded template system |
| Community management | 1 hr/day |
| Reporting | Bi-weekly reports + 1 strategy call/mo |

### Tier 3 — Showcase — $2,999/mo

**Eyebrow:** `Tier Three ✦ Showcase`
**Name:** `The Showcase`
**Pitch:** "The full storefront. Reels, walkthroughs, the works."

Everything in Growth, plus:

| Item | Volume |
|---|---|
| Feed posts/mo | 35 |
| Reels/mo | 15 |
| Stories | 20/mo |
| Platforms | IG + FB + (TikTok *or* LinkedIn — your call) |
| Listing-launch reels | Unlimited |
| **✦ Virtual Walkthrough** | **1 cinematic walkthrough per month** — edited from your phone clips, or we come shoot if local |
| Community management | 2 hrs/day |
| Reporting | Weekly reports + 30-min monthly strategy call |

### Pricing-page callout box (replaces "Ad Spend" banner)

> **Monthly Retainer**
> Everything is included — content, posting, engagement, reporting. No surprise charges. Cancel anytime with 30 days' notice.

## 7. À La Carte Add-Ons (below tier grid)

Six small cards in a 3×2 or 6×1 grid:

| Add-on | Price |
|---|---|
| Extra Reel | $150 |
| Extra Walkthrough Video | $300 |
| On-Site Shoot Day (local only) — half-day | $400 |
| On-Site Shoot Day (local only) — full day | $700 |
| Matterport 3D Scan — under 3,000 sq ft | $400 |
| Matterport 3D Scan — 3,000+ sq ft | $600 |
| Single Branded Post | $75 |
| Brand Voice Audit (one-time, new clients) | $295 |

Footer line under grid: "Need something custom? Talk to us — we'll figure it out."

## 8. Walkthrough Hero Section

Standalone section between pricing and FAQ. Bold, paper-textured surface. Visually parallels the "Guarantee" section on the ad-services page.

**Eyebrow:** `✦ The Showcase Difference ✦`
**Headline:** `Sell the house before they pull in the driveway.`

Body: "Buyers scroll Instagram before they ever call. A 60-second cinematic walkthrough on your reels — the kind that shows the morning light hitting the kitchen and the master bath at golden hour — sells the home before the showing. That's what's included on the Showcase tier, every month."

3-step mini-flow (horizontal):
1. **You film** — a quick phone walkthrough at the listing (we send a one-page how-to).
2. **We cut** — cinematic edit, music, captions, branded outro.
3. **It goes live** — Reels, YouTube, embedded on your site if you want.

Local-property note: "If the property is within an hour of us, we can come shoot it for you — included with the tier, just give us 5 days' notice."

CTA at bottom: `See the Showcase Plan`

## 9. Guarantee Copy

**Headline:** `If 90 days in you're not getting more eyes on your listings, we work for free until you are.`

**Body:** "Social media is a long game — anyone who tells you otherwise is selling magic beans. But 90 days is plenty to know whether we've got the voice right and the content is hitting. If the numbers aren't moving, we don't bill you for the next month. We sit down, look at what's not working, and fix it on our dime."

## 10. FAQ

- **Do I have to film anything myself?** No, but it helps a lot. We can run your account on graphics and stock-style content alone, but for real estate, your face and your listings outperform graphics 3-to-1. We give you a one-page guide; most agents get the hang of it in a week.
- **What if I don't have a current listing to post about?** We mix in evergreen content — neighborhood spotlights, market updates, buyer/seller tips, "day in the life" reels — so the feed stays alive between listings.
- **Can I approve posts before they go live?** Yes. You'll get a weekly content calendar to thumbs-up or change. Once you trust us, most agents stop reviewing and let us post directly.
- **What if I get a great clip on the weekend?** Send it. We'll post it Monday or sooner if it's hot.
- **Can I pause if I take a month off?** Yes — pause anytime with 30 days' notice. We hold your content library and pick back up when you're ready.
- **Do you handle paid ads too?** Different page — see our [Ad Services](../ad-services/index.html). The plans complement each other; many agents run both.

## 11. CTA & Footer

Same pattern and copy structure as ad-services page. Same contact email and phone number.

CTA headline: `Ready to look like you post daily?`
Subhead: `One conversation. We'll talk about your business, your listings, and which tier makes sense. No pressure, no pitch deck.`

## 12. File Layout

```
ui_kits/
  ad-services/             (unchanged)
    index.html
    site.css
  social-media-services/   (NEW)
    index.html
    site.css
```

`index.html` follows the same HTML scaffold as ad-services. `site.css` reuses every token from `colors_and_type.css` and only adds page-specific layout classes (à la carte grid, walkthrough mini-flow, etc.).

README is updated to add the new UI kit to its index table.

## 13. Visual Design Notes

- **Identical** color, typography, spacing, shadow, and component vocabulary as ad-services page.
- Featured tier (Growth) uses the same orange double-rule + sticker treatment as ad-services Combo card.
- Showcase tier uses the gold accent like ad-services Motion card.
- Walkthrough section uses the same `bb-grain` paper texture as the ad-services Guarantee section.
- À la carte grid is a tight, low-emphasis 3×2 grid — looks like a typed price list pinned to a corkboard. Smaller cards, less padding, cream hairlines, no shadows.
- No emoji. Typographic ornaments (✦ ✺ ❖ ◆) only.

## 14. Out-of-Scope (deferred to future work)

- A landing page that aggregates both services (ad-services + SMM) under one "Services" hub.
- Stripe / payment integration.
- Client onboarding form / lead-capture form (currently both pages CTA to email + phone).
- TikTok / LinkedIn–specific landing variations.

## 15. Research Summary (2026 industry data, May 2026 search)

**General SMM 2026 pricing:**
- Basic: $500–$1,500/mo · 1–2 platforms · 8–16 posts/mo
- Standard: $1,500–$3,500/mo · 2–3 platforms · 15–25 posts/mo · some video · light ad mgmt
- Premium: $3,500–$10,000+/mo · daily content · pro video · paid ads · dedicated manager

**Real estate-specific examples in market:**
- Basic ~$800/mo · 1 platform · 10 posts/wk
- Pro ~$1,800/mo · 2 platforms · 20 posts/wk
- Premium ~$3,500/mo · 3 platforms · 30 posts/wk · ad mgmt · lead capture

**Reels production:**
- Phone-shot DIY: under $25/reel
- Pro short-form: $400–$500
- Cinematic: $300–$2,500 per video

**Walkthroughs:**
- Cinematic video walkthrough: $250–$600 standalone
- Matterport 3D tour: $250–$1,000+ (size-dependent)
- Bundle-with-photo add-on: $150–$350

**Decision:** Tier prices land in the lower-middle of industry range to fit BB's small-business audience while still respecting the brand's "we do it right" voice. Top tier ($2,999) is positioned at the low end of real estate Premium ($3,500+) to attract solo agents and small teams rather than brokerages.

---

## Approval

- [x] Approach approved by user (2026-05-12)
- [x] Tier structure approved: $699 / $1,499 / $2,999 with B-tier content volumes
- [x] À la carte strip included
- [x] Walkthrough hero section included
- [x] "She's busy" framing baked into hero + problem copy
- [x] "Sample / haven't heard back" framing baked in as an above-hero note banner
