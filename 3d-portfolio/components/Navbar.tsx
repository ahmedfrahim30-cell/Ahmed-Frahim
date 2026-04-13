"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-black/90 backdrop-blur-sm border-b border-dark-300"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="w-[85%] max-w-7xl mx-auto h-20 flex items-center justify-between">
          {/* ── Logo ── */}
          <a href="#home" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 md:h-20 w-auto object-contain" />
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.2em] text-gray-500 hover:text-neon-cyan transition-colors duration-300 font-code"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-neon-red transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
            />
            <span
              className={`block w-6 h-px bg-neon-red transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-px bg-neon-red transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg tracking-[0.3em] text-gray-400 hover:text-neon-cyan transition-colors font-code"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
