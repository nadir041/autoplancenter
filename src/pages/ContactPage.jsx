import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add('contact-page');
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <>
      <main>
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <span className="eyebrow">Ready When You Are</span>
                <h2>See Your Personalized Quote Today</h2>
                <p>
                  Enter your details to get matched with coverage options in your area. It's free, fast, and there's zero obligation to buy.
                </p>
                <div className="contact-points">
                  <div>
                    <strong>📞 Call Us</strong>
                    <span id="phoneDisplay">
                      <a href="tel:+18447801683">+1 844-780-1683</a>
                    </span>
                  </div>
                  <div>
                    <strong>✉️ Email</strong>
                    <span id="emailDisplay">
                      <a href="mailto:support@autoplancenter.com">support@autoplancenter.com</a>
                    </span>
                  </div>
                  <div>
                    <strong>📍 Address</strong>
                    <span>1201 N Market St, Suite 111, Wilmington, DE 19801</span>
                  </div>
                  <div>
                    <strong>🕐 Hours</strong>
                    <span>Mon–Sat, 8AM–8PM</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
