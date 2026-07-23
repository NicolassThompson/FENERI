import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker rounded-sm ${className}`}
      aria-label="FENERI - Página Inicial"
    >
      <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-primary-dark via-primary to-primary-darker text-white shadow-md group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl tracking-tight text-textMain group-hover:text-primary-dark transition-colors duration-200">
          FENERI
        </span>

      </div>
    </Link>
  );
};
