import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FENERI — Federação Nacional dos Estudantes de Relações Internacionais do Brasil",
  description:
    "Entidade máxima de representação dos estudantes e jovens profissionais de Relações Internacionais no Brasil. Conectando a academia, diplomacia e oportunidades globais.",
  keywords: [
    "FENERI",
    "Relações Internacionais",
    "Estudantes RI",
    "Diplomacia",
    "ENERI",
    "Federação Nacional de Estudantes de Relações Internacionais",
    "Políticas Internacionais",
  ],
  authors: [{ name: "FENERI" }],
  metadataBase: new URL("https://feneri.org.br"),
  openGraph: {
    title: "FENERI — Representação Nacional de Relações Internacionais",
    description:
      "Promovendo o impacto, a inovação e o desenvolvimento acadêmico e profissional em Relações Internacionais no Brasil.",
    url: "https://feneri.org.br",
    siteName: "FENERI",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FENERI — Federação Nacional dos Estudantes de RI",
    description:
      "Representando os estudantes de Relações Internacionais em todo o território nacional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E7D32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-background text-textMain min-h-screen flex flex-col font-body">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
