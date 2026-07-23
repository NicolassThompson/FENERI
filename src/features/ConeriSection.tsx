"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileCheck2, Vote, Calendar, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export const ConeriSection: React.FC = () => {
  const funcoesConeri = [
    "Propor modificações no Estatuto Social da FENERI;",
    "Convocar reuniões próprias e assembleias extraordinárias;",
    "Fazer cumprir o Estatuto e implementá-lo com os demais órgãos;",
    "Coordenar e avaliar a atuação e as atividades dos órgãos executivos;",
    "Receber, avaliar e dar parecer sobre questões de ordem financeira;",
    "Homologar o planejamento de gestão da Secretaria Geral.",
  ];

  return (
    <section
      id="coneri"
      aria-labelledby="coneri-title"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
              Governança Estudantil
            </span>
            <h2
              id="coneri-title"
              className="font-heading text-3xl sm:text-4xl font-bold text-textMain leading-tight mb-6"
            >
              Conselho Nacional de Estudantes de RI (CONERI)
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              O <strong className="text-primary-darker font-semibold">CONERI</strong> é o órgão de representação dos estudantes dentro da FENERI, com função predominantemente deliberativa, consultiva e fiscalizadora.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              É o espaço democrático onde o estudante de Relações Internacionais aponta sua opinião, fomenta o debate e colabora diretamente com as pautas da Federação. Reúne-se 3 vezes ao ano, respeitando o rodízio de regiões (Norte, Sul, Nordeste, Sudeste e Centro-Oeste).
            </p>

            <h3 className="font-heading font-bold text-xl text-textMain mb-4 flex items-center gap-2">
              <Vote className="w-5 h-5 text-primary-dark" />
              <span>Competências Oficiais do CONERI:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {funcoesConeri.map((func, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-bgGreen/50 border border-primary-light/40 text-sm text-gray-800"
                >
                  <FileCheck2 className="w-4 h-4 text-primary-dark shrink-0 mt-0.5" />
                  <span>{func}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5"
          >
            <Card className="bg-gradient-to-br from-primary-darker to-primary-dark text-white border-none shadow-2xl p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Voz e Voto no Movimento Estudantil
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-sm text-white/90 leading-relaxed">
                <p>
                  Nas reuniões do CONERI, qualquer estudante de Relações Internacionais, organização legítima ou Membro Consultivo tem direito a voz.
                </p>

                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-light shrink-0" />
                    <span><strong>3 Reuniões Anuais:</strong> 1 no ENERI + 2 no rodízio de regiões.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary-light shrink-0" />
                    <span><strong>CERIs Filiados:</strong> Formado pelos Centros e Diretórios Acadêmicos de RI.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
