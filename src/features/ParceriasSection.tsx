"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Briefcase, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PARTNERS } from "@/lib/constants";

export const ParceriasSection: React.FC = () => {
  const parceirosDetalhados = [
    {
      id: "vocacao-diplomata",
      nome: "Vocação Diplomata",
      tag: "Preparatório CACD",
      icon: GraduationCap,
      desc: "Potencializa a diversidade étnica, regional e de gênero dos futuros diplomatas do Brasil. Plataforma digital com cursos sobre as disciplinas cobradas no concurso do Instituto Rio Branco.",
      beneficio: "Desconto exclusivo para estudantes portadores da Carteirinha FENERI.",
      url: "https://www.vocacaodiplomata.com.br",
    },
    {
      id: "whats-rel",
      nome: "What's Rel?",
      tag: "Carreiras & Vagas em RI",
      icon: Briefcase,
      desc: "Plataforma de orientação profissional especializada em Relações Internacionais. Auxilia graduandos e graduados a divulgarem suas habilidades e encontrarem oportunidades no mercado global.",
      beneficio: "Desconto exclusivo nos serviços e consultorias do What's Rel?!",
      url: "https://whatsrel.com.br",
    },
    {
      id: "mission-abroad",
      nome: "Mission Abroad",
      tag: "Oportunidades Globais",
      icon: Globe,
      desc: "Organização com sede em Montreal (Canadá) focada no desenvolvimento acadêmico e profissional internacional através de missões acadêmicas, workshops práticos e viagens de estudo.",
      beneficio: "Desconto especial em programas e treinamentos da Mission Abroad.",
      url: "https://missionabroad.org",
    },
  ];

  return (
    <section
      id="parcerias"
      aria-labelledby="parcerias-title"
      className="py-20 md:py-28 bg-white relative border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Cooperação & Benefícios Exclusivos
          </span>
          <h2
            id="parcerias-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Parceiros Oficiais da FENERI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Parcerias estratégicas com plataformas de ensino, consultorias de carreira e organizações internacionais para alavancar a trajetória dos estudantes de Relações Internacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {parceirosDetalhados.map((parceiro, idx) => {
            const Icon = parceiro.icon;
            return (
              <motion.div
                key={parceiro.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-surface border border-gray-200/90 hover:border-primary-dark shadow-sm hover:shadow-lg p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-bgGreen flex items-center justify-center text-primary-dark border border-primary-light/50">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="primary">{parceiro.tag}</Badge>
                    </div>

                    <CardTitle className="text-xl group-hover:text-primary-dark transition-colors mb-3">
                      {parceiro.nome}
                    </CardTitle>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {parceiro.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="bg-bgGreen/60 p-3 rounded-md text-xs font-semibold text-primary-darker mb-4">
                      {parceiro.beneficio}
                    </div>
                    <a
                      href={parceiro.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-primary-darker transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker"
                    >
                      <span>Conhecer o Parceiro</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
