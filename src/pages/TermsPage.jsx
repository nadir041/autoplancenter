import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section className="legal-hero">
          <div className="container">
            <h1>Terms &amp; Conditions</h1>
            <p>The rules and terms that govern your use of our Site.</p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <p className="legal-updated">Last Updated: July 9, 2026</p>

            <div className="legal-toc">
              <h4>On this page</h4>
              <ol>
                <li><a href="#acceptance">Acceptance of Terms</a></li>
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#description">Description of Service</a></li>
                <li><a href="#not-carrier">Not an Insurance Carrier</a></li>
                <li><a href="#no-guarantee">No Guarantee of Coverage or Rates</a></li>
                <li><a href="#user-conduct">User Conduct &amp; Accurate Information</a></li>
                <li><a href="#consent-contact">Consent to Be Contacted</a></li>
                <li><a href="#ip">Intellectual Property</a></li>
                <li><a href="#third-party">Third-Party Links &amp; Partners</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <li><a href="#liability">Limitation of Liability</a></li>
                <li><a href="#indemnification">Indemnification</a></li>
                <li><a href="#arbitration">Dispute Resolution &amp; Arbitration</a></li>
                <li><a href="#termination">Termination</a></li>
                <li><a href="#governing-law">Governing Law</a></li>
                <li><a href="#changes-terms">Changes to These Terms</a></li>
                <li><a href="#contact-terms">Contact Us</a></li>
              </ol>
            </div>

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              These Terms &amp; Conditions ("Terms") form a binding agreement between you and Auto Benefit Center ("Auto Benefit Center," "we," "us," or "our") governing your access to and use of autoplancenter.com and any related services (collectively, the "Site"). By accessing or using the Site, requesting a quote, or submitting any form, you agree to be bound by these Terms and our <Link to="/privacy-policy">Privacy Policy</Link>, which is incorporated by reference. If you do not agree, do not use the Site.
            </p>

            <h2 id="eligibility">2. Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of forming a legally binding contract to use the Site. By using the Site, you represent and warrant that you meet these requirements and that all information you submit is accurate and truthful.
            </p>

            <h2 id="description">3. Description of Service</h2>
            <p>
              Auto Benefit Center operates an online platform that allows users to submit information in order to be matched with and contacted by third-party licensed insurance carriers, agents, and brokers ("Partners") regarding auto insurance products. The Site is a lead-generation and marketing tool; it does not process claims, bind coverage, or act as an insurer, agent, or broker of record unless expressly stated otherwise.
            </p>

            <h2 id="not-carrier">4. Not an Insurance Carrier</h2>
            <p>
              Auto Benefit Center is <strong>not</strong> an insurance company and does not underwrite, issue, or administer insurance policies. Any insurance policy you ultimately purchase is issued and administered solely by the applicable Partner, subject to that Partner's own terms, conditions, underwriting criteria, and state licensing. Auto Benefit Center is not a party to, and bears no responsibility for, any insurance contract between you and a Partner.
            </p>

            <h2 id="no-guarantee">5. No Guarantee of Coverage, Rates, or Savings</h2>
            <p>
              We make reasonable efforts to match users with relevant quote options, but we do not guarantee that you will receive a quote, be approved for coverage, qualify for any specific rate or discount, or realize any particular amount of savings. Sample savings, testimonials, and statistics referenced on the Site are illustrative and may not reflect typical results.
            </p>

            <h2 id="user-conduct">6. User Conduct &amp; Accurate Information</h2>
            <p>
              You agree to: (a) provide accurate, current, and complete information when using the Site; (b) not misrepresent your identity or vehicle/driving information; (c) not use the Site for any unlawful, fraudulent, or abusive purpose; and (d) not attempt to interfere with the security or proper functioning of the Site, including via bots, scraping, or unauthorized automated access.
            </p>

            <h2 id="consent-contact">7. Consent to Be Contacted</h2>
            <p>
              By submitting your contact information, you consent to be contacted by Auto Benefit Center and/or our Partners by phone, SMS/text, and email regarding your request, including through automated dialing systems and prerecorded messages, as described in our <Link to="/privacy-policy">Privacy Policy</Link>. Standard message and data rates may apply, and this consent is not a condition of any purchase.
            </p>

            <h2 id="ip">8. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, images, and software, is the property of Auto Benefit Center or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any Site content without our prior written consent.
            </p>

            <h2 id="third-party">9. Third-Party Links &amp; Partners</h2>
            <p>
              The Site may contain links to, or facilitate connections with, third-party websites and Partners that are not owned or controlled by Auto Benefit Center. We are not responsible for the content, privacy practices, or terms of any third-party sites or Partners. Your interactions with any Partner, including any insurance purchase, are solely between you and that Partner.
            </p>

            <h2 id="disclaimers">10. Disclaimers</h2>
            <p>
              THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY QUOTE, RATE, OR INFORMATION PROVIDED BY PARTNERS.
            </p>

            <h2 id="liability">11. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, AUTO BENEFIT CENTER AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR ANY PARTNER INTERACTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100).
            </p>

            <h2 id="indemnification">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Auto Benefit Center and its officers, employees, and affiliates from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the Site, your violation of these Terms, or your violation of any rights of a third party.
            </p>

            <h2 id="arbitration">13. Dispute Resolution &amp; Arbitration</h2>
            <p>
              Any dispute arising out of or relating to these Terms or the Site shall first be attempted to be resolved informally by contacting us. If a dispute cannot be resolved informally within 30 days, the parties agree that the dispute shall be resolved by binding individual arbitration, rather than in court, except that either party may bring an individual claim in small claims court. YOU AND AUTO BENEFIT CENTER EACH WAIVE ANY RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION.
            </p>

            <h2 id="termination">14. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users, us, or third parties.
            </p>

            <h2 id="governing-law">15. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Auto Benefit Center is organized, without regard to conflict-of-law principles.
            </p>

            <h2 id="changes-terms">16. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. The "Last Updated" date above reflects the most recent changes. Continued use of the Site after changes become effective constitutes your acceptance of the revised Terms.
            </p>

            <h2 id="contact-terms">17. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <p>
              <strong>Auto Benefit Center</strong><br />
              Email: <span id="termsEmail">support@autoplancenter.com</span><br />
              Phone: <span id="termsPhone">+1 844-780-1683</span><br />
              Address: <span id="termsAddress">1201 N Market St, Suite 111, Wilmington, DE 19801</span>
            </p>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
