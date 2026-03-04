import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelectionModal = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasChosen = localStorage.getItem('language');
    if (!hasChosen) {
      setIsOpen(true);
    }
  }, []);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-premium-dark/60 backdrop-blur-md"
              onClick={() => localStorage.getItem('language') && setIsOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12 text-center border-4 border-premium-gold/30"
            >
              
              <h2 className="text-3xl font-serif font-bold mb-4">
                Choose Your Language <br />
                <span className="text-premium-gold font-medium">மொழியை தேர்ந்தெடுக்கவும்</span>
              </h2>
              
              <p className="text-gray-500 mb-10">
                Please select your preferred language to continue.
              </p>

              <div className="grid gap-4">
                <button
                  onClick={() => selectLanguage('en')}
                  className="w-full py-5 rounded-2xl bg-premium-dark text-white font-bold text-lg hover:bg-premium-gold transition-all duration-300 shadow-xl group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Continue in English
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>→</motion.span>
                  </span>
                </button>
                
                <button
                  onClick={() => selectLanguage('ta')}
                  className="w-full py-5 rounded-2xl border-2 border-premium-dark text-premium-dark font-bold text-lg hover:bg-premium-dark hover:text-white transition-all duration-300 shadow-lg group"
                >
                  <span className="flex items-center justify-center gap-2">
                    தமிழில் தொடரவும்
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>→</motion.span>
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSelectionModal;
