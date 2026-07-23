"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Globe, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { VALUES_CARDS } from "@/lib/constants";

export const ValoresSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-8 h-8 text-primary-dark" />;
      case "Globe":
        return <Globe className="w-8 h-8 text-primary-dark" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-primary-dark" />;
      default:
        return <Compass className="w-8 h-8 text-primary-dark" />;
    }
  };

  return (
    <section
      id="misvisval"
      aria-labelledby="misvisval-title"
      className="py-20 md:py-28 bg-bgGreen/60 relative border-t border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Nossa Identidade
          </span>
          <h2
            id="misvisval-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Missão, Visão e Valores
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Princípios fundamentais que orientam as decisões da FENERI na construção de uma comunidade acadêmica diplomática forte e integrada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-white border border-primary-light/50 hover:border-primary-dark shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-bgGreen flex items-center justify-center mb-4 border border-primary-light/60">
                    {getIcon(card.iconName)}
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
