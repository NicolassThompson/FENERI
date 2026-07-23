"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export const ParceriasSection: React.FC = () => {
  return (
    <section
      id="parcerias"
      aria-labelledby="parcerias-title"
      className="py-20 md:py-24 bg-white relative border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Relações Multilaterais
          </span>
          <h2
            id="parcerias-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Parcerias & Cooperação Institucional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Trabalhamos em conjunto com órgãos do Estado, entidades acadêmicas e organismos internacionais para ampliar as oportunidades da comunidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          {PARTNERS.map((partner, idx) => (
            <motion.a
              key={partner.id}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group p-6 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-bgGreen/40 hover:border-primary-light transition-all duration-200 flex flex-col items-center justify-center text-center h-40 shadow-xs hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker"
              aria-label={`Visitar site do parceiro ${partner.name}`}
            >
              <div className="relative w-full h-16 mb-3">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-xs font-semibold text-gray-800 group-hover:text-primary-darker transition-colors line-clamp-2">
                {partner.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
