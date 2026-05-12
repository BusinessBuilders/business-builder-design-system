# Real Estate Social Media Management Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new `ui_kits/social-media-services/` page selling a 3-tier monthly social-media-management offering to real estate agents, mirroring the existing `ui_kits/ad-services/` page structurally and visually while introducing new sections for à la carte add-ons and a virtual-walkthrough hero.

**Architecture:** Static HTML + page-scoped CSS, reusing the global design tokens in `colors_and_type.css`. The new page is a content fork of `ui_kits/ad-services/index.html`. CSS class names follow the existing `.ad-*` pattern for layout components since those are functionally generic page sections; new components for this page use `.smm-*` prefix to keep their scope obvious. The existing ad-services page is **not** modified.

**Tech Stack:** Plain HTML5, CSS3 with custom properties, Google Fonts (Bricolage Grotesque + Funnel Display), Lucide icons via CDN.

**Spec:** `docs/superpowers/specs/2026-05-12-real-estate-smm-design.md`

**Verification model:** This is a static-site task with no test framework in the repo. The "tests" are: (a) the page loads without console errors via `python3 -m http.server`, (b) every copy block in the spec appears in the rendered page, (c) responsive breakpoint at 960px still works, (d) anchor links resolve. Run those checks at the end of every task.

---

## File Structure

```
ui_kits/
  ad-services/                     (UNCHANGED — DO NOT TOUCH)
    index.html
    site.css
  social-media-services/           (NEW)
    index.html                     (forked from ad-services/index.html, content swapped)
    site.css                       (forked from ad-services/site.css + new sections)
README.md                          (1-line addition to the UI kits index table)
```

**Responsibility per file:**
- `social-media-services/index.html` — page markup, all copy, section ordering.
- `social-media-services/site.css` — page-scoped layout. Inherits all colors, type, spacing, shadows from `colors_and_type.css`. Adds three new component blocks: `.smm-note-banner`, `.smm-alacarte`, `.smm-walkthrough`.

---

## Task 1: Scaffold the new UI kit by forking ad-services

**Files:**
- Create: `ui_kits/social-media-services/index.html` (copy of `ui_kits/ad-services/index.html`)
- Create: `ui_kits/social-media-services/site.css` (copy of `ui_kits/ad-services/site.css`)

- [ ] **Step 1: Create the directory and copy both files verbatim**

Run:
```bash
mkdir -p ui_kits/social-media-services
cp ui_kits/ad-services/index.html ui_kits/social-media-services/index.html
cp ui_kits/ad-services/site.css   ui_kits/social-media-services/site.css
```

- [ ] **Step 2: Update the new page's `<title>` so the two pages are distinguishable**

Edit `ui_kits/social-media-services/index.html` line ~5:

Replace:
```html
<title>Business Builder — Ad Services</title>
```
With:
```html
<title>Business Builder — Real Estate Social Media</title>
```

- [ ] **Step 3: Verify the page loads (visual sanity check before any content edits)**

