import React, { useEffect } from 'react';
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
            <h1>Terms of Use</h1>
            <p>The rules and terms that govern your use of our website.</p>
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
                <li><a href="#services">Services Provided</a></li>
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#quotes">Quotes and Insurance Requests</a></li>
                <li><a href="#acceptable-use">Acceptable Use of the Website</a></li>
                <li><a href="#no-guarantee">No Guarantee of Coverage</a></li>
                <li><a href="#liability">Limitation of Liability</a></li>
                <li><a href="#ip">Intellectual Property</a></li>
                <li><a href="#third-party">Third-Party Links and Services</a></li>
                <li><a href="#indemnification">Indemnification</a></li>
                <li><a href="#governing-law">Governing Law</a></li>
                <li><a href="#changes-terms">Changes to These Terms</a></li>
                <li><a href="#contact-terms">Contact Us</a></li>
              </ol>
            </div>

            <p>
              Welcome to AutoPlanCenter.com. These Terms of Use (“Terms”) govern your access to and use of our website, tools, and services. By accessing or using our website, you agree to these Terms. Please read them carefully before requesting information, submitting a form, or using our services.
            </p>

            <h2 id="services">1. Services Provided</h2>
            <p>
              AutoPlanCenter provides an online platform where visitors can explore auto insurance information, request quotes, and connect with insurance professionals or providers where available.
            </p>
            <p>Our services may include:</p>
            <ul>
              <li>Information about auto insurance coverage options.</li>
              <li>Assistance connecting users with insurance agents, agencies, or carriers.</li>
              <li>Resources to help visitors understand auto insurance products and coverage considerations.</li>
              <li>Online forms through which visitors can request insurance-related information or quotes.</li>
            </ul>
            <p>
              Unless expressly stated otherwise, AutoPlanCenter does not underwrite or issue insurance policies. Insurance policies are issued by the applicable insurance carriers and are subject to their underwriting guidelines, terms, and conditions.
            </p>

            <h2 id="eligibility">2. Eligibility</h2>
            <p>By using our website or services, you confirm that:</p>
            <ul>
              <li>You are at least 18 years old.</li>
              <li>You are using the website for lawful purposes.</li>
              <li>The information you provide is accurate and complete to the best of your knowledge.</li>
              <li>You are authorized to submit any information you provide through our forms.</li>
            </ul>
            <p>
              You agree to update any information you submit if it becomes materially inaccurate and an update is necessary for your request.
            </p>

            <h2 id="quotes">3. Quotes and Insurance Requests</h2>
            <p>
              Information and quotes presented on AutoPlanCenter.com are for general informational purposes and may not represent a final insurance offer.
            </p>
            <p>
              Actual premiums, coverage availability, eligibility, deductibles, exclusions, and policy terms are determined by the applicable insurance provider based on its underwriting requirements and your individual circumstances.
            </p>
            <p>
              Submitting a quote request does not guarantee that you will receive a quote, qualify for insurance, or be issued a policy.
            </p>
            <p>
              Where you provide the required consent, AutoPlanCenter and the agents, agencies, or marketing partners identified in the applicable disclosure may contact you regarding your inquiry by telephone, email, or text message, including automated communications where permitted by law and covered by your consent.
            </p>
            <p>
              Consent to receive marketing communications is not a condition of purchasing insurance. All communications are subject to applicable federal and state laws, including relevant telephone marketing and privacy requirements.
            </p>

            <h2 id="acceptable-use">4. Acceptable Use of the Website</h2>
            <p>You agree to use AutoPlanCenter.com only for lawful purposes. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorized access to our website, systems, or data.</li>
              <li>Use our website to transmit fraudulent, misleading, harmful, or unlawful material.</li>
              <li>Interfere with the operation, security, or availability of the website.</li>
              <li>Use automated tools to collect website content without authorization.</li>
              <li>Copy, reproduce, distribute, or commercially exploit website content without permission, except where permitted by law.</li>
            </ul>
            <p>
              We reserve the right to restrict or suspend access where we reasonably believe these Terms have been violated or the website's security is at risk.
            </p>

            <h2 id="no-guarantee">5. No Guarantee of Coverage</h2>
            <p>
              AutoPlanCenter does not guarantee insurance approval, specific premiums, coverage amounts, savings, or availability.
            </p>
            <p>
              Any coverage decision is made by the applicable insurance carrier or authorized insurance provider. Before purchasing a policy, you should review the official policy documents, coverage limits, exclusions, deductibles, and other applicable terms.
            </p>

            <h2 id="liability">6. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, AutoPlanCenter shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website.
            </p>
            <p>
              We do not guarantee that the website will always be available, error-free, or free from security vulnerabilities. We are not responsible for insurance decisions made by third-party carriers or for their independent products, services, representations, or actions.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.
            </p>

            <h2 id="ip">7. Intellectual Property</h2>
            <p>
              All website content, including text, graphics, logos, images, layouts, and design elements, is owned by or licensed to AutoPlanCenter and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, modify, publish, distribute, or commercially use this content without prior written permission, except as permitted by law.
            </p>

            <h2 id="third-party">8. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party websites, insurance providers, or other external services. These links are provided for convenience and informational purposes.
            </p>
            <p>
              AutoPlanCenter does not control or assume responsibility for third-party content, security, privacy practices, or services. Your interactions with third parties are governed by their applicable terms and policies.
            </p>

            <h2 id="indemnification">9. Indemnification</h2>
            <p>
              To the extent permitted by applicable law, you agree to be responsible for claims, liabilities, losses, and reasonable expenses arising from your unlawful use of the website, your violation of these Terms, or your infringement of another party's rights.
            </p>
            <p>
              This provision does not apply to the extent a claim results from conduct for which you cannot legally be held responsible.
            </p>

            <h2 id="governing-law">10. Governing Law</h2>
            <p>
              These Terms are subject to applicable federal and state laws. Any governing-law provision or choice of jurisdiction will be determined by the laws applicable to AutoPlanCenter's actual business operations and the relevant dispute.
            </p>
            <p>
              Nothing in this section limits any rights that cannot legally be waived under applicable law.
            </p>

            <h2 id="changes-terms">11. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use periodically to reflect changes to our website, services, or legal obligations.
            </p>
            <p>
              Updates will be posted on this page with a revised “Last Updated” date. Your continued use of the website after changes are posted constitutes acceptance of the updated Terms to the extent permitted by law.
            </p>

            <h2 id="contact-terms">12. Contact Us</h2>
            <p>If you have questions about these Terms of Use, please contact us:</p>
            <p>
              <strong>Company:</strong> AutoPlanCenter<br />
              <strong>Website:</strong> <a href="https://autoplancenter.com">https://autoplancenter.com</a><br />
              <strong>Email:</strong> <a href="mailto:support@autoplancenter.com">support@autoplancenter.com</a><br />
              <strong>Phone:</strong> <a href="tel:+18447801683">+1 844-780-1683</a>
            </p>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
