import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const partners = [
  'National Senior Benefit Advisors',
  'Elite Agency',
  'YourWayMedicare',
  'Unlimited Investors Group',
  'Tranzact',
  'Thomas Art',
  'Spring Venture Group',
  'SelectQuote',
  'Px',
  'Plan B Group',
  'One Digital',
  'Morgan Fidelity',
  'Kauffman Insurance Group',
  'iHealth Plans',
  'GetMeHealthcare',
  'Family First Insurance',
  'Exact Benefits Group',
  'Enhance',
  'EHealth',
  'Datalot',
  'Connect One Health',
  'ClearMatch Medicare',
  'Clearlink',
  'Carida Insurance',
  'Assurance IQ Medicare',
  'Amerilife',
  'HLG Solutions',
  'GoHealth',
  'HealthMarkets',
  'Integrity Marketing Group',
  'Ritter Insurance Marketing',
  'Senior Market Sales',
  'eTelequote',
  'TrueCoverage',
  'Boomer Benefits',
  'Chapter Medicare',
  'HealthPlanOne',
  'QuoteWizard',
  'EverQuote',
  'MediaAlpha',
  'SmartFinancial',
  'QuinStreet',
  'Insurify',
  'NextGen Leads',
  'Mutual of Omaha',
  'All Web Leads',
  'Benepath',
  'VelaPoint',
  'American Senior Benefits',
  'Senior Life Insurance Company',
  'Policygenius',
  'eFinancial',
  'Ethos',
  'Quility',
  'Symmetry Financial Group',
  'Agent Pipeline',
  'Physicians Mutual',
  'Convey Health Solutions',
  'HealthSherpa',
  'HealthCare.com',
  'USHealth Group',
  'Pivot Health',
  'Choice Mutual',
  'Lincoln Heritage Life Insurance',
  'Globe Life',
  'Fluent',
  'Answer Financial',
  'Bankers Life',
  'American-Amicable',
  'Colonial Penn Life Insurance',
];

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section className="legal-hero">
          <div className="container">
            <h1>Partners</h1>
            <p>The agents, agencies, and marketing partners we may share your information with.</p>
          </div>
        </section>

        <section className="legal-body partners-body">
          <div className="container">
            <p>
              By submitting your information on AutoPlanCenter.com and providing your consent, you may be contacted by one or more of the following partners regarding your inquiry.
            </p>

            <ul className="partners-list">
              {partners.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer isContactPage={true} />
    </>
  );
}
