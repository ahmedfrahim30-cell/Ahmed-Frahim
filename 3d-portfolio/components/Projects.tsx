"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

/* ── Project Card ────────────────────────── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="group cursor-pointer relative flex flex-col bg-dark-100 border border-dark-300 hover:border-neon-red/50 transition-all duration-400 overflow-hidden"
    >
      {/* ── Thumbnail area ── */}
      <div
        className="relative h-64 overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #0d0d0d 0%, ${project.accent}08 50%, #050505 100%)`,
        }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Screenshot / PNG Placeholder */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
          <img
            src={project.modelImage}
            alt={project.title}
            className="max-w-[70%] max-h-[70%] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
          />
        </div>

        {/* Index number — large background text */}
        <span
          className="absolute left-4 top-2 text-[6rem] font-heading font-bold leading-none opacity-5 select-none"
          style={{ color: project.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Header Category Overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-1">
          <span
            className="text-[8px] tracking-[0.35em] font-code px-2 py-0.5 border"
            style={{ color: project.accent, borderColor: `${project.accent}40` }}
          >
            {project.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 z-20 text-left">
          <h3
            className="text-lg font-heading tracking-[0.15em] text-gray-100 group-hover:text-white transition-colors duration-300 leading-tight"
          >
            {project.title}
          </h3>
        </div>

        {/* Bottom accent line that grows on hover */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: project.accent }}
        />
      </div>

      {/* ── Card footer ── */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-dark-300 group-hover:border-neon-red/20 transition-colors duration-300">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="text-[9px] tracking-wider text-gray-600 font-code">
              {tool}
            </span>
          ))}
        </div>
        <span
          className="text-[9px] tracking-[0.2em] font-code opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
          style={{ color: project.accent }}
        >
          VIEW <span className="inline-block w-4 h-px" style={{ backgroundColor: project.accent }} />
        </span>
      </div>
    </motion.div>
  );
}

/* ── Projects Section ────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden section-gap">
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
            PROJECTS
          </h2>
          <span className="w-32 h-px bg-neon-red/40" />
          <p className="text-sm text-gray-600 font-code tracking-wider max-w-sm">
            A selection of 3D works — click any to explore
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="w-full max-w-6xl pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
