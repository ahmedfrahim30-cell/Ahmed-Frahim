"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "Hard Surface Modeling",
  "Texturing",
  "Animation",
  "Compositing",
  "Concept Art",
  "Character Design",
  "Realtime Rendering",
  "Video Editing",
];

const tools = [
  { name: "Blender", level: 85 },
  { name: "Gimp", level: 70 },
  { name: "Inkscape", level: 80 },
  { name: "Unreal Engine", level: 50 },
  { name: "Davinci Resolve", level: 60 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden section-gap">
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
            ABOUT
          </h2>
          <span className="w-32 h-px bg-neon-red/40" />
        </motion.div>

        {/* ── Body ── */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-20 pb-32">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bracket p-10 md:p-14 w-full"
          >
            <p className="text-base md:text-lg text-gray-300 leading-loose text-center font-light">
              I&apos;m a 3D artist and and concept artist driven by a deep appreciation for mechanical logic and traditional craft, I bridge the gap between classic sketching and high-performance 3D modeling. I push my 3d towards highly optimized results on the engine and in terms of visuals. I’m currently available for freelance collaborations and would love to discuss how we can bring your next project to life.
            </p>
          </motion.div>

          {/* Stats: Skills + Tools */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-sm tracking-[0.3em] text-neon-red font-code mb-10 text-center md:text-left">
                CAPABILITIES
              </h3>
              <div className="flex flex-col gap-6 w-full">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400 font-code"
                  >
                    <span className="w-1.5 h-1.5 bg-neon-red flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-sm tracking-[0.3em] text-neon-red font-code mb-10 text-center md:text-left">
                TOOLS
              </h3>
              <div className="flex flex-col gap-8 w-full">
                {tools.map((tool) => (
                  <div key={tool.name} className="space-y-2 w-full">
                    <div className="flex justify-between text-sm font-code">
                      <span className="text-gray-300">{tool.name}</span>
                      <span className="text-gray-500">{tool.level}%</span>
                    </div>
                    <div className="h-1 bg-dark-300 w-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tool.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="h-full bg-neon-red/80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
