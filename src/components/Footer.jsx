import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-premium-dark text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl shadow-premium-gold/10">
                <img src="/logo.png" alt="Sabari Events Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-3xl font-serif font-black tracking-tight">
                Sabari <span className="text-gradient italic">Events</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-10 text-lg font-sans font-extralight max-w-sm">
              Making every celebration legendary across Erode and Tirupur with timeless elegance and creative precision.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <motion.a 
                  key={idx} 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: '#c5a059', borderColor: '#c5a059' }}
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-premium-gold">{t.services}</h4>
            <ul className="flex flex-col gap-6 text-white/60 font-sans font-light">
              {[t.serviceMarriage, t.serviceBirthday, t.serviceCatering, t.servicePhoto].map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-premium-gold transition-colors hover:translate-x-2 inline-block duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-premium-gold">Quick Links</h4>
            <ul className="flex flex-col gap-6 text-white/60 font-sans font-light">
              <li><a href="#" className="hover:text-premium-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#gallery" className="hover:text-premium-gold transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-premium-gold transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-premium-gold">{t.contactTitle}</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-premium-gold shrink-0 border border-white/10 group-hover:bg-premium-gold group-hover:text-white transition-all duration-500">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 font-bold">{t.callUs}</p>
                  <p className="text-xl font-medium text-white/90">{t.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-premium-gold shrink-0 border border-white/10 group-hover:bg-premium-gold group-hover:text-white transition-all duration-500">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 font-bold">{t.emailUs}</p>
                  <p className="text-xl font-medium text-white/90 truncate max-w-[200px] md:max-w-none">{t.emailAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-premium-gold shrink-0 border border-white/10 group-hover:bg-premium-gold group-hover:text-white transition-all duration-500">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 font-bold">{t.visitUs}</p>
                  <p className="text-lg leading-relaxed text-white/80 font-sans font-light">{t.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 {t.copyright} Sabari Events Architecture</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-premium-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-premium-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
