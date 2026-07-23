"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export const ProjetosSection: React.FC = () => {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="py-20 md:py-28 bg-white relative border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2 block">
              Iniciativas Nacionais
            </span>
            <h2
              id="projetos-title"
              className="font-heading text-3xl sm:text-4xl font-bold text-textMain"
            >
              Nossos Projetos Estratégicos
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Programas acadêmicos, publicações científicas e fóruns de desenvolvimento profissional concebidos para impulsionar a comunidade de Relações Internacionais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between group hover:border-primary-dark shadow-sm hover:shadow-lg">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary" className="shadow-md bg-white/90 backdrop-blur-md">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <CardTitle className="group-hover:text-primary-dark transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 mt-3 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>

                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2 group-hover:bg-primary-dark group-hover:text-white group-hover:border-primary-dark transition-colors"
                  >
                    <span>{project.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
