"use client";

import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* ── Background accent lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/10 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon-red/10 to-transparent" />
      </div>

      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-32 pb-24 md:py-32">
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-px bg-neon-red" />
              <span className="text-[10px] tracking-[0.4em] text-neon-red font-code uppercase">
                Portfolio
              </span>
            </motion.div>

            {/* name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-heading font-bold tracking-wider"
            >
              <span className="text-neon-cyan glow-text-cyan">AHMED FRAHIM</span>
            </motion.h1>

            {/* title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 font-light tracking-wide"
            >
              3D Artist <span className="text-neon-red">/</span> Concept Artist
            </motion.p>

            {/* tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-gray-600 max-w-md leading-relaxed font-code"
            >
              Before I am an artist, I am a fan, a fan of human creativity and skill. Beginning with my roots in traditional sketching, I joined the 3D community in 2025 and have been driven by the craft ever since.
            </motion.p>

            {/* cta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-4 border border-neon-red/40 px-8 py-3 text-xs tracking-[0.3em] text-neon-red font-code uppercase hover:bg-neon-red/10 hover:border-neon-red transition-all duration-300"
              >
                VIEW WORK
                <span className="w-6 h-px bg-neon-red group-hover:w-10 transition-all duration-300" />
              </a>
            </motion.div>
          </div>

          {/* ── Right: 3D Canvas ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <ModelViewer
              autoRotate
              enableZoom={false}
              coreScale={1.2}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] text-gray-600 font-code">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-neon-red/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
