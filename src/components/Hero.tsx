"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INSTITUTIONAL_INDICATORS } from "@/lib/constants";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden gradient-hero-bg"
    >
      {/* Background SVG World Map Vector Pattern (low opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M150,150 Q200,100 250,150 T350,150" strokeDasharray="4 4" />
          <path d="M400,200 Q550,100 700,250 T850,200" strokeDasharray="6 6" />
          <path d="M200,300 Q450,400 750,300" strokeDasharray="5 5" />
          {/* Subtle nodes representing global connectivity */}
          <circle cx="200" cy="150" r="4" fill="#2E7D32" />
          <circle cx="350" cy="150" r="4" fill="#53B93F" />
          <circle cx="550" cy="180" r="4" fill="#1E6AA8" />
          <circle cx="750" cy="300" r="4" fill="#2E7D32" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bgGreen border border-primary-light/60 text-primary-darker text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Federação Nacional de Relações Internacionais</span>
            </div>

            {/* Main H1 Title */}
            <h1
              id="hero-title"
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-textMain leading-[1.2] mb-6"
            >
              Conectando e Representando os Estudantes de{" "}
              <span className="bg-gradient-to-r from-primary-dark via-primary-darker to-secondary bg-clip-text text-transparent">
                Relações Internacionais
              </span>{" "}
              do Brasil.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-normal">
              A FENERI é a entidade máxima de representação acadêmica e profissional da categoria. Articulamos mais de 150 Centros Acadêmicos, promovendo o protagonismo internacional, a excelência diplomática e o futuro da geopolítica brasileira.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <Button
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 group shadow-md"
                onClick={() => {
                  const el = document.getElementById("sobre");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Conheça a FENERI</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2"
                onClick={() => {
                  const el = document.getElementById("projetos");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Nossos Projetos</span>
              </Button>
            </div>

            {/* Quick Indicators Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80 w-full">
              {INSTITUTIONAL_INDICATORS.map((ind) => (
                <div key={ind.id} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-primary-dark">
                    {ind.prefix}
                    {ind.value}
                    {ind.suffix}
                  </span>
                  <span className="text-xs font-medium text-gray-600">
                    {ind.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual / Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-light via-secondary/20 to-primary-dark/20 blur-xl opacity-60"></div>

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                    alt="Estudantes de Relações Internacionais reunidos em conferência diplomática"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Overlay Tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card text-textMain shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-dark text-white">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">
                          Rede Nacional Integrada
                        </p>
                        <p className="text-xs text-gray-600">
                          Presença em todas as universidades de RI do país.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-xl border border-gray-100 text-xs font-semibold text-primary-darker">
                <Shield className="w-5 h-5 text-primary-dark" />
                <span>Entidade Oficial Reconhecida</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
