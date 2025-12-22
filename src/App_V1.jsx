import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from './assets/hero-image.jpeg';
import marketplaceImage from './assets/marketplace-image.jpeg';
import founderImage from './assets/founder-image.png';
import peopleImage from './assets/people.jpeg';
import familyImage from './assets/family.jpeg';
import friendsImage from './assets/friends.jpeg';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Store,
  GraduationCap,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  Play,
  Heart,
  User,
  Users,
  Quote,
  Star,
  Search,
  Calendar,
  MessageSquare
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} 
    className={className}
  >
    {children}
  </motion.div>
);

const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const baseStyle = "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-stone-800 hover:scale-[1.02] shadow-lg hover:shadow-xl",
    secondary: "bg-white border border-stone-200 text-brand-dark hover:border-brand-dark hover:bg-stone-50",
    accent: "bg-brand-accent text-brand-dark hover:bg-[#DNCBA0]"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const MarketplaceWidget = () => (
  <div className="bg-white rounded-3xl p-5 shadow-xl border border-stone-100 w-full max-w-sm mx-auto transform transition-all hover:scale-[1.02]">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-stone-50 text-stone-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
        Featured
      </div>
      <div className="flex items-center gap-1 text-yellow-400">
        <Star size={14} fill="currentColor" />
        <span className="text-stone-700 font-bold text-xs">4.9</span>
      </div>
    </div>
    
    <div className="aspect-[4/3] bg-stone-100 rounded-2xl mb-5 relative overflow-hidden group">
       <img 
         src={marketplaceImage} 
         alt="Prosthetic Liner" 
         className="w-full h-full object-contain mix-blend-multiply opacity-90 p-8"
       />
       <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
       <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md text-brand-dark transition-colors cursor-default">
         <Heart size={16} />
       </div>
    </div>
    
    <div className="space-y-3">
      <div>
        <h4 className="font-serif font-bold text-xl text-brand-dark leading-tight">Silicone Comfort Liner</h4>
        <p className="text-xs text-stone-500">By Amputee Essentials • Verified by 128 users</p>
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <span className="text-lg font-bold text-brand-dark">$85.00</span>
        <div className="bg-brand-dark text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm cursor-default">
          Add to Cart
        </div>
      </div>
    </div>
  </div>
);

const ResourcesWidget = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-100 w-full max-w-sm mx-auto">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h4 className="font-serif font-bold text-lg text-brand-dark">My Recovery</h4>
        <p className="text-xs text-stone-500">Daily Progress</p>
      </div>
      <div className="w-10 h-10 rounded-full border-4 border-brand-sage flex items-center justify-center text-[10px] font-bold text-brand-dark">
        75%
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-100 flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={16} />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-sm text-brand-dark">Desensitization</h5>
          <p className="text-[10px] text-stone-500">Completed today</p>
        </div>
      </div>

      <div className="p-3 rounded-2xl bg-white border-2 border-brand-sage/20 flex items-center gap-4 shadow-sm">
         <div className="w-8 h-8 rounded-full border-2 border-brand-sage text-brand-sage flex items-center justify-center flex-shrink-0">
          <Play size={14} fill="currentColor" />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-sm text-brand-dark">Mirror Therapy</h5>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-1.5">
            <div className="bg-brand-sage w-1/3 h-full rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-100 flex items-center gap-4 opacity-60">
        <div className="w-8 h-8 rounded-full border-2 border-stone-300 text-stone-300 flex items-center justify-center flex-shrink-0">
          <Calendar size={14} />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-sm text-stone-400">Gait Training</h5>
          <p className="text-[10px] text-stone-400">Scheduled for tomorrow</p>
        </div>
      </div>
    </div>
  </div>
);

const TelehealthWidget = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-100 w-full max-w-sm mx-auto">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-16 h-16 bg-stone-200 rounded-2xl overflow-hidden shadow-md">
         <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="flex items-center gap-1 text-yellow-400 mb-1">
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
        </div>
        <h4 className="font-serif font-bold text-lg text-brand-dark leading-none mb-1">Dr. Emily Chen</h4>
        <p className="text-xs text-stone-500">Certified Prosthetist • 12 Yrs Exp</p>
      </div>
    </div>

    <div className="mb-6">
      <h5 className="text-xs font-bold uppercase tracking-wide text-stone-400 mb-3">Available Times</h5>
      <div className="grid grid-cols-3 gap-2">
        <div className="py-2 bg-stone-50 border border-stone-200 rounded-lg text-center text-xs font-medium text-stone-400 line-through">9:00 AM</div>
        <div className="py-2 bg-brand-dark text-white rounded-lg text-center text-xs font-bold shadow-md transform scale-105">10:30 AM</div>
        <div className="py-2 bg-stone-50 border border-stone-200 rounded-lg text-center text-xs font-medium text-stone-600 transition-colors">2:00 PM</div>
      </div>
    </div>

    <div className="w-full py-3 bg-brand-accent text-brand-dark rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-default">
      <Calendar size={16} /> Book Appointment
    </div>
  </div>
);