Run:
```bash
cd /home/magiccat/Downloads/Business-Builder-Design-System
python3 -m http.server 8080
```
Open `http://localhost:8080/ui_kits/social-media-services/index.html` in a browser. Confirm the page renders identically to the ad-services page (it should, it's a verbatim copy). Stop the server with Ctrl+C.

Expected: Pixel-identical to ad-services page except the browser tab title.

- [ ] **Step 4: Commit**

Run:
```bash
git add ui_kits/social-media-services/
git commit -m "Scaffold real estate SMM page as fork of ad-services"
```

---

## Task 2: Replace header nav + hero copy + add the "sample" banner

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (header + hero block, lines ~12–43)
- Modify: `ui_kits/social-media-services/site.css` (add `.smm-note-banner` block)

- [ ] **Step 1: Update the header nav copy**

Edit `ui_kits/social-media-services/index.html` — find the `<header class="bb-site-header">` block and replace the nav with:

```html
<header class="bb-site-header">
  <a class="bb-site-header__brand" href="#">
    <img src="../../assets/logo-transparent.png" alt="Business Builder" />
  </a>
  <nav class="bb-site-header__nav">
    <a href="#how">How It Works</a>
    <a href="#pricing">Plans</a>
    <a href="#walkthrough">Walkthroughs</a>
  </nav>
  <a href="#cta" class="bb-btn bb-btn-primary bb-site-header__cta">Let's Talk</a>
</header>
```

- [ ] **Step 2: Insert the "sample note" banner immediately above the hero**

Between the closing `</header>` and the opening `<section class="bb-hero bb-grain">`, insert:

```html
<!-- ============== Sample Note Banner ============== -->
<aside class="smm-note-banner" aria-label="Note for the recipient">
  <div class="smm-note-banner__inner">
    <span class="smm-note-banner__eyebrow">A note before you scroll</span>
    <p class="smm-note-banner__body">
      We hadn't heard back yet, so we went ahead and put together a sample
      of what working with us could look like. Everything here is a starting
      point &mdash; the tiers, the prices, the pieces. Call us, we'll shape it
      around your actual listings and how you like to work.
    </p>
    <p class="smm-note-banner__sig">&mdash; Donovan &amp; the Business Builder team</p>
  </div>
</aside>
```

- [ ] **Step 3: Replace the hero block copy**

Find the `<section class="bb-hero bb-grain">` block and replace its inner contents with:

```html
<section class="bb-hero bb-grain">
  <div class="bb-hero__inner">
    <img class="bb-hero__logo" src="../../assets/logo-transparent.png" alt="Business Builder" />
    <div class="bb-eyebrow">Real Estate Social ✦ Done For You</div>
    <h1 class="bb-hero__title">
      We run your social. <em>You run your business.</em>
    </h1>
    <p class="bb-hero__sub">
      You're showing houses, running closings, and answering your phone at 9pm.
      We'll post for you while you do the work that actually pays.
    </p>
    <div class="bb-hero__ctas">
      <a class="bb-btn bb-btn-primary" href="#pricing">See the Plans</a>
      <a class="bb-btn bb-btn-ghost" href="#how">How It Works</a>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add the `.smm-note-banner` CSS block**

Append to `ui_kits/social-media-services/site.css` (before the responsive media query at the bottom):

```css
/* ============== Sample Note Banner (only on SMM page) ============== */
.smm-note-banner {
  max-width: 720px;
  margin: 24px auto 0;
  padding: 22px 28px 24px;
  background: rgba(245, 230, 200, 0.06);
  border: 1px solid var(--bb-border-soft);
  border-left: 4px solid var(--bb-teal);
  border-radius: var(--bb-radius-md);
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);
  position: relative;
  z-index: 4;
}
.smm-note-banner__inner { display: grid; gap: 8px; }
.smm-note-banner__eyebrow {
  font-family: var(--bb-font-body); font-weight: 700;
  font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--bb-teal);
}
.smm-note-banner__body {
  margin: 0;
  font-size: 16px; line-height: 1.55; color: var(--bb-cream);
}
.smm-note-banner__sig {
  margin: 4px 0 0;
  font-size: 14px; color: var(--bb-dust); font-style: italic;
}
```

Also append inside the existing `@media (max-width: 960px) { ... }` block:

```css
  .smm-note-banner { margin: 16px 16px 0; padding: 18px 20px; }
```

- [ ] **Step 5: Reload and verify**

Run the local server again, open the page, confirm:
- The "A note before you scroll" banner is visible above the hero, cream text on dark, with teal left border.
- The hero headline reads "We run your social. *You run your business.*" with "You run your business" in orange italic.
- The hero subhead mentions "showing houses, running closings, and answering your phone at 9pm."
- The CTAs say "See the Plans" and "How It Works."
- The nav shows "How It Works · Plans · Walkthroughs."

- [ ] **Step 6: Commit**

Run:
```bash
git add ui_kits/social-media-services/
git commit -m "Add header, hero copy, and sample-note banner to SMM page"
```

---

## Task 3: Replace Problem section and How It Works section

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (Problem section block ~45–68; How It Works ~70–121)

- [ ] **Step 1: Replace the Problem section**

Find the `<section class="ad-problem">` block and replace its inner content with:

```html
<section class="ad-problem">
  <div class="ad-problem__inner">
    <div class="bb-eyebrow" style="text-align:center; margin-bottom:24px;">✺ Sound Familiar? ✺</div>
    <h2 class="bb-h1" style="text-align:center; margin-bottom:32px;">Posting every day is its own full-time job.</h2>
    <div class="ad-problem__grid">
      <div class="ad-problem__card">
        <span class="ad-problem__icon">///</span>
        <p class="bb-body">You meant to post that new listing. Three days ago.</p>
      </div>
      <div class="ad-problem__card">
        <span class="ad-problem__icon">///</span>
        <p class="bb-body">You took a great video at an open house. It's still sitting in your phone.</p>
      </div>
      <div class="ad-problem__card">
        <span class="ad-problem__icon">///</span>
        <p class="bb-body">You finally posted &mdash; and got crickets, because the algorithm hates inconsistent accounts.</p>
      </div>
    </div>
    <p class="bb-body-lg" style="text-align:center; color:var(--bb-orange); max-width:680px; margin:48px auto 0; font-weight:700;">
      We post for you. Every day. In your voice. Without you ever thinking about it.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Replace the How It Works section**

Find the `<section id="how" class="ad-how">` block and replace its inner content with:

