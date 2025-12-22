import React, { useEffect, useRef } from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AISupport = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Generate a truly unique ID for this specific mount instance
    const uniqueId = `customgpt_page_${Math.random().toString(36).substr(2, 9)}`;
    const container = containerRef.current;
    
    if (!container) return;
    
    // Assign the unique ID to the container
    container.id = uniqueId;
    container.innerHTML = ''; // Ensure clean slate

    const script = document.createElement('script');
    script.src = "https://cdn.customgpt.ai/js/embed.js";
    // Removed defer=true to prioritize loading since this is the main page content
    script.setAttribute('div_id', uniqueId);
    script.setAttribute('p_id', '88174');
    script.setAttribute('p_key', '753d22f90965230c7eac8e489e242b9b');
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script and clear container
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (container) {
        container.innerHTML = '';
        container.removeAttribute('id'); // Remove ID so zombie scripts can't find it
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <SEO 
        title="AI Support Assistant"
        description="Get immediate answers about amputation recovery, prosthetics, and daily life from our AI assistant."
        url="https://ampume-landing-v3.vercel.app/ai-support"
      />
      <SimpleNavbar />
      
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header & Context - Stacked on Top */}
          <div className="flex flex-col gap-8 text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9]">
              AI Support.
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Our advanced AI assistant is here to guide you through every step of your journey, providing instant, reliable answers to all your questions about recovery, prosthetics, and navigating daily life.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-black"></div>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Available 24/7
              </p>
            </div>
          </div>

          {/* Chat Interface - Raw Embed */}
          <div className="w-full">
               <div ref={containerRef}></div>
          </div>
        </div>
      </main>

      {/* Waitlist / CTA - Clean Minimalist Style */}
      <section id="waitlist" className="py-32 px-6 md:px-12 bg-gray-50 text-black border-t border-gray-100">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6">
             <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
              Join us from <br /> the start.
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-md leading-relaxed">
              We're building the future of limb loss care. Sign up for early access and updates.
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
            <form className="flex flex-col gap-6 bg-white p-8 md:p-12 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-left text-xl placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-left text-xl placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-left text-xl placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full md:w-auto">
                  Join Waitlist
                </button>
                 <p className="text-xs text-gray-400">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISupport;