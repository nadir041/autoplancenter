import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isContactPage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const prefix = isContactPage ? '/' : '';

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Auto Benefit Center" width="800" height="561" />
        </Link>

        <nav className={`main-nav${navOpen ? ' open' : ''}`} id="mainNav">
          <a href={`${prefix}#coverage`} onClick={() => setNavOpen(false)}>Coverage</a>
          <a href={`${prefix}#why-us`} onClick={() => setNavOpen(false)}>Why Us</a>
          <a href={`${prefix}#how-it-works`} onClick={() => setNavOpen(false)}>How It Works</a>
          <a href={`${prefix}#faq`} onClick={() => setNavOpen(false)}>FAQ</a>
          <Link to="/contact" className="nav-cta" onClick={() => setNavOpen(false)}>Get My Quote</Link>
        </nav>

        <button
          className={`nav-toggle${navOpen ? ' active' : ''}`}
          id="navToggle"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
