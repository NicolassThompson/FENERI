"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/constants";

export const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 md:py-28 bg-white relative border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Dúvidas Recorrentes
          </span>
          <h2
            id="faq-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Esclareça suas dúvidas sobre a estrutura da FENERI, filiação de entidades estudantil e participação em eventos.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Accordion items={FAQS} />
        </motion.div>
      </div>
    </section>
  );
};
