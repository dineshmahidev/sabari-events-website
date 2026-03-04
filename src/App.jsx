import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import LanguageSelectionModal from './components/LanguageSelectionModal';
import { useLanguage } from './context/LanguageContext';
import { Apple, Star, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const { t } = useLanguage();

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-premium-dark">
      <LanguageSelectionModal />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Section - Ported from current App.jsx */}
        <section className="py-24 bg-premium-cream/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-premium-gold mb-6 group-hover:scale-110 transition-transform">
                  <Star fill="currentColor" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{t.feature1Title}</h3>
                <p className="text-gray-500">{t.feature1Desc}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-premium-gold mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{t.feature2Title}</h3>
                <p className="text-gray-500">{t.feature2Desc}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-premium-gold mb-6 group-hover:scale-110 transition-transform">
                  <Heart fill="currentColor" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{t.feature3Title}</h3>
                <p className="text-gray-500">{t.feature3Desc}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
