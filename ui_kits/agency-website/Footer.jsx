function Footer() {
  return (
    <footer className="bb-footer">
      <hr className="bb-rule-double" />
      <div className="bb-footer__grid">
        <div className="bb-footer__brand">
          <img src="../../assets/logo-transparent.png" alt="Business Builder" />
          <p className="bb-body-sm">Logo to launch — online, in print &amp; beyond. Built for the people who run things.</p>
        </div>
        <div>
          <div className="bb-label">Studio</div>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <div className="bb-label">Hello</div>
          <ul>
            <li><a href="mailto:hello@businessbuilder.co">hello@businessbuilder.co</a></li>
            <li><a href="tel:5125551234">(512) 555-1234</a></li>
            <li><span className="bb-body-sm">Mon–Fri · 9–6 CT</span></li>
          </ul>
        </div>
      </div>
      <div className="bb-footer__legal">
        <span>© 2026 Business Builder Co.</span>
        <span>/// Hand-built in Austin ///</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
