"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, QrCode, ShieldCheck, HeartHandshake, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export const CarteirinhaSection: React.FC = () => {
  const repasseFinanceiro = [
    { valor: "R$ 20,00", desc: "Custos de produção do documento físico oficial", icon: CreditCard },
    { valor: "R$ 5,00", desc: "Destinado diretamente ao seu CA ou DA filiado à FENERI", icon: HeartHandshake },
    { valor: "R$ 4,00", desc: "Destinado ao financiamento das atividades da FENERI", icon: ShieldCheck },
    { valor: "R$ 1,00", desc: "Destinado a instituições ou projetos de ação social", icon: HeartHandshake },
  ];

  return (
    <section
      id="carteirinha"
      aria-labelledby="carteirinha-title"
      className="py-20 md:py-28 bg-gradient-to-br from-bgGreen via-white to-bgGreen/50 relative overflow-hidden border-t border-gray-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Documento Oficial do Internacionalista
          </span>
          <h2
            id="carteirinha-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Carteirinha Nacional do Estudante Internacionalista (CNIE)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Documentação oficial garantida pela Lei 12.933/2013 (Lei da Meia-Entrada), integrada à base de dados nacional com verificação QR Code e descontos de 10% a 80% em nossos parceiros.
          </p>
        </div>

        {/* Top Info Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5"
          >
            {/* Visual Representation of CNIE */}
            <div className="relative rounded-2xl bg-gradient-to-br from-primary-darker via-primary-dark to-secondary p-8 text-white shadow-2xl overflow-hidden border-2 border-white/20">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <QrCode className="w-48 h-48" />
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary-light" />
                  <span className="font-heading font-bold text-lg">FENERI CNIE</span>
                </div>
                <span className="text-xs font-bold uppercase bg-white/20 px-2.5 py-1 rounded-full">
                  Lei 12.933/2013
                </span>
              </div>
              <div className="mb-8">
                <span className="text-xs text-white/70 uppercase tracking-widest">
                  Estudante Internacionalista
                </span>
                <p className="font-heading text-2xl font-bold mt-1">
                  Documento Oficial de Identificação
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-white/20 pt-4">
                <div>
                  <span className="text-[10px] text-white/60 block uppercase">
                    Autenticidade Garantida
                  </span>
                  <span className="text-xs font-semibold text-primary-light">
                    QR Code + Base Nacional
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/70 block">Valor Fixo</span>
                  <span className="font-heading font-extrabold text-2xl text-white">
                    R$ 30,00
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="font-heading text-2xl font-bold text-textMain mb-4">
              Por que emitir a Carteirinha FENERI?
            </h3>
            <ul className="space-y-3 mb-6 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                <span><strong>Meia-Entrada em todo o Brasil:</strong> Válida até 31 de março do ano seguinte em cinemas, shows, teatros e eventos culturais.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                <span><strong>Descontos com Parceiros Exclusivos:</strong> Economia em cursos preparatórios da <em>Vocação Diplomata</em>, na plataforma de carreiras <em>What's Rel?</em> e nas tutorias da <em>Mission Abroad</em>.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                <span><strong>Apoio ao seu CA/DA:</strong> R$ 5,00 de cada carteirinha solicitada retornam diretamente para a gestão do Centro Acadêmico da sua faculdade.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                <span><strong>Sem encargo adicional de frete:</strong> Entregue diretamente com segurança por apenas R$ 30,00.</span>
              </li>
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="flex items-center gap-2 shadow-md"
              onClick={() => {
                const el = document.getElementById("faq");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Solicitar Minha Carteirinha</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Transparency Breakdown Grid */}
        <div className="mt-12">
          <h3 className="font-heading text-xl font-bold text-textMain text-center mb-8">
            Para onde vai o valor de R$ 30,00? Transparência Total:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repasseFinanceiro.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-white border border-gray-200/80 shadow-sm p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-bgGreen mx-auto flex items-center justify-center mb-4 text-primary-dark">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-primary-darker block mb-2">
                    {item.valor}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
