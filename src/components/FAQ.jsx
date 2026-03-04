import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { useLanguage } from "../context/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-premium-gold font-bold tracking-[0.2em] md:tracking-widest text-[10px] md:text-sm uppercase mb-3">{t.faqTitle}</h2>
          <h3 className="text-3xl md:text-6xl font-serif font-bold text-premium-dark">{t.faqSub}</h3>
          <div className="w-16 md:w-24 h-1 bg-premium-gold mx-auto mt-4 rounded-full opacity-30" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {t.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl md:rounded-3xl px-4 md:px-8 bg-gray-50/50 hover:bg-white transition-colors">
              <AccordionTrigger className="text-lg md:text-2xl font-serif font-bold hover:no-underline text-premium-dark py-6 md:py-8 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl text-gray-500 leading-relaxed italic pb-6 md:pb-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