```html
<section id="how" class="ad-how">
  <div class="ad-how__inner">
    <div class="bb-eyebrow" style="text-align:center; margin-bottom:14px;">✦ The Process ✦</div>
    <h2 class="bb-display-stack ad-how__title">Here's How<br/>It Works.</h2>
    <div class="ad-how__steps">

      <div class="ad-step">
        <div class="ad-step__number">01</div>
        <div class="ad-step__content">
          <h3 class="bb-h3">We Build Your Voice</h3>
          <p class="bb-body" style="color:var(--bb-taupe);">
            Quick onboarding call. We look at your past posts, your listings, and how
            you talk to clients. We define the voice, the post templates, the caption
            style &mdash; yours, not generic. By the end of week one we know how to sound
            like you when you're not in the room.
          </p>
        </div>
      </div>

      <hr class="bb-rule-double" />

      <div class="ad-step">
        <div class="ad-step__number">02</div>
        <div class="ad-step__content">
          <h3 class="bb-h3">We Make the Content</h3>
          <p class="bb-body" style="color:var(--bb-taupe);">
            You send us phone clips when you're at a listing &mdash; a 30-second walkthrough,
            a quick "just listed" piece-to-camera. We edit, brand, caption, and schedule.
            No clips this week? We design graphic posts &mdash; market updates, neighborhood
            spotlights, buyer tips &mdash; so the feed never goes quiet.
          </p>
        </div>
      </div>

      <hr class="bb-rule-double" />

      <div class="ad-step">
        <div class="ad-step__number">03</div>
        <div class="ad-step__content">
          <h3 class="bb-h3">We Post &amp; Engage</h3>
          <p class="bb-body" style="color:var(--bb-taupe);">
            Daily posting on autopilot. We reply to comments and DMs in your voice. You
            get a report showing what landed and what didn't. Every month we lean harder
            into what's working &mdash; the reels that get watched, the captions that get
            saved, the times of day that get the clicks.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 3: Reload and verify**

Confirm the problem section reads "You meant to post that new listing. Three days ago." in card #1, and the closing line is orange. Confirm the how-it-works steps are titled "We Build Your Voice," "We Make the Content," "We Post & Engage."

- [ ] **Step 4: Commit**

Run:
```bash
git add ui_kits/social-media-services/index.html
git commit -m "Rewrite Problem and How-It-Works copy for SMM page"
```

---

## Task 4: Replace Pricing section with 3 monthly SMM tiers

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (Pricing section block, lines ~123–242)

- [ ] **Step 1: Replace the entire `<section id="pricing">` block**

Find the existing pricing section and replace it in full with:

```html
<!-- ============== Pricing ============== -->
<section id="pricing" class="ad-pricing">
  <div class="ad-pricing__inner">
    <div class="bb-eyebrow" style="text-align:center; margin-bottom:14px;">✺ Monthly Plans ✺</div>
    <h2 class="bb-display-stack ad-pricing__title">Three Plans.<br/>Pick Your Speed.</h2>
    <p class="bb-body-lg" style="text-align:center; color:var(--bb-taupe); max-width:720px; margin:0 auto 24px;">
      Monthly retainer. Everything is included &mdash; content, posting, engagement, reporting.
      No surprise charges. Cancel anytime with 30 days' notice.
    </p>

    <!-- Monthly callout (replaces ad-spend banner) -->
    <div class="ad-spend-banner">
      <span class="ad-spend-banner__label">Monthly</span>
      <span class="ad-spend-banner__text">Same number every month. No setup fee on annual plans. We work in your voice from day one.</span>
    </div>

    <div class="ad-pricing__grid ad-pricing__grid--3col">

      <!-- Tier 1 — Foundation -->
      <article class="ad-price-card">
        <div class="bb-eyebrow" style="color:var(--bb-teal);">Tier One ✦ Foundation</div>
        <h3 class="ad-price-card__name">The Foundation</h3>
        <p class="ad-price-card__pitch">
          Show up consistently. Stop ghosting your feed. The lowest-cost way to
          stay top-of-mind with past clients and new leads while you focus on
          showing houses.
        </p>
        <div class="ad-price-card__amount">
          <span class="ad-price-card__dollar">$699<small style="font-size:24px; color:var(--bb-dust); font-weight:600;">/mo</small></span>
          <span class="ad-price-card__label">MONTHLY RETAINER</span>
        </div>
        <a href="#cta" class="bb-btn bb-btn-ghost" style="width:100%; margin:20px 0;">Start Here</a>
        <hr class="bb-rule-double" />
        <div class="bb-label" style="margin-bottom:14px;">What's included</div>
        <ul class="ad-price-card__list">
          <li><span class="ad-check">◆</span> 15 feed posts/month (IG + FB)</li>
          <li><span class="ad-check">◆</span> 3 reels/month, edited from your clips</li>
          <li><span class="ad-check">◆</span> Basic branded post templates</li>
          <li><span class="ad-check">◆</span> Community management 30 min/day</li>
          <li><span class="ad-check">◆</span> Monthly performance report</li>
          <li><span class="ad-check">◆</span> Captions and hashtags written in your voice</li>
          <li><span class="ad-check">◆</span> Cancel anytime, 30 days' notice</li>
        </ul>
      </article>

      <!-- Tier 2 — Growth (featured) -->
      <article class="ad-price-card ad-price-card--featured">
        <span class="ad-price-card__sticker">best value</span>
        <div class="bb-eyebrow" style="color:var(--bb-orange);">Tier Two ✦ Growth</div>
        <h3 class="ad-price-card__name">The Growth</h3>
        <p class="ad-price-card__pitch">
          Look like you post daily &mdash; without thinking about it once. Reels that
          don't look like they were made in 2019, stories that move listings,
          and a content calendar that runs itself.
        </p>
        <div class="ad-price-card__amount">
          <span class="ad-price-card__dollar">$1,499<small style="font-size:24px; color:var(--bb-dust); font-weight:600;">/mo</small></span>
          <span class="ad-price-card__label">MONTHLY RETAINER</span>
        </div>
        <a href="#cta" class="bb-btn bb-btn-primary" style="width:100%; margin:20px 0;">Pick Growth</a>
        <hr class="bb-rule-double" />
        <div class="bb-label" style="margin-bottom:14px;">Everything in Foundation, plus</div>
        <ul class="ad-price-card__list">
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> 25 feed posts/month (IG + FB)</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> 8 reels/month, edited from your clips</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> 10 stories/month</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> 2 listing-launch reels per new listing</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> Full branded template system</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> Community management 1 hr/day</li>
          <li><span class="ad-check" style="color:var(--bb-orange);">◆</span> Bi-weekly reports + 1 strategy call/mo</li>
        </ul>
      </article>

      <!-- Tier 3 — Showcase -->
      <article class="ad-price-card">
        <div class="bb-eyebrow" style="color:var(--bb-gold);">Tier Three ✦ Showcase</div>
        <h3 class="ad-price-card__name" style="text-shadow: 2px 3px 0 var(--bb-brick), 4px 6px 0 var(--bb-gold-deep);">The Showcase</h3>
        <p class="ad-price-card__pitch">
          The full storefront. Reels, walkthroughs, the works. Sell the house before
          the buyer ever pulls in the driveway &mdash; this is the tier for agents
          who treat their feed like their best-performing listing photo.
        </p>
        <div class="ad-price-card__amount">
          <span class="ad-price-card__dollar">$2,999<small style="font-size:24px; color:var(--bb-dust); font-weight:600;">/mo</small></span>
          <span class="ad-price-card__label">MONTHLY RETAINER</span>
        </div>
        <a href="#cta" class="bb-btn bb-btn-ghost" style="width:100%; margin:20px 0; border-color:var(--bb-gold); color:var(--bb-gold);">Go Showcase</a>
        <hr class="bb-rule-double" />
        <div class="bb-label" style="margin-bottom:14px;">Everything in Growth, plus</div>
        <ul class="ad-price-card__list">
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> 35 feed posts/month</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> 15 reels/month</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> 20 stories/month</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> Third platform (TikTok or LinkedIn)</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> Unlimited listing-launch reels</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> ✦ 1 cinematic virtual walkthrough/mo</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> We come shoot if the property is local</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> Community management 2 hrs/day</li>
          <li><span class="ad-check" style="color:var(--bb-gold);">◆</span> Weekly reports + monthly strategy call</li>
        </ul>
      </article>

    </div>

    <!-- How it works under pricing -->
    <div class="ad-spend-note">
      <div class="ad-spend-note__title">How the monthly works</div>
      <p class="bb-body" style="color:var(--bb-taupe); max-width:680px; margin:0 auto;">
        We bill the same number on the same day every month. No setup fee if you commit
        to 6 months up front. First two weeks are voice-building &mdash; we don't post live
        until you've signed off on the look. After that, your feed runs without you.
      </p>
    </div>

    <p style="text-align:center; color:var(--bb-taupe); margin-top:48px; font-size:17px;">
      Not sure which plan? <a class="bb-btn-link" href="#cta">Talk to us &mdash; we'll figure it out together.</a>
    </p>
  </div>
