function Check({ color = "var(--bb-orange)" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function Tier({ tier }) {
  const featured = tier.featured;
  return (
    <article className={"bb-tier" + (featured ? " bb-tier--featured" : "")}>
      {featured && <span className="bb-tier__sticker">most popular!</span>}
      <div className="bb-tier__eyebrow bb-eyebrow" style={{color: tier.accent}}>
        {tier.eyebrow}
      </div>
      <h3 className="bb-tier__name" style={{textShadow: `2px 3px 0 ${tier.shadow1}, 4px 6px 0 ${tier.shadow2}`}}>
        {tier.name}
      </h3>
      <p className="bb-tier__pitch">{tier.pitch}</p>
      <div className="bb-tier__price-row">
        <span className="bb-tier__price">${tier.price}</span>
        <span className="bb-tier__per">{tier.per}</span>
      </div>
      <a href="#contact" className={"bb-btn " + (featured ? "bb-btn-primary" : "bb-btn-ghost") + " bb-tier__cta"}>
        {tier.cta}
      </a>
      <hr className="bb-rule-double" />
      <div className="bb-label bb-tier__includes-label">What's included</div>
      <ul className="bb-tier__list">
        {tier.features.map(f => (
          <li key={f}><Check color={tier.accent} /><span>{f}</span></li>
        ))}
      </ul>
    </article>
  );
}

const TIERS = [
  {
    eyebrow: "Plan One ✦ Starter",
    name: "The Starter",
    pitch: "A clean, fast, professional site so people stop questioning whether you're real.",
    price: "1,200",
    per: "one-time",
    cta: "Start Here",
    accent: "var(--bb-teal)",
    shadow1: "var(--bb-brick)",
    shadow2: "var(--bb-teal-deep)",
    features: [
      "5-page hand-built website",
      "Logo refresh & basic brand kit",
      "Contact form + Google Maps",
      "Mobile-friendly, fast as hell",
      "30 days of post-launch tweaks",
    ],
  },
  {
    eyebrow: "Plan Two ✦ Builder",
    name: "The Builder",
    pitch: "The full shop — site, brand, print, and the small automations that win you back your evenings.",
    price: "2,400",
    per: "one-time",
    cta: "Pick The Builder",
    featured: true,
    accent: "var(--bb-orange)",
    shadow1: "var(--bb-brick)",
    shadow2: "var(--bb-teal)",
    features: [
      "Up to 10-page custom website",
      "Full brand: logo, colors, type",
      "Print kit: cards, signage, menus",
      "Booking + lead-routing automations",
      "Email sequences (welcome + reviews)",
      "60 days of tweaks & training",
    ],
  },
  {
    eyebrow: "Plan Three ✦ The Works",
    name: "The Works",
    pitch: "Your site, your back office, your AI helpers — wired together so the business runs without you babysitting it.",
    price: "5,800",
    per: "starting at",
    cta: "Let's Talk",
    accent: "var(--bb-gold)",
    shadow1: "var(--bb-brick)",
    shadow2: "var(--bb-gold-deep)",
    features: [
      "Everything in The Builder",
      "Custom AI assistant for your customers",
      "Inventory or scheduling integrations",
      "Internal dashboards & reporting",
      "Quarterly reviews for a year",
      "Priority phone line — no tickets",
    ],
  },
];

function PricingGrid() {
  return (
    <section id="pricing" className="bb-pricing">
      <div className="bb-pricing__head">
        <div className="bb-eyebrow">✺ Pricing ✺</div>
        <h2 className="bb-display-stack">Three Plans.<br/>Pick One.</h2>
        <p className="bb-pricing__sub">
          Flat fees. No retainers, no platform lock-in, no surprise line items.
          You own everything we build.
        </p>
      </div>
      <div className="bb-pricing__grid">
        {TIERS.map(t => <Tier key={t.name} tier={t} />)}
      </div>
      <p className="bb-pricing__note">
        Need something between plans? We'll customize. <a className="bb-btn-link" href="#contact">Talk to us →</a>
      </p>
    </section>
  );
}
window.PricingGrid = PricingGrid;
