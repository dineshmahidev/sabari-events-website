import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Groom",
    content: "Sabari Events transformed our wedding hall into a dream palace. Super decoration!",
    stars: 5,
    initials: "AK"
  },
  {
    name: "Priya S.",
    role: "Mother",
    content: "The birthday party was magical. Food and service were top-notch.",
    stars: 5,
    initials: "PS"
  },
  {
    name: "Rajesh V.",
    role: "Corporate Manager",
    content: "Professional and creative. They managed our gala with absolute perfection.",
    stars: 5,
    initials: "RV"
  }
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-premium-gold/10 text-premium-gold text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 bg-premium-gold rounded-full animate-pulse" />
            Voice of Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-premium-dark mb-6"
          >
            Client <span className="text-gradient italic font-medium">{t.testiTitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-2xl font-sans font-light italic"
          >
            "The magic of Sabari Events told through the hearts of those we served."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card !p-12 relative group"
            >
              <Quote className="absolute top-10 right-10 w-20 h-20 text-premium-gold/5 transition-colors group-hover:text-premium-gold/10" />
              <div className="flex gap-1 mb-8">
                {[...Array(testi.stars)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-premium-gold text-premium-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic leading-[1.6] text-premium-dark/80 mb-12 font-sans font-light">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-6 pt-8 border-t border-premium-gold/10">
                <Avatar className="w-16 h-16 border border-premium-gold/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <AvatarFallback className="bg-premium-gold/10 text-premium-gold font-bold text-xl">{testi.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-serif font-bold text-premium-dark text-2xl leading-tight">{testi.name}</h4>
                  <p className="text-xs text-premium-gold font-bold uppercase tracking-[0.2em]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