</section>
```

- [ ] **Step 2: Reload and verify**

Confirm:
- Three pricing cards visible in 3-column grid on desktop, single column on mobile.
- Middle card ("The Growth") is elevated (translateY -12px), has orange border, and shows the gold "best value" sticker.
- Prices read $699/mo, $1,499/mo, $2,999/mo with `/mo` suffix in dust gray.
- Top card list ends with "Cancel anytime, 30 days' notice."
- Showcase card list includes the walkthrough line item with a ✦ glyph and gold check.
- Monthly callout banner under the title says "Same number every month. No setup fee on annual plans."

- [ ] **Step 3: Commit**

Run:
```bash
git add ui_kits/social-media-services/index.html
git commit -m "Replace pricing section with 3 monthly SMM tiers"
```

---

## Task 5: Add the À La Carte add-on strip below the pricing grid

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (insert new section after pricing, before Guarantee)
- Modify: `ui_kits/social-media-services/site.css` (add `.smm-alacarte` block)

- [ ] **Step 1: Insert the new section HTML**

In `index.html`, find the closing `</section>` of the `id="pricing"` block. Immediately after it, insert:

```html
<!-- ============== À La Carte ============== -->
<section id="alacarte" class="smm-alacarte">
  <div class="smm-alacarte__inner">
    <div class="bb-eyebrow" style="text-align:center; margin-bottom:12px;">✦ À La Carte ✦</div>
    <h2 class="bb-h2" style="text-align:center; margin: 0 0 16px;">One-off pieces, no plan required.</h2>
    <p class="bb-body" style="text-align:center; color:var(--bb-taupe); max-width:640px; margin:0 auto 40px;">
      Need a single reel for a hot listing? A walkthrough for your luxury client?
      Pay once, get the piece. No retainer, no commitment.
    </p>

    <div class="smm-alacarte__grid">
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">Extra Reel</div>
        <div class="smm-alacarte__price">$150</div>
        <p class="smm-alacarte__note">Edited from your clips, branded, captioned.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">Extra Walkthrough Video</div>
        <div class="smm-alacarte__price">$300</div>
        <p class="smm-alacarte__note">Cinematic edit, music, branded outro.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">On-Site Shoot &mdash; Half Day</div>
        <div class="smm-alacarte__price">$400</div>
        <p class="smm-alacarte__note">Local properties only. Up to 4 hours on site.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">On-Site Shoot &mdash; Full Day</div>
        <div class="smm-alacarte__price">$700</div>
        <p class="smm-alacarte__note">Local properties only. Multiple listings.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">Matterport 3D Scan</div>
        <div class="smm-alacarte__price">$400<span class="smm-alacarte__price-note">+</span></div>
        <p class="smm-alacarte__note">$400 under 3,000 sq ft · $600 above. Interactive walkthrough.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">Single Branded Post</div>
        <div class="smm-alacarte__price">$75</div>
        <p class="smm-alacarte__note">Graphic post, captioned, scheduled.</p>
      </div>
      <div class="smm-alacarte__card">
        <div class="smm-alacarte__name">Brand Voice Audit</div>
        <div class="smm-alacarte__price">$295</div>
        <p class="smm-alacarte__note">One-time setup. Strongly recommended for new clients.</p>
      </div>
      <div class="smm-alacarte__card smm-alacarte__card--custom">
        <div class="smm-alacarte__name">Something else?</div>
        <div class="smm-alacarte__price" style="font-size:22px; color:var(--bb-orange);">Ask us</div>
        <p class="smm-alacarte__note">If you can describe it, we can quote it. <a class="bb-btn-link" href="#cta">Get in touch.</a></p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append the new CSS block**

