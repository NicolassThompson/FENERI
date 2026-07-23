"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/lib/constants";

export const EventosSection: React.FC = () => {
  return (
    <section
      id="eventos"
      aria-labelledby="eventos-title"
      className="py-20 md:py-28 bg-bgGreen/40 relative border-t border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
            Agenda Acadêmica & Diplomática
          </span>
          <h2
            id="eventos-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
          >
            Próximos Eventos Institucionais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Participe dos maiores congressos, fóruns de debate e treinamentos diplomáticos do país.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col md:flex-row bg-white border border-gray-200 hover:border-primary-dark shadow-sm hover:shadow-lg overflow-hidden group">
                <div className="relative w-full md:w-5/12 h-56 md:h-auto min-h-[220px]">
                  <Image
                    src={evt.imageUrl}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-primary-dark text-white px-3 py-1.5 rounded-md text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Oficial</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary-dark mb-2">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{evt.date}</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs font-medium text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 shrink-0 text-secondary mt-0.5" />
                      <span>{evt.location}</span>
                    </div>

                    <CardTitle className="text-xl mb-3 group-hover:text-primary-dark transition-colors">
                      {evt.title}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-700 leading-relaxed mb-4">
                      {evt.description}
                    </CardDescription>
                  </div>

                  <CardFooter className="p-0">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>{evt.ctaText}</span>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
