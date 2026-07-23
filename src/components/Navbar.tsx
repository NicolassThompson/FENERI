"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const isScrolled = useHeaderScroll(40);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 120);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar-scrolled py-2" : "glass-navbar-top py-3"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Navegação Principal"
        >
          {/* Logo */}
          <div className="mr-4"><Logo /></div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex flex-1 items-center gap-1 xl:gap-2 bg-white/70 backdrop-blur-md px-4 py-1 rounded-md border border-gray-200/60 shadow-sm whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker whitespace-nowrap ${
                      isActive
                        ? "text-primary-darker font-semibold"
                        : "text-gray-700 hover:text-primary-dark"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-bgGreen rounded-full -z-10 border border-primary-light/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-md text-gray-700 hover:text-primary-dark hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-gray-200 shadow-xl px-6 py-6 overflow-y-auto max-h-[calc(100vh-72px)]"
          >
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-bgGreen text-primary-darker font-bold border-l-4 border-primary-dark"
                          : "text-gray-800 hover:bg-gray-50 hover:text-primary-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("faq");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Acessar Portal FENERI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
