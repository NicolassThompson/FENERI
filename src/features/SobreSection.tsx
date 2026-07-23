"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const SobreSection: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="relative h-[360px] sm:h-[440px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop"
                  alt="Estudantes de Relações Internacionais reunidos em assembleia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Overlapping Glass Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 max-w-xs p-5 rounded-xl glass-card border border-primary-light shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-dark text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-heading font-bold text-2xl text-primary-darker">
                    Entidade Nacional
                  </span>
                  <p className="text-xs text-gray-700 font-medium">
                    Representação unificada dos graduandos em RI do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2">
              Quem Somos
            </span>
            <h2
              id="sobre-title"
              className="font-heading text-3xl sm:text-4xl font-bold text-textMain leading-tight mb-6"
            >
              Sobre a FENERI
            </h2>

            <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed mb-4">
              A Federação Nacional de Estudantes de Relações Internacionais do Brasil (FENERI) é a entidade geral de representação das e dos estudantes de graduação de Relações Internacionais em todo o Brasil.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Atuamos articulando os Centros e Diretórios Acadêmicos (CERIs) de todo o país, promovendo o debate acadêmico, organizando o Encontro Nacional (ENERI), coordenando o Conselho Nacional (CONERI) e facilitando a inserção dos estudantes no mercado diplomático e internacional.
            </p>

            <ul className="space-y-3 mb-8 w-full">
              {[
                "Entidade máxima legítima de representação do movimento estudantil de RI.",
                "Realização do Encontro Nacional dos Estudantes de RI (ENERI).",
                "Coordenação do Conselho Nacional dos Estudantes de RI (CONERI).",
                "Emissão da Carteirinha Nacional do Estudante Internacionalista (CNIE).",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="md"
              className="flex items-center gap-2 shadow-sm"
              onClick={() => {
                const el = document.getElementById("coneri");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FileText className="w-4 h-4" />
              <span>Conhecer o CONERI e Estatuto Social</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
