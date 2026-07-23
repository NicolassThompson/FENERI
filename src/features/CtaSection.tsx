"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="cta-final"
      aria-labelledby="cta-title"
      className="py-20 md:py-28 bg-gradient-to-br from-primary-darker via-primary-dark to-secondary text-white relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 block">
            Junte-se à Nossa Rede
          </span>
          <h2
            id="cta-title"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6"
          >
            Faça Parte do Futuro das Relações Internacionais no Brasil
          </h2>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
            Seja filiando seu Centro Acadêmico, participando do ENERI ou publicando na Revista FENERI: seu protagonismo começa aqui.
          </p>

          {/* Institutional Contact / Newsletter Card */}
          <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-4 text-white">
                <CheckCircle className="w-12 h-12 text-primary-light" />
                <h3 className="font-heading text-xl font-bold">
                  Inscrição Recebida com Sucesso!
                </h3>
                <p className="text-sm text-gray-200">
                  Em breve você receberá nossos boletins institucionais e notícias de eventos no seu e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-white text-left">
                  Receba o Boletim Oficial FENERI em primeira mão:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Seu e-mail institucional ou pessoal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-textMain text-base"
                    aria-label="Digite seu e-mail para receber notícias da FENERI"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="sm:w-auto shrink-0 bg-primary hover:bg-primary-dark font-bold text-white shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Inscrever-se</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-[11px] text-gray-300 text-left">
                  Respeitamos sua privacidade. Seus dados não serão compartilhados com terceiros.
                </span>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
