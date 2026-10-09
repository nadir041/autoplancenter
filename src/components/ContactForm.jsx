import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from './Toast';

const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxkxfB4EKb1nAeEystZE0c8xxd48LzHcxiVJhCCPmGVRaaImtG6ikGS_2Q6VmRYGfgD1g/exec';

export default function ContactForm() {
  const showToast = useToast();
  const formLoadTime = useRef(Date.now());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    zip: '',
    email: '',
    consent: false,
    website: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const formatPhone = (val) => {
    const d = val.replace(/\D/g, '').slice(0, 10);
    let out = d;
    if (d.length > 6) out = `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    else if (d.length > 3) out = `(${d.slice(0, 3)}) ${d.slice(3)}`;
    else if (d.length > 0) out = `(${d}`;
    return out;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleZipChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 5);
    setFormData((prev) => ({ ...prev, zip: digits }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot defense 1: honeypot
    if (formData.website.trim() !== '') {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        zip: '',
        email: '',
        consent: false,
        website: '',
      });
      return;
    }

    // Bot defense 2: submitted implausibly fast
    if (Date.now() - formLoadTime.current < 3000) {
      showToast('Please take a moment to review your details, then submit.');
      return;
    }

    const zip = formData.zip.trim();
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (!/^\d{5}$/.test(zip)) {
      showToast('Please enter a valid 5-digit ZIP code.');
      return;
    }

    if (phoneDigits.length !== 10) {
      showToast('Please enter a valid 10-digit phone number.');
      return;
    }

    setSubmitting(true);

    const payload = {
      source: 'AutoBenefitCenter',
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      zip: zip,
      consent: formData.consent ? 'Yes' : 'No',
      trustedFormCert: '',
      trustedFormToken: '',
      trustedFormPingUrl: '',
      leadiD: '',
      userAgent: navigator.userAgent,
    };

    try {
      await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      showToast('Thanks! A licensed agent will reach out shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        zip: '',
        email: '',
        consent: false,
        website: '',
      });
    } catch {
      showToast('Thanks! A licensed agent will reach out shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        zip: '',
        email: '',
        consent: false,
        website: '',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <input id="leadid_token" name="universal_leadid" type="hidden" value="" />
      <input type="hidden" name="xxTrustedFormCertUrl" value="" />
      <input type="hidden" name="xxTrustedFormPingUrl" value="" />

      <div className="field-row">
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Jane"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          inputMode="numeric"
          maxLength={14}
          placeholder="(555) 555-5555"
          required
          value={formData.phone}
          onChange={handlePhoneChange}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="zip2">ZIP Code</label>
          <input
            type="text"
            id="zip2"
            name="zip"
            inputMode="numeric"
            maxLength={5}
            pattern="\d{5}"
            placeholder="e.g. 90210"
            required
            value={formData.zip}
            onChange={handleZipChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <label className="consent-field">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        <span>
          By checking this box, you represent that you are 18+ years of age and agree to the <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>. By selecting the checkbox, you provide your express written consent for a licensed sales agent associated with primeinsurancehub.com and its marketing partners to contact you at the number you provided, even if it is listed on the National Do Not Call Registry. You agree to receive telephonic sales and marketing calls and text messages using an automated system for dialing or selecting telephone numbers, AI-generated voice calls, prerecorded messages, or emails regarding products or services of Auto Insurance. Calls and messages are for marketing purposes, and cellular charges may apply.
        </span>
      </label>

      <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Get My Free Quote'}
      </button>

      {/* <p
        className="form-disclaimer"
        style={{
          marginTop: '14px',
          fontSize: '11px',
          lineHeight: '1.55',
          color: '#6b7280',
        }}
      >
        This is a solicitation for insurance. By submitting this form you authorize AutoBenefitCenter
        and its licensed agent and insurance partners to contact you as described above. AutoBenefitCenter
        is a private entity and is not affiliated with or endorsed by any government agency. Submitting
        this request is not a guarantee of coverage.
      </p> */}
    </form>
  );
}
