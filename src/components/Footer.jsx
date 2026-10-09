import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ isContactPage = false }) {
  const currentYear = new Date().getFullYear();
  const prefix = isContactPage ? '/' : '';

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Auto plan Center" width="800" height="561" />
          <p>
            Smarter auto insurance shopping, built for real drivers. We compare top-rated carriers so you don't have to.
          </p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href={`${prefix}#why-us`}>Why Us</a>
          <a href={`${prefix}#how-it-works`}>How It Works</a>
          <a href={`${prefix}#faq`}>FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <a href="tel:+18447801683">+1 844-780-1683</a>
          <a href="mailto:support@autoplancenter.com">support@autoplancenter.com</a>
          <span>
            1201 N Market St, Suite 111,<br />Wilmington, DE 19801
          </span>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© <span id="year">{currentYear}</span> Auto Plan Center. All rights reserved.</p>
        <p className="disclaimer">
          Auto Plan Center is a marketing and comparison service, not an insurance carrier. Coverage is subject to underwriting approval by third-party partners.
        </p>
      </div>
    </footer>
  );
}
