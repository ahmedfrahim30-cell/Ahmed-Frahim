"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  { name: "INSTAGRAM", href: "https://www.instagram.com/voider.3d?igsh=eDk1M2dxNWNwN3J6" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/ahmed-frahim-9a4215240/" },
  { name: "ARTSTATION", href: "https://www.artstation.com/ahmedfrahim4" },
  { name: "EMAIL", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmedfrahim30@gmail.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden section-gap">
      <div className="section-divider w-full" />

      <div ref={ref} className="w-full flex flex-col items-center px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 py-24 text-center w-full"
        >
          <h2 className="text-4xl md:text-6xl font-heading tracking-[0.3em] text-neon-cyan glow-text-cyan">
            CONTACT
          </h2>
          <span className="w-32 h-px bg-neon-red/40" />
        </motion.div>

        {/* ── Body ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-3xl flex flex-col items-center gap-16 md:gap-24 pb-32"
        >
          {/* Message */}
          <div className="bracket p-10 md:p-14 w-full">
            <p className="text-base md:text-lg text-gray-300 leading-loose text-center font-light">
              Interested in collaborating or have a project in mind? Feel free
              to reach out. I&apos;m always open to discussing new opportunities
              and creative challenges.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-8 w-full">
            <h3 className="text-sm tracking-[0.3em] text-neon-red font-code text-center">
              CONNECT
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap gap-8 sm:gap-12 w-full">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 text-gray-500 hover:text-neon-cyan transition-colors duration-300"
                >
                  <span className="w-6 h-px bg-dark-400 group-hover:bg-neon-cyan group-hover:w-10 transition-all duration-300" />
                  <span className="text-sm tracking-[0.25em] font-code">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-[10px] text-gray-500 font-code tracking-widest">
            <p>◢ AVAILABLE FOR FREELANCE</p>
            <p>◢ REMOTE WORLDWIDE</p>
          </div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-dark-300">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 px-6 md:px-16 py-8">
          <span className="text-[10px] text-gray-600 font-code tracking-wider text-center">
            © 2026 AHMED. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[10px] text-gray-700 font-code tracking-wider text-center">
            DESIGNED &amp; BUILT WITH PRECISION
          </span>
        </div>
      </div>
    </section>
  );
}
