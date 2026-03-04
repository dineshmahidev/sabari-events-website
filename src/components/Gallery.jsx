import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Wedding', span: 'md:col-span-2' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', category: 'Birthday', span: '' },
  { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800', category: 'Corporate', span: 'md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', category: 'Party', span: '' },
  { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', category: 'Stage', span: 'md:col-span-2' },
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-32 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-premium-gold/10 text-premium-gold text-xs font-bold tracking-[0.3em] uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 bg-premium-gold rounded-full animate-pulse" />
              Creative Portfolios
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-premium-dark"
            >
              Visual <br />
              <span className="text-gradient italic font-medium">{t.portfolioTitle}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm font-sans font-light border-l-2 border-premium-gold/30 pl-8 mb-4"
          >
            A cinematic glimpse into our signature events across the Erode and Tirupur districts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 1 ? 'md:col-span-2' : 
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.category}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                <p className="text-white/60 text-xs uppercase tracking-[0.4em] mb-4 font-sans translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{img.category}</p>
                <div className="h-px w-12 bg-premium-gold mb-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                <h4 className="text-white text-3xl font-serif font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                  Luxury {img.category} Setup
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium px-16 h-20 text-xl font-bold rounded-2xl"
          >
            {t.bookNow}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
