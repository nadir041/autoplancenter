import React, { useEffect } from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section className="legal-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>How we collect, use, and protect your information.</p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <p className="legal-updated">Last Updated: July 9, 2026</p>

            <div className="legal-toc">
              <h4>On this page</h4>
              <ol>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#info-we-collect">Information We Collect</a></li>
                <li><a href="#how-we-use">How We Use Your Information</a></li>
                <li><a href="#sharing">How We Share Information</a></li>
                <li><a href="#cookies">Cookies &amp; Tracking Technologies</a></li>
                <li><a href="#tcpa">Consent to Contact (TCPA)</a></li>
                <li><a href="#choices">Your Choices &amp; Rights</a></li>
                <li><a href="#security">Data Security</a></li>
                <li><a href="#retention">Data Retention</a></li>
                <li><a href="#children">Children's Privacy</a></li>
                <li><a href="#state-rights">State Privacy Rights (CCPA/CPRA &amp; Others)</a></li>
                <li><a href="#changes">Changes to This Policy</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
              </ol>
            </div>

            <h2 id="overview">1. Overview</h2>
            <p>
              Auto Benefit Center ("Auto Benefit Center," "we," "us," or "our") operates autoplancenter.com (the "Site") as a marketing and comparison platform that helps consumers explore and request auto insurance quotes from licensed third-party insurance carriers and agents ("Partners"). This Privacy Policy explains what information we collect when you visit or use the Site, how we use and share that information, and the choices available to you.
            </p>
            <p>
              By using the Site, submitting a form, or requesting a quote, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site.
            </p>

            <h2 id="info-we-collect">2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Contact details such as name, phone number, email address, and mailing address</li>
              <li>Vehicle and driving information such as ZIP code, vehicle make/model/year, driving history, and current coverage</li>
              <li>Household details such as number of drivers or vehicles, relevant to accurate quote matching</li>
              <li>Any additional information you choose to include when contacting us</li>
            </ul>
            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>IP address, browser type, device type, and operating system</li>
              <li>Pages viewed, referring URLs, links clicked, and time spent on the Site</li>
              <li>Approximate location derived from IP address or ZIP code entry</li>
              <li>Information collected via cookies, pixels, and similar technologies (see Section 5)</li>
            </ul>
            <h3>2.3 Information From Other Sources</h3>
            <p>
              We may receive additional information about you from our advertising partners, data providers, or Partners in order to verify submissions, prevent fraud, and improve quote matching accuracy.
            </p>

            <h2 id="how-we-use">3. How We Use Your Information</h2>
            <ul>
              <li>To match you with relevant auto insurance quotes and Partners</li>
              <li>To operate, maintain, and improve the Site and our services</li>
              <li>To communicate with you about your request, including by phone, text, or email</li>
              <li>To personalize content and measure the effectiveness of our marketing</li>
              <li>To detect, investigate, and prevent fraudulent or unauthorized activity</li>
              <li>To comply with applicable laws, regulations, and industry standards</li>
            </ul>

            <h2 id="sharing">4. How We Share Information</h2>
            <p>
              We are a marketing and lead-generation service, not an insurance carrier. To provide you with quotes, we share the information you submit with one or more licensed insurance carriers, agents, brokers, or marketing partners who may contact you directly regarding your request. We may also share information with:
            </p>
            <ul>
              <li>Service providers who perform functions on our behalf (e.g., hosting, analytics, fraud prevention)</li>
              <li>Advertising and analytics partners to measure and improve campaign performance</li>
              <li>Professional advisors such as legal or compliance consultants</li>
              <li>Government authorities or other parties when required by law, subpoena, or legal process</li>
              <li>A successor entity in the event of a merger, acquisition, or sale of assets</li>
            </ul>
            <p>
              We do not sell your Social Security number, and we do not knowingly share sensitive personal information beyond what is necessary to provide quote-matching services.
            </p>

            <h2 id="cookies">5. Cookies &amp; Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar technologies to recognize your browser, remember preferences, understand Site usage, and support advertising. You can control cookies through your browser settings; disabling cookies may limit some Site functionality. We and our partners may also use these technologies to deliver interest-based advertising on other websites.
            </p>

            <h2 id="tcpa">6. Consent to Contact (TCPA)</h2>
            <p>
              By submitting your phone number through our forms, you expressly consent to receive calls and text messages — including calls made using automatic telephone dialing systems, artificial or prerecorded voice messages, and SMS — from Auto Benefit Center and/or our Partners at the number provided, even if that number is on a state or federal Do Not Call registry. Consent is not a condition of purchasing any product or service. Message and data rates may apply. You may revoke consent at any time by contacting us using the details in Section 13 or by following opt-out instructions provided in a message.
            </p>

            <h2 id="choices">7. Your Choices &amp; Rights</h2>
            <ul>
              <li><strong>Opt-out of marketing:</strong> Follow unsubscribe instructions in emails or texts, or contact us directly.</li>
              <li><strong>Access &amp; correction:</strong> You may request a copy of the personal information we hold about you or ask us to correct inaccuracies.</li>
              <li><strong>Deletion:</strong> You may request that we delete personal information, subject to legal exceptions.</li>
              <li><strong>Do Not Sell/Share:</strong> Residents of certain states may opt out of the "sale" or "sharing" of personal information for cross-context behavioral advertising.</li>
            </ul>
            <p>
              To exercise any of these rights, please reach out using the contact details in Section 13. We will respond within the timeframe required by applicable law.
            </p>

            <h2 id="security">8. Data Security</h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction, including encryption in transit (TLS/SSL). No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 id="retention">9. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements, after which it is securely deleted or anonymized.
            </p>

            <h2 id="children">10. Children's Privacy</h2>
            <p>
              The Site is intended for individuals who are at least 18 years old. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it promptly.
            </p>

            <h2 id="state-rights">11. State Privacy Rights (CCPA/CPRA &amp; Others)</h2>
            <p>
              Depending on your state of residence (including California, Colorado, Connecticut, Virginia, and others with comprehensive privacy laws), you may have additional rights regarding your personal information, including the right to know, delete, correct, and opt out of certain processing. We do not discriminate against users who exercise their privacy rights. To make a request, contact us using the information in Section 13; we may need to verify your identity before processing your request.
            </p>

            <h2 id="changes">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The "Last Updated" date at the top of this page indicates when this Policy was last revised. Continued use of the Site after changes take effect constitutes acceptance of the revised Policy.
            </p>

            <h2 id="contact-us">13. Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
            <p>
              <strong>Auto Benefit Center</strong><br />
              Email: <span id="privacyEmail">support@autoplancenter.com</span><br />
              Phone: <span id="privacyPhone">+1 844-780-1683</span><br />
              Address: <span id="privacyAddress">1201 N Market St, Suite 111, Wilmington, DE 19801</span>
            </p>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