const AIWidget = () => (
  <div className="bg-white rounded-3xl shadow-xl border border-stone-100 w-full max-w-sm mx-auto overflow-hidden flex flex-col h-[320px]">
    <div className="bg-stone-50 p-4 border-b border-stone-100 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white">
        <Sparkles size={14} />
      </div>
      <div>
        <h4 className="font-bold text-sm text-brand-dark">AmpuMe Assistant</h4>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] text-stone-500">Online</span>
        </div>
      </div>
    </div>
    
    <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
      <div className="flex items-start gap-2">
        <div className="bg-stone-100 rounded-2xl rounded-tl-none p-3 text-xs text-stone-600 max-w-[85%] leading-relaxed">
          Is it normal to feel phantom sensation at night? It keeps waking me up.
        </div>
      </div>
      
      <div className="flex items-start gap-2 justify-end">
        <div className="bg-brand-dark text-white rounded-2xl rounded-br-none p-3 text-xs max-w-[90%] leading-relaxed shadow-sm">
          Yes, night-time phantom sensation is very common. Many people find that using a shrinker sock or gentle massage before bed can help. Would you like to see some guided massage techniques?
        </div>
        <div className="w-6 h-6 rounded-full bg-brand-dark flex-shrink-0 flex items-center justify-center text-white mt-auto">
          <Sparkles size={10} />
        </div>
      </div>

       <div className="flex items-start gap-2">
        <div className="bg-stone-100 rounded-2xl rounded-tl-none p-3 flex gap-1 items-center">
           <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"></span>
           <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-100"></span>
           <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-200"></span>
        </div>
      </div>
    </div>

    <div className="p-3 border-t border-stone-100 bg-stone-50">
       <div className="bg-white border border-stone-200 rounded-full px-4 py-2 text-xs text-stone-400 flex justify-between items-center">
         <span>Type a message...</span>
         <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center">
           <ArrowRight size={12} className="text-stone-500" />
         </div>
       </div>
    </div>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Education', href: '#education' },
    { name: 'Telehealth', href: '#telehealth' },
    { name: 'AI Support', href: '#ai-support' },
  ];

  const pillars = [
    {
      title: "Marketplace",
      headline: "Products that make daily life easier",
      description: "Essentials like liners, sleeves, and skincare in one place. No more hunting across multiple stores. Curated products that actually work, verified by the community.",
      icon: <Store size={28} />,
      color: "bg-[#F0EBE0]",
      widget: <MarketplaceWidget />
    },
    {
      title: "Resources",
      headline: "Information you can actually use",
      description: "Recovery timelines, product comparisons, and guides. A searchable library of real info, written in plain language—not medical jargon.",
      icon: <GraduationCap size={28} />,
      color: "bg-[#E0E6DE]", // sage tint
      widget: <ResourcesWidget />
    },
    {
      title: "Telehealth",
      headline: "Providers who specialize in limb loss",
      description: "Book prosthetists, physiatrists, and therapists who specialize in limb loss. See availability and backgrounds before you connect.",
      icon: <Stethoscope size={28} />,
      color: "bg-[#EAE0E0]", // clay tint
      widget: <TelehealthWidget />
    },
    {
      title: "AI Support",
      headline: "A place to ask questions anytime",
      description: "Ask questions at 2am or prep for appointments. Our AI is trained on limb loss care to help you anytime without overstepping.",
      icon: <Sparkles size={28} />,
      color: "bg-[#E6D5B8]", // accent tint
      widget: <AIWidget />
    }
  ];

  const whoIsThisFor = [
    {
      icon: <User size={28} />,
      image: peopleImage,
      title: "For people with limb loss",
      description: "Whether you're preparing for surgery, early in recovery, or years into living with a prosthetic, this platform is designed around what you actually need day to day. We're building it with input from people who've been through it.",
      color: "bg-[#F5F2EA]" // Lighter warm beige
    },
    {
      icon: <Heart size={28} />,
      image: familyImage,
      title: "For family members",
      description: "When someone you love is going through this, it's hard to know how to help. We want to give you a place to learn what they're dealing with, understand the terminology, and find ways to actually be useful.",
      color: "bg-[#F2E8E8]" // Lighter soft pink
    },
    {
      icon: <Users size={28} />,
      image: friendsImage,
      title: "For friends who want to support",
      description: "It can feel awkward to ask questions when you don't know what's appropriate. This gives you a starting point to learn and understand, so you can show up for someone without making them explain everything.",
      color: "bg-[#E8EDE8]" // Lighter soft sage
    }
  ];

  return (
    <div className="min-h-screen bg-brand-base text-brand-dark font-sans selection:bg-brand-sage selection:text-brand-dark overflow-x-hidden">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
          scrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-stone-100 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-semibold tracking-tight z-50">
            AmpuMe<span className="text-brand-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="bg-white/50 backdrop-blur-sm border border-stone-100 rounded-full px-2 py-1.5 flex items-center gap-1 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-stone-600 hover:bg-white hover:text-brand-dark hover:shadow-sm transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="primary" className="!py-3 !px-6 text-sm" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
              Join Waitlist
            </Button>
          </div>

          <button 
            className="lg:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-stone-100 p-6 lg:hidden shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium p-2 hover:bg-stone-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full" onClick={() => {
                   setMobileMenuOpen(false);
                   document.getElementById('waitlist')?.scrollIntoView();
                }}>
                  Join Waitlist
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Soft Diffused Gradients */}
        <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-[#F9E7C7] rounded-full blur-[120px] opacity-30 -z-10 pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#F9E7C7] rounded-full blur-[120px] opacity-25 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[900px] h-[900px] bg-[#D0D9CD] rounded-full blur-[150px] opacity-20 -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase text-stone-500">Launching Fall 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 tracking-tight leading-[1.1] md:leading-[1]">
                <span className="block font-medium text-brand-dark">The all-in-one platform</span>
                <span className="block font-light italic text-stone-400 mt-2">for life after limb loss</span>
          </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                We're building a single place to find products, resources, providers, and support for people with limb loss and the people who care about them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-none hover:shadow-lg">
                  Join the Waitlist
                  <ArrowRight size={18} />
                </Button>
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-stone-400">Be first to know when we launch.</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative max-w-7xl mx-auto">
             <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-dark/5">
                <img 
                  src={heroImage}
                  alt="Confident person with visible prosthetic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Float Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-xs hidden sm:block border border-white/40"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-brand-sage flex items-center justify-center text-brand-dark">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Verified Expert</p>
                      <p className="text-xs text-stone-500">Dr. Sarah Chen, PT</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-snug">"AmpuMe is the resource I've wished my patients had for years."</p>
                </motion.div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* The Gap (Emotional Valley) */}
      <section className="py-20 md:py-24 px-6">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
           <FadeIn>
             <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
               <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-8 bg-brand-accent"></span>
                  <p className="text-xs font-bold tracking-widest uppercase text-stone-400">Why we're building this</p>
                  <span className="h-px w-8 bg-brand-accent"></span>
               </div>
               <h2 className="text-4xl md:text-6xl font-serif text-brand-dark leading-[1.1]">
                 We think there should be one place that brings it all together.
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start max-w-5xl mx-auto text-lg leading-relaxed text-stone-600 font-light text-justify md:text-left">
                <div>
                  <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-brand-dark first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                    If you've navigated limb loss, you know how fragmented everything is. Products are scattered across outdated websites. Useful information is buried in forum threads or locked behind medical jargon. Finding a provider who actually specializes in this takes hours of research and cold calls.
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                   <p>
                      Meanwhile, your family and friends want to help but aren't sure where to start or what to ask. We're changing that by creating a single source of truth.
                   </p>
                   <div className="pl-6 border-l-2 border-brand-accent">
                      <p className="text-xl font-serif text-brand-dark italic">
                        "Built by people who understand what you're actually dealing with."
                      </p>
                   </div>
                </div>
             </div>
           </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section id="marketplace" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-serif mb-6">The Platform</h2>
             <p className="text-lg text-stone-600 max-w-2xl mx-auto">Everything you need, organized in one place.</p>
          </FadeIn>

          <div className="space-y-8 mb-16 max-w-5xl mx-auto">
            {pillars.map((pillar, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="group">
                <div className={`${pillar.color} p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 hover:shadow-xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden border border-white/50`}>
                  
                  {/* Text Content */}
                  <div className={`flex-1 flex flex-col text-center md:text-left ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-dark mx-auto md:mx-0">
                      {pillar.icon}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-4">{pillar.title}</h3>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-stone-500 mb-4 leading-snug">{pillar.headline}</h4>
                    <p className="text-stone-600 leading-relaxed text-lg font-medium opacity-80 mb-8">
                      {pillar.description}
                    </p>
                    
                    <div>
                      <button className="px-8 py-4 bg-white rounded-full text-sm font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors shadow-sm flex items-center gap-2 mx-auto md:mx-0">
                        Learn More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Widget Visualization */}
                  <div className={`flex-1 w-full flex items-center justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative w-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                      {pillar.widget}
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center">
             <a href="#waitlist" className="inline-flex items-center text-lg font-medium text-brand-dark hover:text-stone-600 transition-colors border-b border-brand-dark pb-0.5 hover:border-stone-600">
               Interested? Join the waitlist and we'll let you know when it's ready. <ArrowRight size={18} className="ml-2" />
             </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-stone-50">
        <div className="py-24 px-6 bg-white rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="container mx-auto px-6 md:px-12">
             <FadeIn className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-serif mb-6">Who This Is For</h2>
             </FadeIn>
             
             <div className="grid md:grid-cols-3 gap-8">
               {whoIsThisFor.map((item, idx) => (
                 <FadeIn key={idx} delay={idx * 0.2} className="group h-full">
                    <div className="h-full p-6 md:p-8 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:border-brand-accent/50 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                      <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed text-sm mb-4">
                        {item.description}
                      </p>
                    </div>
                 </FadeIn>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-24 px-6 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[100px] -z-10 opacity-40"></div>
         
         <div className="container mx-auto max-w-5xl">
            <FadeIn className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-xl shadow-stone-200/50">
               <div className="relative">
                 <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-stone-200 rounded-full overflow-hidden border-[6px] border-white shadow-2xl relative z-10">
                    <img src={founderImage} alt="Alex Meyers" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-sage rounded-full flex items-center justify-center text-white border-4 border-white z-20">
                   <Quote size={16} fill="currentColor" />
                 </div>
               </div>
               
               <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Who's behind this</h2>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    I'm Alex Meyers, and I've worked in prosthetics for over a decade. I've seen firsthand how hard it is for people to find what they need, and how often the resources that do exist are outdated or hard to navigate.
                  </p>
                  <p className="text-brand-dark leading-relaxed font-medium mb-8 text-lg">
                    This platform is my attempt to build what I think should already exist. If you have thoughts, questions, or want to get involved, I'd genuinely love to hear from you.
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="h-px w-12 bg-stone-300"></div>
                    <p className="text-xs font-bold tracking-widest uppercase text-stone-400">Alex Meyers, Founder</p>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* Final CTA / Waitlist & Footer Wrapper */}
      <div className="bg-brand-dark text-white rounded-t-[3rem] md:rounded-t-[5rem] relative z-10 overflow-hidden">
        {/* Dark Mode Gradients - Extended to cover footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Final CTA / Waitlist */}
        <section id="waitlist" className="py-32 px-6 relative">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
             <FadeIn>
               <h2 className="text-4xl md:text-6xl font-serif mb-6">We'd love to have you with us from the start</h2>
               <p className="text-lg text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                 Join the waitlist and we'll send you one email when the platform is ready to use. Early members will get founding member access and input on what we build.
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md mb-8 shadow-2xl">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 bg-transparent border-none text-white px-6 py-3 focus:ring-0 placeholder:text-stone-500 focus:outline-none"
                  />
                  <button className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-sage transition-colors whitespace-nowrap shadow-lg">
                    Join the Waitlist
                  </button>
               </form>
               
               <div className="flex items-center justify-center gap-2 mb-8 opacity-60 hover:opacity-100 transition-opacity">
                 <input type="checkbox" id="provider" className="rounded border-stone-600 bg-transparent text-brand-sage focus:ring-brand-sage" />
                 <label htmlFor="provider" className="text-sm text-stone-400 cursor-pointer select-none">I'm a healthcare provider interested in partnering</label>
               </div>
               
               <p className="text-xs text-stone-500 uppercase tracking-widest">We won't spam you or share your email with anyone.</p>
             </FadeIn>
          </div>
        </section>
        
        {/* Simple Footer */}
        <footer className="text-stone-500 py-12 border-t border-white/5 px-6 relative">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
             <p>&copy; 2025 AmpuMe. All rights reserved.</p>
             <div className="flex gap-6">
               <a href="#" className="hover:text-white transition-colors">hello@ampume.com</a>
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
             </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default App;