Append to `ui_kits/social-media-services/site.css` (still before the responsive `@media` block):

```css
/* ============== À La Carte ============== */
.smm-alacarte {
  padding: 96px 48px;
  background: var(--bb-black);
  border-top: 1px solid var(--bb-border-hair);
}
.smm-alacarte__inner { max-width: 1240px; margin: 0 auto; }
.smm-alacarte__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.smm-alacarte__card {
  background: var(--bb-black-warm);
  border: 1px solid var(--bb-border-hair);
  border-radius: var(--bb-radius-sm);
  padding: 20px 22px;
  display: grid; gap: 6px;
  transition: border-color var(--bb-dur-fast), transform var(--bb-dur-fast);
}
.smm-alacarte__card:hover {
  border-color: var(--bb-orange);
  transform: translateY(-1px);
}
.smm-alacarte__card--custom {
  border-style: dashed;
  border-color: var(--bb-border-soft);
}
.smm-alacarte__name {
  font-family: var(--bb-font-body); font-weight: 700;
  font-size: 15px; color: var(--bb-cream);
  letter-spacing: 0.01em;
}
.smm-alacarte__price {
  font-family: var(--bb-font-display-2); font-weight: 800;
  font-size: 28px; color: var(--bb-cream-bright);
  line-height: 1; margin-top: 4px;
}
.smm-alacarte__price-note {
  font-size: 16px; color: var(--bb-dust); margin-left: 2px;
}
.smm-alacarte__note {
  margin: 4px 0 0; font-size: 13px; line-height: 1.45;
  color: var(--bb-dust);
}
```

Append inside the existing `@media (max-width: 960px) { ... }` block:

```css
  .smm-alacarte { padding: 64px 24px; }
  .smm-alacarte__grid { grid-template-columns: repeat(2, 1fr); }
```

- [ ] **Step 3: Reload and verify**

Confirm:
- New section appears below the pricing block.
- 8 cards in a 4×2 grid on desktop, 2-wide on mobile.
- Last card has dashed border and "Ask us" in orange.
- Hover on any card shifts border to orange.

- [ ] **Step 4: Commit**

Run:
```bash
git add ui_kits/social-media-services/
git commit -m "Add à la carte add-ons section to SMM page"
```

---

## Task 6: Add the Virtual Walkthrough hero section

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (insert section before Guarantee block)
- Modify: `ui_kits/social-media-services/site.css` (add `.smm-walkthrough` block)

- [ ] **Step 1: Insert the new section HTML**

Find the existing `<section id="guarantee" class="ad-guarantee bb-grain">` block. Immediately **before** it, insert:

