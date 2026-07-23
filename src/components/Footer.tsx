import React from "react";
import Link from "next/link";
import { Mail, MapPin, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="bg-textMain text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Institutional info & Logo */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white p-2 rounded-md inline-block w-fit">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-2">
              Federação Nacional dos Estudantes de Relações Internacionais do Brasil. Entidade civil sem fins lucrativos representativa dos estudantes e egressos de RI.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da FENERI"
                className="p-2.5 rounded-full bg-gray-800 hover:bg-primary-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da FENERI"
                className="p-2.5 rounded-full bg-gray-800 hover:bg-primary-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X da FENERI"
                className="p-2.5 rounded-full bg-gray-800 hover:bg-primary-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal do YouTube da FENERI"
                className="p-2.5 rounded-full bg-gray-800 hover:bg-primary-dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-white text-base tracking-wider uppercase mb-1">
              Navegação Rápida
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-white text-base tracking-wider uppercase mb-1">
              Contato Institucional
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Brasília / DF — República Federativa do Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:contato@feneri.org.br"
                  className="hover:text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  contato@feneri.org.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span>Portal Oficial: feneri.org.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} FENERI — Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Estatuto Social
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
