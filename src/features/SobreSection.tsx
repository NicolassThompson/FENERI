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
                  alt="Painel de discussões internacionais organizado pela FENERI"
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
                    +150 CAs/DAs
                  </span>
                  <p className="text-xs text-gray-700 font-medium">
                    Articulados em rede federal unificada.
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
              Institucional
            </span>
            <h2
              id="sobre-title"
              className="font-heading text-3xl sm:text-4xl font-bold text-textMain leading-tight mb-6"
            >
              Sobre a FENERI
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Fundada para ser o elo central entre os estudantes de Relações Internacionais e as instâncias decisórias do país, a FENERI representa a voz coletiva de mais de 30 mil estudantes e futuros diplomatas em todo o Brasil.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Promovemos o aprimoramento acadêmico, a democratização do acesso a oportunidades de carreira internacional e o fortalecimento do diálogo entre a universidade, os órgãos governamentais e a sociedade civil organizada.
            </p>

            <ul className="space-y-3 mb-8 w-full">
              {[
                "Representatividade estudantil unificada no Congresso e em órgãos internacionais.",
                "Organização anual do ENERI (maior encontro da América Latina).",
                "Estímulo à pesquisa científica, publicação de periódicos e extensão acadêmica.",
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
                window.open("https://feneri.wixsite.com/feneri", "_blank");
              }}
            >
              <FileText className="w-4 h-4" />
              <span>Baixar Estatuto Social (PDF)</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
