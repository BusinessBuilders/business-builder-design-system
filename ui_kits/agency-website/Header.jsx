function Header() {
  return (
    <header className="bb-site-header">
      <a className="bb-site-header__brand" href="#">
        <img src="../../assets/logo-transparent.png" alt="Business Builder" />
      </a>
      <nav className="bb-site-header__nav">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </nav>
      <a href="#contact" className="bb-btn bb-btn-primary bb-site-header__cta">Start a Project</a>
    </header>
  );
}
window.Header = Header;
