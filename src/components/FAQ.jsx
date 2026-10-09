import React, { useState, useRef } from 'react';
import RevealUp from './RevealUp';

const faqData = [
  {
    q: 'Will checking my rate affect my credit score?',
    a: 'No. Getting a quote through Auto Benefit Center uses a soft inquiry only, which never impacts your credit score.',
  },
  {
    q: 'How fast can my coverage start?',
    a: 'Most drivers can activate same-day coverage right after choosing a plan. Your digital ID card is available instantly.',
  },
  {
    q: 'Can I bundle more than one vehicle?',
    a: 'Yes, multi-car households typically see some of the largest discounts. Add every vehicle on your quote to see the savings.',
  },
  {
    q: 'What if I have a less-than-perfect driving record?',
    a: 'We compare carriers who specialize in a range of driving histories, so you can still find competitive coverage.',
  },
  {
    q: 'Is Auto Benefit Center an insurance carrier?',
    a: (
      <>
        We're a licensed comparison and referral service that connects drivers with A-rated insurance carriers and partners, see our <a href="/terms-and-conditions">Terms &amp; Conditions</a> for full details.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const panelRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section section-alt" id="faq">
      <div className="container container-narrow">
        <RevealUp className="section-head">
          <span className="eyebrow">Questions? Answered.</span>
          <h2>Frequently Asked Questions</h2>
        </RevealUp>

        <div className="accordion" id="accordion">
          {faqData.map((faq, i) => {
            const isActive = activeIndex === i;
            const scrollHeight = panelRefs.current[i] ? panelRefs.current[i].scrollHeight : 0;
            return (
              <RevealUp
                key={i}
                className={`accordion-item${isActive ? ' active' : ''}`}
              >
                <button
                  type="button"
                  className="accordion-trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isActive}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="chev"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className="accordion-panel"
                  ref={(el) => (panelRefs.current[i] = el)}
                  style={{
                    maxHeight: isActive ? `${scrollHeight || 200}px` : '0px',
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </RevealUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
