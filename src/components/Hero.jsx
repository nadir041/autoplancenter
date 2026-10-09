import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
import RevealUp from './RevealUp';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src="/images/hero-car.jpg" alt="Blue BMW driving on a scenic road" loading="eager" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-inner">
        <RevealUp className="hero-copy">
          <span className="eyebrow">🛡️ Trusted by 40,000+ Drivers Nationwide</span>
          <h1>Auto Insurance That Actually <span className="text-gradient">Has Your Back.</span></h1>
          <p className="hero-sub">Compare top-rated carriers, unlock hidden discounts, and drive away with coverage that fits your life, not the other way around. Quotes in under 2 minutes.</p>

          <div className="hero-quote-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get My Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <p className="form-note">No spam. No obligation. Just real savings. 🔒 256-bit secure.</p>

          <div className="hero-stats">
            <div className="stat">
              <AnimatedCounter target={847} />
              <span className="stat-suffix">M+</span>
              <span className="stat-label">Saved for drivers</span>
            </div>
            <div className="stat">
              <AnimatedCounter target={4.9} isDecimal={true} />
              <span className="stat-suffix">/5</span>
              <span className="stat-label">Average rating</span>
            </div>
            <div className="stat">
              <AnimatedCounter target={60} />
              <span className="stat-suffix">sec</span>
              <span className="stat-label">Avg. quote time</span>
            </div>
          </div>
        </RevealUp>
      </div>

      <div className="scroll-cue"><span></span></div>
    </section>
  );
}
