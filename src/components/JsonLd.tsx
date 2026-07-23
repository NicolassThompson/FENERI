import React from "react";
import { FAQS } from "@/lib/constants";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FENERI — Federação Nacional dos Estudantes de Relações Internacionais do Brasil",
    url: "https://feneri.org.br",
    logo: "https://feneri.org.br/logo.png",
    sameAs: [
      "https://instagram.com/feneribrasil",
      "https://linkedin.com/company/feneri",
      "https://twitter.com/feneri_brasil",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    description:
      "Entidade máxima de representação dos estudantes e jovens profissionais de Relações Internacionais no Brasil.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
