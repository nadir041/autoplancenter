import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import PartnersPage from './pages/PartnersPage';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import { ToastProvider } from './components/Toast';

function AppContent() {
  const location = useLocation();
  const isInternal = location.pathname !== '/';

  return (
    <>
      <ProgressBar />
      <Header isContactPage={isInternal} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/terms-and-conditions.html" element={<TermsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <AppContent />
      </Router>
    </ToastProvider>
  );
}
