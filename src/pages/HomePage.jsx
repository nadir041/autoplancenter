import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Coverage from '../components/Coverage';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';
import CtaBanner from '../components/CtaBanner';
import SplitSection from '../components/SplitSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    // If navigating to an anchor like #coverage
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <Coverage />
        <WhyUs />
        <HowItWorks />
        <CtaBanner />
        <SplitSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
