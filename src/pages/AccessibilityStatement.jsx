import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pt-32">
      <SEO title="Accessibility Statement" url="https://ampume-landing-v3.vercel.app/accessibility-statement" />
      <SimpleNavbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
        <p className="mb-4 text-gray-500">Last Updated: December 2025</p>
        <div className="prose max-w-none">
            <p className="mb-4">AmpuMe is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Measures to support accessibility</h2>
            <p className="mb-4">AmpuMe takes the following measures to ensure accessibility of the AmpuMe website:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Include accessibility as part of our mission statement.</li>
                <li>Integrate accessibility into our procurement practices.</li>
                <li>Employ formal accessibility quality assurance methods.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conformance status</h2>
            <p className="mb-4">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. AmpuMe is partially conformant with WCAG 2.1 level AA.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
            <p className="mb-4">We welcome your feedback on the accessibility of AmpuMe. Please let us know if you encounter accessibility barriers on AmpuMe:</p>
            <p className="mb-4">E-mail: support@ampume.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
