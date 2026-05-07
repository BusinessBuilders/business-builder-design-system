function Hero() {
  return (
    <section className="bb-hero bb-grain">
      <div className="bb-hero__inner">
        <img className="bb-hero__logo" src="../../assets/logo-transparent.png" alt="Business Builder" />
        <div className="bb-eyebrow">Web Design ✦ AI Automation ✦ Print</div>
        <h1 className="bb-hero__title">
          We build the <em>whole shop.</em>
        </h1>
        <p className="bb-hero__sub">
          Logo to launch — online, in print &amp; beyond. We handle the website,
          the brand, the automations, the business cards, and the boring stuff
          in between. Three plans. Pick one. We get to work.
        </p>
        <div className="bb-hero__ctas">
          <a className="bb-btn bb-btn-primary" href="#pricing">See the Plans</a>
          <a className="bb-btn bb-btn-ghost" href="#work">See Our Work</a>
        </div>
        <div className="bb-hero__trust">
          <span className="bb-label">Trusted by independents in</span>
          <span className="bb-hero__locales">Brooklyn · Asheville · Austin · Detroit · Portland</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