```html
<!-- ============== Walkthrough Hero ============== -->
<section id="walkthrough" class="smm-walkthrough bb-grain">
  <div class="smm-walkthrough__inner">
    <div class="bb-eyebrow" style="color:var(--bb-gold);">✦ The Showcase Difference ✦</div>
    <h2 class="bb-h1" style="margin:14px 0 24px;">Sell the house before<br/>they pull in the driveway.</h2>
    <p class="bb-body-lg" style="color:var(--bb-taupe); max-width:720px; margin:0 0 56px;">
      Buyers scroll Instagram before they ever call. A 60-second cinematic walkthrough
      on your reels &mdash; the kind that shows the morning light hitting the kitchen and
      the master bath at golden hour &mdash; sells the home before the showing. Included
      every month on the Showcase plan.
    </p>

    <div class="smm-walkthrough__steps">
      <div class="smm-walkthrough__step">
        <div class="smm-walkthrough__step-num">01</div>
        <h3 class="smm-walkthrough__step-title">You film</h3>
        <p class="smm-walkthrough__step-body">
          A quick phone walkthrough at the listing. We send a one-page how-to so
          you nail the camera moves on the first try.
        </p>
      </div>
      <div class="smm-walkthrough__step">
        <div class="smm-walkthrough__step-num">02</div>
        <h3 class="smm-walkthrough__step-title">We cut</h3>
        <p class="smm-walkthrough__step-body">
          Cinematic edit, music, captions, branded outro. 48-hour turnaround.
        </p>
      </div>
      <div class="smm-walkthrough__step">
        <div class="smm-walkthrough__step-num">03</div>
        <h3 class="smm-walkthrough__step-title">It goes live</h3>
        <p class="smm-walkthrough__step-body">
          Reels, YouTube, embedded on your site if you want. We post it at the
          time of day your listings get the most clicks.
        </p>
      </div>
    </div>

    <div class="smm-walkthrough__local">
      <span class="smm-walkthrough__local-label">Local Property?</span>
      <p>If the listing is within an hour of us, we come shoot it for you &mdash; included with the Showcase plan. Just give us 5 days' notice.</p>
    </div>

    <div style="margin-top:40px;">
      <a href="#pricing" class="bb-btn bb-btn-primary" style="font-size:18px; padding:18px 32px;">
        See the Showcase Plan
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append the new CSS block**

Append to `ui_kits/social-media-services/site.css` (still before the `@media` block):

```css
/* ============== Walkthrough Hero ============== */
.smm-walkthrough {
  position: relative;
  padding: 112px 48px;
  background: var(--bb-black-soft);
  border-top: 1px solid var(--bb-border-hair);
  border-bottom: 1px solid var(--bb-border-hair);
}
.smm-walkthrough__inner {
  max-width: 1080px; margin: 0 auto;
  position: relative; z-index: 1;
}
.smm-walkthrough__steps {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}
.smm-walkthrough__step {
  background: var(--bb-black-warm);
  border: 1px solid var(--bb-border-hair);
  border-radius: var(--bb-radius-md);
  padding: 28px 26px;
}
.smm-walkthrough__step-num {
  font-family: var(--bb-font-display-2);
  font-weight: 800; font-size: 40px; line-height: 1;
  color: var(--bb-gold);
  letter-spacing: -0.03em;
  margin-bottom: 10px;
  text-shadow: 2px 3px 0 var(--bb-brick-deep);
}
.smm-walkthrough__step-title {
  font-family: var(--bb-font-body); font-weight: 700;
  font-size: 22px; color: var(--bb-cream-bright);
  margin: 0 0 8px;
}
.smm-walkthrough__step-body {
  margin: 0; font-size: 15px; line-height: 1.5;
  color: var(--bb-taupe);
}
.smm-walkthrough__local {
  background: var(--bb-black-warm);
  border: 1px solid var(--bb-border-soft);
  border-left: 4px solid var(--bb-gold);
  border-radius: var(--bb-radius-sm);
  padding: 20px 24px;
  display: grid; gap: 6px;
}
.smm-walkthrough__local-label {
  font-family: var(--bb-font-body); font-weight: 700;
  font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--bb-gold);
}
.smm-walkthrough__local p {
  margin: 0; font-size: 15px; line-height: 1.5; color: var(--bb-cream);
}
```

Append inside the existing `@media (max-width: 960px) { ... }` block:

```css
  .smm-walkthrough { padding: 64px 24px; }
  .smm-walkthrough__steps { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
```

- [ ] **Step 3: Reload and verify**

Confirm:
- New section sits between À La Carte and Guarantee.
- Headline reads "Sell the house before they pull in the driveway."
- Three numbered step cards (01, 02, 03) in a row, gold numerals with a brick-red shadow.
- "Local Property?" callout below the steps with a gold left border.
- Primary CTA button at the bottom: "See the Showcase Plan."
- Nav link `#walkthrough` (from Task 2) now scrolls here.

- [ ] **Step 4: Commit**

Run:
```bash
git add ui_kits/social-media-services/
git commit -m "Add virtual-walkthrough hero section to SMM page"
```

---

## Task 7: Rewrite Guarantee, FAQ, and CTA sections

**Files:**
- Modify: `ui_kits/social-media-services/index.html` (Guarantee, FAQ, CTA blocks)

- [ ] **Step 1: Replace the Guarantee section**

Find `<section id="guarantee" class="ad-guarantee bb-grain">` and replace its inner content with:

```html
<section id="guarantee" class="ad-guarantee bb-grain">
  <div class="ad-guarantee__inner">
    <div class="bb-eyebrow" style="color:var(--bb-gold);">✦ Our Guarantee ✦</div>
    <h2 class="bb-h1" style="margin:14px 0 24px;">If 90 days in you're not getting<br/>more eyes on your listings,<br/>we work for free until you are.</h2>
    <p class="bb-body-lg" style="color:var(--bb-taupe); max-width:720px;">
      Social media is a long game &mdash; anyone who tells you otherwise is selling magic beans.
      But 90 days is plenty to know whether we've got the voice right and the content is hitting.
      If the numbers aren't moving, we don't bill you for the next month. We sit down, look at
      what's not working, and fix it on our dime.
    </p>
    <div style="margin-top:40px;">
      <a href="#cta" class="bb-btn bb-btn-primary" style="font-size:18px; padding:20px 36px;">
        Let's Get Started
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Replace the FAQ section**

Find `<section id="faq" class="ad-faq">` and replace its inner content with:

```html
<section id="faq" class="ad-faq">
  <div class="ad-faq__inner">
    <div class="bb-eyebrow" style="text-align:center; margin-bottom:14px;">✦ Questions ✦</div>
    <h2 class="bb-h1" style="text-align:center; margin-bottom:56px;">Straight answers,<br/>no runaround.</h2>

    <div class="ad-faq__list">
      <details class="ad-faq__item" open>
        <summary class="ad-faq__q">Do I have to film anything myself?</summary>
        <p class="ad-faq__a">No, but it helps a lot. We can run your account on graphics and evergreen content alone, but for real estate, your face and your listings outperform graphics about three to one. We give you a one-page filming guide; most agents get the hang of it in a week.</p>
      </details>
      <details class="ad-faq__item">
        <summary class="ad-faq__q">What if I don't have a current listing to post about?</summary>
        <p class="ad-faq__a">We mix in evergreen content &mdash; neighborhood spotlights, market updates, buyer/seller tips, "day in the life" reels &mdash; so the feed stays alive between listings. Quiet months are when you stay top-of-mind for the next sale.</p>
      </details>
      <details class="ad-faq__item">
        <summary class="ad-faq__q">Can I approve posts before they go live?</summary>
        <p class="ad-faq__a">Yes. You'll get a weekly content calendar to thumbs-up or change. Once you trust us, most agents stop reviewing and let us post directly &mdash; usually around month three.</p>
      </details>
      <details class="ad-faq__item">
        <summary class="ad-faq__q">What if I get a great clip on the weekend?</summary>
        <p class="ad-faq__a">Send it. We'll post it Monday morning, or sooner if it's hot. Showcase clients get same-day turnaround on listing-launch reels.</p>
      </details>
      <details class="ad-faq__item">
        <summary class="ad-faq__q">Can I pause if I take a month off?</summary>
        <p class="ad-faq__a">Yes &mdash; pause anytime with 30 days' notice. We hold your content library and pick back up when you're ready.</p>
      </details>
      <details class="ad-faq__item">
        <summary class="ad-faq__q">Do you handle paid ads too?</summary>
        <p class="ad-faq__a">Different page &mdash; see our <a class="bb-btn-link" href="../ad-services/index.html">Ad Services</a>. The plans complement each other; many agents run both organic social with us and a small paid-ads campaign on top.</p>
      </details>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Replace the CTA section**

Find `<section id="cta" class="ad-cta">` and replace its inner content with:

```html
<section id="cta" class="ad-cta">
  <div class="ad-cta__inner">
    <h2 class="bb-display-stack ad-cta__title">Ready to Look Like<br/>You Post Daily?</h2>
    <p class="bb-body-lg" style="color:var(--bb-taupe); max-width:600px; margin:24px auto 40px; text-align:center;">
      One conversation. We'll talk about your business, your listings, and which plan
      makes sense. No pressure, no pitch deck.
    </p>
    <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
      <a href="mailto:donovan@business-builder.online" class="bb-btn bb-btn-primary" style="font-size:18px; padding:20px 40px;">
        Start a Conversation
      </a>
      <a href="tel:7742347480" class="bb-btn bb-btn-ghost" style="font-size:18px; padding:20px 40px;">
        Call Us Direct
      </a>
    </div>
  </div>
</section>
```

The footer block is unchanged from the original — leave it in place.

- [ ] **Step 4: Reload and verify**

Confirm:
- Guarantee headline reads "If 90 days in you're not getting more eyes on your listings, we work for free until you are."
- FAQ first question is "Do I have to film anything myself?" and is open by default.
- FAQ last question links to `../ad-services/index.html`.
- CTA headline reads "Ready to Look Like You Post Daily?"
- Both CTA buttons still point to the real email and phone number.

- [ ] **Step 5: Commit**

Run:
```bash
git add ui_kits/social-media-services/index.html
git commit -m "Rewrite Guarantee, FAQ, and CTA copy for SMM page"
```

---

## Task 8: Update README and run full-page verification

**Files:**
- Modify: `README.md` (UI kits index table, ~line 16)

- [ ] **Step 1: Add the new UI kit to the README index**

Open `README.md`. Find the line:

```
| `ui_kits/agency-website/` | The 3-tier pricing page UI kit |
```

Immediately after the next two table rows (`SKILL.md` and `uploads/`), the table ends. Insert two new rows for the two ad/SMM kits. Replace the existing single row referencing `ui_kits/agency-website/` with three rows:

```
| `ui_kits/agency-website/` | The original 3-tier agency pricing UI kit |
| `ui_kits/ad-services/` | One-time setup pricing for ad campaign builds (Static / Combo / Motion) |
| `ui_kits/social-media-services/` | Monthly retainer pricing for real estate social media management (Foundation / Growth / Showcase) |
```

Then find the section at the bottom titled `## Index of cards in the Design System tab`, and replace its final bullet:

```
- **UI kits** — `ui_kits/agency-website/index.html` — the 3-tier pricing page
```

with:

```
- **UI kits** — three live kits:
  - `ui_kits/agency-website/index.html` — original agency pricing page
  - `ui_kits/ad-services/index.html` — one-time ad campaign setup pricing
  - `ui_kits/social-media-services/index.html` — monthly real estate SMM retainer pricing
```

- [ ] **Step 2: Run the full visual verification pass**

Run:
```bash
cd /home/magiccat/Downloads/Business-Builder-Design-System
python3 -m http.server 8080
```

Open `http://localhost:8080/ui_kits/social-media-services/index.html` in a browser. Walk the page top-to-bottom and check:

1. **Tab title** — "Business Builder — Real Estate Social Media"
2. **Header** — logo, nav (How It Works · Plans · Walkthroughs), Let's Talk button
3. **Sample-note banner** — visible above the hero, cream text, teal left border
4. **Hero** — headline "We run your social. *You run your business.*"; subhead mentions "9pm"; CTAs say "See the Plans" / "How It Works"
5. **Problem** — three cards starting with "You meant to post that new listing. Three days ago."
6. **How It Works** — three steps: We Build Your Voice / We Make the Content / We Post & Engage
7. **Pricing** — three cards at $699 / $1,499 / $2,999, middle card elevated with "best value" sticker, all prices show `/mo` suffix
8. **À La Carte** — 8 cards in 4×2 grid; last is dashed-border "Ask us"
9. **Walkthrough** — three numbered steps, gold accent, "Local Property?" callout, gold-bordered CTA
10. **Guarantee** — "If 90 days in..."
11. **FAQ** — six questions, last links to ad-services page
12. **CTA** — "Ready to Look Like You Post Daily?"
13. **Footer** — same as ad-services

- [ ] **Step 3: Anchor-link check**

In the browser:
- Click each nav link in turn (How It Works, Plans, Walkthroughs). Each must scroll to its corresponding section.
- Click the "See the Showcase Plan" button in the walkthrough section — it must scroll to `#pricing`.
- Click "Let's Talk" — must scroll to `#cta`.
- Click the FAQ link to `../ad-services/index.html` — must load the existing ad-services page.

- [ ] **Step 4: Responsive check**

In the browser, narrow the window to ~700px wide:
- Pricing cards stack vertically; middle card flattens (no translateY).
- À La Carte grid collapses from 4 cols to 2.
- Walkthrough steps stack vertically.
- Nav links disappear (mobile breakpoint).
- No horizontal scroll on the body.

- [ ] **Step 5: Console error check**

Open browser devtools console. Reload the page. Expected: zero errors. (404s on `bg-grain.png` are pre-existing and out of scope for this task — the existing ad-services page has them too. If any error references a new selector or new asset added in this work, fix it.)

- [ ] **Step 6: Stop the server and commit**

Stop the dev server (Ctrl+C). Run:

```bash
git add README.md
git commit -m "Index new social-media-services UI kit in README"
```

- [ ] **Step 7: Verify the existing ad-services page is unchanged**

Run:
```bash
git diff ce512ab -- ui_kits/ad-services/
```
Expected: zero output. The existing ad-services HTML and CSS must be byte-identical to the pre-work state.

If anything has changed, restore it:
```bash
git checkout ce512ab -- ui_kits/ad-services/
git commit -m "Restore ad-services to pre-SMM-work state"
```

---

## Verification Checklist (end of plan)

After all tasks, confirm:

- [ ] `ui_kits/social-media-services/index.html` exists and renders the full page top-to-bottom per the spec.
- [ ] `ui_kits/social-media-services/site.css` exists with the three new component blocks (`smm-note-banner`, `smm-alacarte`, `smm-walkthrough`) plus the original forked styles.
- [ ] `ui_kits/ad-services/index.html` and `site.css` are byte-identical to their pre-work state.
- [ ] `README.md` lists the new UI kit in both the top index table and the bottom Design System index list.
- [ ] All anchor links resolve, all CTAs point to working targets (email, phone, `#pricing`, `#cta`, `../ad-services/index.html`).
- [ ] Responsive layout works at 960px and below.
- [ ] Browser console shows no errors introduced by this work.
- [ ] Git log shows ~7 atomic commits (one per task) all on `main`.
