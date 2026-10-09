import React from 'react';
import RevealUp from './RevealUp';

const miniGridItems = [
  { strong: 'No hidden fees', span: 'What you quote is what you pay' },
  { strong: 'Cancel anytime', span: 'No long-term lock-in contracts' },
  { strong: 'Licensed nationwide', span: 'Compliant in all 50 states' },
  { strong: 'A+ rated carriers', span: 'Only vetted, trusted partners' },
];

export default function SplitSection() {
  return (
    <section className="section section-split">
      <div className="container split-inner">
        <RevealUp className="split-media">
          <img src="/images/scenic-drive.jpg" alt="Classic blue sports car on an autumn road" />
        </RevealUp>
        <RevealUp className="split-copy">
          <span className="eyebrow">Peace of Mind, Included</span>
          <h2>Coverage That Lets You Enjoy the Drive</h2>
          <p>
            We built Auto Benefit Center around one idea: insurance should feel like a safety net, not a subscription you dread renewing. Transparent pricing, plain-English policies, and a team that actually picks up the phone.
          </p>
          <div className="mini-grid">
            {miniGridItems.map((item, i) => (
              <div className="mini-item" key={i}>
                <strong>{item.strong}</strong>
                <span>{item.span}</span>
              </div>
            ))}
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
