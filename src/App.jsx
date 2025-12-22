import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AISupport from './pages/AISupport';
import ChatWidget from './components/ChatWidget';

// Lazy load secondary pages for better performance
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const AccessibilityStatement = lazy(() => import('./pages/AccessibilityStatement'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();
  const showChatWidget = location.pathname !== '/ai-support';

  return (
    <>
      <ScrollToTop />
      {showChatWidget && <ChatWidget />}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-support" element={<AISupport />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;