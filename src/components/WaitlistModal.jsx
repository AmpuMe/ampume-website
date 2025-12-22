import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send data to backend
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-8 md:p-12 max-w-lg w-full relative shadow-2xl"
        >
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-4">You're on the list!</h3>
              <p className="text-gray-500 mb-8">We'll let you know as soon as we launch.</p>
              <button 
                onClick={onClose}
                className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-medium mb-2">Join the Waitlist</h3>
              <p className="text-gray-500 mb-8 font-light">
                Be the first to know when we launch our full platform.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">First Name</label>
                    <input required type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Last Name</label>
                    <input required type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="jane@example.com" />
                </div>

                <button type="submit" className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors mt-4">
                  Join Waitlist
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistModal;
