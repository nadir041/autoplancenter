import React from 'react';
import RevealUp from './RevealUp';

const features = [
  {
    num: '01',
    img: '/images/roadside-assistance.jpg',
    alt: 'Mechanic providing roadside tire assistance',
    title: '24/7 Roadside Assistance',
    desc: 'Flat tire at midnight? Dead battery on the highway? One tap connects you to help, wherever you are, whenever you need it, included on every plan tier.',
    checklist: [
      'Towing up to 15 miles',
      'Lockout & fuel delivery',
      'Average dispatch under 30 minutes',
    ],
    reverse: false,
  },
  {
    num: '02',
    img: '/images/claims-support.jpg',
    alt: 'Roadside claims support after a breakdown',
    title: 'Claims That Move at Your Speed',
    desc: 'File a claim from your phone in minutes. Our claims specialists guide you start to finish, most straightforward claims are approved within 48 hours.',
    checklist: [
      'Photo-based claim filing',
      'Real human support, not just bots',
      'Rental car reimbursement options',
    ],
    reverse: true,
  },
  {
    num: '03',
    img: '/images/mechanic-network.jpg',
    alt: 'Certified mechanic inspecting a vehicle engine',
    title: 'A Network You Can Trust',
    desc: 'Access thousands of vetted repair shops and certified mechanics nationwide, so your car is always in good hands after an accident.',
    checklist: [
      '10,000+ certified shops',
      'Guaranteed repair quality',
      'Direct billing, no upfront cash',
    ],
    reverse: false,
  },
];

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <RevealUp className="section-head">
          <span className="eyebrow">Why Drivers Choose Us</span>
          <h2>Insurance Shopping, Without the Headache</h2>
        </RevealUp>

        {features.map((feature, i) => (
          <RevealUp
            key={i}
            className={`feature-row${feature.reverse ? ' reverse' : ''}`}
          >
            <div className="feature-media">
              <img src={feature.img} alt={feature.alt} loading="lazy" />
            </div>
            <div className="feature-copy">
              <span className="feature-num">{feature.num}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <ul className="check-list">
                {feature.checklist.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealUp>
        ))}
      </div>
    </section>
  );
}
