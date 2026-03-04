import React from 'react';
import { motion } from 'framer-motion';
import { Heart, PartyPopper, Utensils, Camera, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t.serviceMarriage,
      description: t.serviceMarriageDesc,
      image: "/services/marriage.png",
      color: "from-pink-500/20 to-rose-500/20",
      accent: "bg-pink-500"
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: t.serviceBirthday,
      description: t.serviceBirthdayDesc,
      image: "/services/birthday.png",
      color: "from-purple-500/20 to-indigo-500/20",
      accent: "bg-purple-500"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: t.serviceCatering,
      description: t.serviceCateringDesc,
      image: "/services/catering.png",
      color: "from-orange-500/20 to-amber-500/20",
      accent: "bg-orange-500"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: t.servicePhoto,
      description: t.servicePhotoDesc,
      image: "/services/photography.png",
      color: "from-teal-500/20 to-cyan-500/20",
      accent: "bg-teal-500"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#faf9f6] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-premium-gold/10 text-premium-gold text-xs font-bold tracking-[0.3em] uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 bg-premium-gold rounded-full animate-pulse" />
              {t.ourExpertise}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-premium-dark"
            >
              Tailored <br />
              <span className="text-gradient italic font-medium">{t.exquisiteServices}</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm font-sans font-light border-l-2 border-premium-gold/30 pl-8 mb-4"
          >
            Crafting legendary celebrations across Erode and Tirupur with precision and passion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-premium-dark/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
                <div className="flex items-center gap-6 mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className={`w-16 h-16 rounded-[1.2rem] ${service.accent} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-white/70 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2">
                  {service.description}
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-fit bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200 hover:bg-white hover:text-premium-dark"
                >
                  {t.bookNow} <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
