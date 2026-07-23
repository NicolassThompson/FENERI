"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { INSTITUTIONAL_INDICATORS } from "@/lib/constants";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export const IndicadoresSection: React.FC = () => {
  return (
    <section
      id="indicadores"
      aria-labelledby="indicadores-title"
      className="py-20 md:py-24 bg-gradient-to-br from-primary-darker via-primary-dark to-primary-dark text-white relative overflow-hidden"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-2 block">
            Impacto e Abrangência Nacional
          </span>
          <h2
            id="indicadores-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-white"
          >
            Indicadores Institucionais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-light/90">
            A força da nossa representatividade expressa em números de alcance e presença em todo o Brasil.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-live="polite"
        >
          {INSTITUTIONAL_INDICATORS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center shadow-lg hover:bg-white/15 transition-colors"
            >
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3">
                {item.prefix}
                <AnimatedCounter value={item.value} />
                {item.suffix}
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary-light mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
