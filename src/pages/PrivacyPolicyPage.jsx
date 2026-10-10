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
            <p className="legal-updated">
              Effective Date: October 10, 2026<br />
              Last Updated: October 10, 2026
            </p>

            <div className="legal-toc">
              <h4>On this page</h4>
              <ol>
                <li><a href="#info-we-collect">Information We Collect</a></li>
                <li><a href="#how-we-use">How We Use Your Information</a></li>
                <li><a href="#sharing">How We Share Your Information</a></li>
                <li><a href="#security">Data Security</a></li>
                <li><a href="#choices">Your Privacy Rights and Choices</a></li>
                <li><a href="#cookies">Cookies and Tracking Technologies</a></li>
                <li><a href="#children">Children's Privacy</a></li>
                <li><a href="#third-party">Third-Party Websites and Services</a></li>
                <li><a href="#changes">Policy Updates</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
              </ol>
            </div>

            <p>
              At AutoPlanCenter, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit AutoPlanCenter.com, request an auto insurance quote, or use our website services. We are committed to handling personal information responsibly and complying with applicable privacy and data protection laws.
            </p>
            <p>
              Please review this policy carefully to understand how your information is handled and what choices may be available to you.
            </p>

            <h2 id="info-we-collect">1. Information We Collect</h2>
            <p>We may collect the following categories of information, depending on how you use our website and services:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address, mailing address, ZIP code, date of birth, and other identifying details you voluntarily provide.</li>
              <li><strong>Auto Insurance Information:</strong> Vehicle make, model, year, mileage, vehicle identification number (VIN), driving history, coverage preferences, and other information relevant to insurance quotes.</li>
              <li><strong>Additional Information:</strong> Information about your insurance needs, current coverage, or other details you submit through our forms.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, referral sources, and browsing activity collected through cookies or similar technologies.</li>
            </ul>
            <p>
              We collect information that is reasonably necessary to respond to your requests, improve our website, and facilitate connections with insurance professionals or providers where applicable.
            </p>

            <h2 id="how-we-use">2. How We Use Your Information</h2>
            <p>We may use the information we collect to:</p>
            <ul>
              <li>Help you explore auto insurance coverage options and request quotes.</li>
              <li>Connect you with insurance agents, agencies, carriers, or other relevant providers where applicable.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Communicate with you about your requests, insurance options, or related services.</li>
              <li>Improve our website, services, functionality, and user experience.</li>
              <li>Analyze website traffic, maintain security, and prevent fraud or misuse.</li>
              <li>Comply with applicable legal, regulatory, and contractual obligations.</li>
            </ul>
            <p>
              Where required by law, we will obtain appropriate consent before using personal information for specific marketing or tracking purposes.
            </p>

            <h2 id="sharing">3. How We Share Your Information</h2>
            <p>We may share your information with the following categories of recipients when appropriate for the purposes described in this policy:</p>
            <ul>
              <li><strong>Insurance Carriers and Providers:</strong> To help provide quotes, assess eligibility, or facilitate insurance-related services.</li>
              <li><strong>Licensed Insurance Agents and Agencies:</strong> To respond to your inquiry and help you explore available coverage options.</li>
              <li><strong>Third-Party Service Providers:</strong> Companies that provide website hosting, analytics, communications, security, and other operational services.</li>
              <li><strong>Marketing Partners:</strong> Where permitted by law and supported by any required consent, we may share information with relevant partners to facilitate your insurance inquiry or related communications.</li>
              <li><strong>Legal and Regulatory Authorities:</strong> When disclosure is required by law, legal process, or necessary to protect our rights and prevent fraud.</li>
            </ul>
            <p>
              We do not sell personal information for money. Certain disclosures or data-sharing activities may be treated as a sale or sharing under specific state privacy laws. Where applicable, we will provide the required disclosures and opt-out mechanisms.
            </p>

            <h2 id="security">4. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational safeguards intended to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p>
              These measures may include secure hosting, access controls, and encryption where appropriate. However, no electronic transmission or storage system can be guaranteed to be completely secure.
            </p>
            <p>
              We encourage you to exercise caution when sharing personal information online. If you believe your information has been compromised in connection with our services, please contact us using the details provided below.
            </p>

            <h2 id="choices">5. Your Privacy Rights and Choices</h2>
            <p>Depending on your state of residence and applicable law, you may have the right to:</p>
            <ul>
              <li>Request access to personal information we hold about you.</li>
              <li>Request correction of inaccurate personal information.</li>
              <li>Request deletion of personal information, subject to applicable exceptions.</li>
              <li>Opt out of certain targeted advertising, sale, or sharing of personal information where applicable.</li>
              <li>Withdraw consent for certain processing activities where consent is the legal basis.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request to be placed on our internal Do Not Call list for telemarketing calls.</li>
            </ul>
            <p>
              To stop receiving promotional emails, follow the unsubscribe instructions provided in the message. For text messages, you may reply STOP where supported.
            </p>
            <p>
              To submit a privacy request, contact us using the contact information listed below. We may need to verify your identity before processing certain requests.
            </p>

            <h2 id="cookies">6. Cookies and Tracking Technologies</h2>
            <p>
              AutoPlanCenter.com may use cookies, analytics tools, pixels, and similar technologies to support website functionality, understand visitor behavior, measure performance, and improve our services.
            </p>
            <p>
              You can manage cookies through your browser settings. Disabling certain cookies may affect the functionality of some website features.
            </p>
            <p>
              Where required by applicable law, we will provide appropriate notice and obtain consent for non-essential cookies or tracking technologies. You may also have the right to opt out of certain targeted advertising or data-sharing activities.
            </p>

            <h2 id="children">7. Children's Privacy</h2>
            <p>
              Our website and services are intended for adults seeking auto insurance information. We do not knowingly collect personal information from children under 13 without legally required authorization. If we learn that such information has been collected improperly, we will take reasonable steps to delete it as required by applicable law.
            </p>

            <h2 id="third-party">8. Third-Party Websites and Services</h2>
            <p>
              Our website may contain links to external websites, insurance providers, or other third-party services. These third parties maintain their own privacy policies and practices.
            </p>
            <p>
              AutoPlanCenter does not control the privacy practices of websites that we do not operate. We encourage you to review their policies before providing personal information.
            </p>

            <h2 id="changes">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our services, data-handling practices, or applicable laws.
            </p>
            <p>
              Any updates will be posted on this page with a revised “Last Updated” date. Your continued use of the website after changes are posted will be subject to the updated policy to the extent permitted by applicable law.
            </p>

            <h2 id="contact-us">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or wish to submit a privacy-related request, please contact us:</p>
            <p>
              <strong>Company:</strong> AutoPlanCenter<br />
              <strong>Website:</strong> <a href="https://autoplancenter.com">https://autoplancenter.com</a><br />
              <strong>Email:</strong> <a href="mailto:support@autoplancenter.com">support@autoplancenter.com</a><br />
              <strong>Phone:</strong> <a href="tel:+18447801683">+1 844-780-1683</a>
            </p>
            <p>
              We will review privacy inquiries and respond in accordance with applicable legal requirements.
            </p>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
