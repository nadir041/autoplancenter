import React from 'react';
import RevealUp from './RevealUp';

const steps = [
  {
    step: 'Step 1',
    title: 'Tell Us About Your Car',
    desc: 'Enter your ZIP and a few quick details. It takes less time than parking your car.',
    delay: '0s',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6V11C3 16 6.5 20.5 12 22C17.5 20.5 21 16 21 11V6L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    step: 'Step 2',
    title: 'Compare Real Quotes',
    desc: 'See side-by-side pricing from top carriers, matched to your driving profile, no guesswork.',
    delay: '0.1s',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: 'Step 3',
    title: 'Lock In Your Rate',
    desc: 'Pick the plan that fits, sign digitally, and hit the road with confidence, same day coverage available.',
    delay: '0.2s',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <RevealUp className="section-head">
          <span className="eyebrow">Simple by Design</span>
          <h2>Get Covered in 3 Easy Steps</h2>
        </RevealUp>

        <div className="steps-grid">
          {steps.map((item, i) => (
            <RevealUp
              key={i}
              className="step-card"
              style={{ '--d': item.delay }}
            >
              <div className="step-icon">{item.icon}</div>
              <span className="step-no">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
