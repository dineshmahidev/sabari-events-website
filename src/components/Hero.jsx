import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/Button';

const Hero = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPricing = () => {
    window.open('/catalog.html', '_blank');
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-20 bg-premium-dark">
      {/* Dynamic Luxury Background */}
      <div 
        className="absolute inset-0 z-0 scale-110 opacity-60"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img 
          src="/hero-bg.png" 
          alt="Luxury Wedding Setup" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-transparent to-[#0d0d0d]" />
        <div className="absolute inset-0 bg-[#0d0d0d]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Luxury Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 glass-card !p-3 !px-6 rounded-full border border-white/10 mb-8 md:mb-12 shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="w-2.5 h-2.5 bg-premium-gold rounded-full animate-glow" />
          <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] font-sans">Premier Event Architects</span>
        </motion.div>

        {/* Grand Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif font-black mb-8 md:mb-10 text-white leading-[0.8] tracking-tighter"
        >
          {t.heroTitle} <br />
          <span className="text-gradient italic font-medium drop-shadow-[0_10px_30px_rgba(197,160,89,0.3)]">
            {t.heroTitleSpecial}
          </span>
        </motion.h1>
        
        {/* Cinematic Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-3xl mb-12 md:mb-16 text-white/80 max-w-4xl mx-auto font-sans font-extralight leading-relaxed tracking-wide italic px-4"
        >
          {t.heroTagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 px-4"
        >
          <Button 
            size="lg" 
            className="btn-premium w-full sm:w-auto px-12 md:px-16 h-16 md:h-20 text-lg md:text-xl font-bold group"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.exploreServices} 
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Button>

          <Button 
            variant="outline"
            size="lg" 
            className="w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-premium-dark rounded-full px-12 md:px-16 h-16 md:h-20 text-lg md:text-xl font-bold transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 border"
            onClick={handleDownloadPricing}
          >
            <FileDown className="w-5 h-5 md:w-6 md:h-6" /> 
            {t.downloadPricing}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
