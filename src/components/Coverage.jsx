import React from 'react';
import { Link } from 'react-router-dom';
import RevealUp from './RevealUp';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const coveragePlans = [
  {
    title: 'Everyday Drivers',
    desc: 'Liability, collision & comprehensive coverage tailored for your daily commute, priced to protect your wallet too.',
    img: '/images/sedan-coverage.jpg',
    alt: 'Blue Audi sedan, everyday driver coverage',
    delay: '0s',
  },
  {
    title: 'SUVs & Family Vehicles',
    desc: 'Bundle multi-driver and multi-car discounts with higher liability limits built for family road trips.',
    img: '/images/suv-coverage.jpg',
    alt: 'White SUV, family coverage plan',
    delay: '0.1s',
  },
  {
    title: 'Performance & Luxury',
    desc: 'Agreed-value and gap coverage options that protect what your high-performance vehicle is really worth.',
    img: '/images/sports-coverage.jpg',
    alt: 'Red sports car, performance vehicle coverage',
    delay: '0.2s',
  },
];

export default function Coverage() {
  return (
    <section className="section" id="coverage">
      <div className="container">
        <RevealUp className="section-head">
          <span className="eyebrow">Coverage Built Around You</span>
          <h2>Whatever You Drive, We've Got a Plan For It</h2>
          <p>From your daily commuter to your weekend toy, find the exact level of protection your vehicle deserves.</p>
        </RevealUp>

        <div className="coverage-grid">
          {coveragePlans.map((plan, i) => (
            <RevealUp
              key={i}
              tag="article"
              className="coverage-card"
              style={{ '--d': plan.delay }}
            >
              <div className="coverage-img">
                <img src={plan.img} alt={plan.alt} loading="lazy" />
              </div>
              <div className="coverage-body">
                <h3>{plan.title}</h3>
                <p>{plan.desc}</p>
                <Link to="/contact" className="card-link">
                  See plans <ArrowIcon />
                </Link>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
