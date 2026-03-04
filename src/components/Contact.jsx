import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Label } from "./ui/Label";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccess(true);
    setLoading(false);
    e.target.reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-80 md:w-[40rem] h-80 md:h-[40rem] bg-premium-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 md:w-[40rem] h-80 md:h-[40rem] bg-premium-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          <div className="flex flex-col justify-center">
            <h2 className="text-premium-gold font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase mb-6 opacity-70">{t.contactTitle}</h2>
            <h3 className="text-5xl md:text-8xl font-serif font-bold text-premium-dark mb-12 leading-[1.1]">Let's Create <span className="text-premium-gold italic">Magic</span></h3>
            
            <div className="space-y-10 md:space-y-16 mb-16">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-premium-gold/10 rounded-3xl flex items-center justify-center group-hover:bg-premium-gold group-hover:text-white transition-all shadow-xl">
                  <Phone className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-premium-gold/60 uppercase tracking-[0.3em] font-bold mb-2">{t.callUs}</p>
                  <p className="text-2xl md:text-5xl font-bold text-premium-dark tracking-tight">{t.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-premium-gold/10 rounded-3xl flex items-center justify-center group-hover:bg-premium-gold group-hover:text-white transition-all shadow-xl">
                  <Mail className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-premium-gold/60 uppercase tracking-[0.3em] font-bold mb-2">{t.emailUs}</p>
                  <p className="text-lg md:text-3xl font-bold text-premium-dark break-all tracking-tight">{t.emailAddress}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-premium-gold/10 rounded-3xl flex items-center justify-center group-hover:bg-premium-gold group-hover:text-white transition-all shadow-xl">
                  <MapPin className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-premium-gold/60 uppercase tracking-[0.3em] font-bold mb-2">{t.visitUs}</p>
                  <p className="text-lg md:text-3xl font-bold text-premium-dark leading-relaxed italic">{t.address}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white border border-premium-gold/10 flex items-center justify-center text-premium-gold/60 hover:bg-premium-gold hover:text-white transition-all shadow-sm">
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] text-premium-dark shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-premium-gold/5 relative overflow-hidden">
            <h4 className="text-3xl md:text-6xl font-serif font-bold text-premium-gold mb-12 leading-tight">{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-4">
                  <Label htmlFor="name" className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-premium-gold/70">{t.formName}</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Enter your name"
                    className="bg-gray-50 border-none rounded-2xl md:rounded-3xl h-14 md:h-20 text-lg px-8 focus:ring-2 focus:ring-premium-gold font-bold" 
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="phone" className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-premium-gold/70">{t.formPhone}</Label>
                  <Input 
                    id="phone" 
                    required 
                    placeholder="Mobile number"
                    className="bg-gray-50 border-none rounded-2xl md:rounded-3xl h-14 md:h-20 text-lg px-8 focus:ring-2 focus:ring-premium-gold font-bold" 
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="email" className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-premium-gold/70">{t.formEmail}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="Email address"
                  className="bg-gray-50 border-none rounded-2xl md:rounded-3xl h-14 md:h-20 text-lg px-8 focus:ring-2 focus:ring-premium-gold font-bold" 
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="message" className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-premium-gold/70">{t.formDetails}</Label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder={t.formPlaceholder} 
                  className="bg-gray-50 border-none rounded-2xl md:rounded-[2.5rem] min-h-[180px] md:min-h-[250px] text-lg px-8 py-6 focus:ring-2 focus:ring-premium-gold font-bold" 
                />
              </div>

              <Button 
                disabled={loading} 
                type="submit" 
                className="w-full bg-premium-gold text-white rounded-full py-8 md:py-16 text-xl sm:text-2xl md:text-4xl font-black hover:brightness-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 overflow-hidden border-none"
              >
                {loading ? "..." : (success ? "Sent!" : t.submitBtn)} <Send className="w-6 h-6 md:w-10 md:h-10 shrink-0" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
