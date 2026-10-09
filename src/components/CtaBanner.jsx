import React from 'react';
import { Link } from 'react-router-dom';
import RevealUp from './RevealUp';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-media">
        <img src="/images/cta-drive.jpg" alt="Red sports car driving on an open road" loading="lazy" />
        <div className="cta-overlay"></div>
      </div>
      <RevealUp className="container cta-inner">
        <h2>Drivers Save an Average of <span class="text-gradient">$537 a Year</span> When They Switch</h2>
        <p>Stop overpaying for the same coverage. See your personalized quote in under a minute.</p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Check My Rate Now
        </Link>
      </RevealUp>
    </section>
  );
}
