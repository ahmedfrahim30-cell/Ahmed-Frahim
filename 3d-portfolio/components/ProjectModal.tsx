"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ModelViewer from "./ModelViewer";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto bg-dark-100 border border-dark-400"
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dark-400">
          <div className="flex items-center gap-4">
            <span
              className="text-[9px] tracking-[0.35em] font-code px-2 py-0.5 border"
              style={{ color: project.accent, borderColor: `${project.accent}50` }}
            >
              {project.category}
            </span>
            <h2 className="text-base md:text-lg font-heading tracking-[0.15em] text-gray-200">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-dark-400 hover:border-neon-red text-gray-600 hover:text-neon-red transition-all duration-200 text-xs flex-shrink-0"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* 3D Viewer */}
          <div
            className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[440px] border-b lg:border-b-0 lg:border-r border-dark-400"
            style={{
              background: `linear-gradient(135deg, #080808, ${project.accent}08, #0a0a0a)`,
            }}
          >
            <ModelViewer
              modelPath={project.modelPath}
              autoRotate
              enableZoom
              showShadows
              coreScale={0.9}
            />
            {/* HUD corners */}
            <span className="absolute top-3 left-3 text-[8px] text-neon-red/30 font-code tracking-widest select-none">
              ◢ 3D.PREVIEW
            </span>
            <span className="absolute bottom-3 right-3 text-[8px] text-neon-cyan/20 font-code tracking-widest select-none">
              DRAG · ZOOM ◣
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8 p-8 md:p-10">

            {/* Description */}
            <div>
              <h3 className="text-[9px] tracking-[0.35em] text-neon-red font-code mb-4">
                OVERVIEW
              </h3>
              <p className="text-sm text-gray-400 leading-loose">
                {project.longDescription}
              </p>
            </div>

            <div className="h-px bg-dark-300" />

            {/* Tools */}
            <div>
              <h3 className="text-[9px] tracking-[0.35em] text-neon-red font-code mb-4">
                TOOLS USED
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-code text-gray-400 border border-dark-400 px-3 py-1.5 hover:border-neon-red/40 hover:text-gray-300 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-dark-300" />

            {/* Bottom accent */}
            <div
              className="inline-flex items-center gap-3 mt-auto"
              style={{ color: project.accent }}
            >
              <span className="w-6 h-px" style={{ backgroundColor: project.accent }} />
              <span className="text-[9px] tracking-[0.35em] font-code">
                INTERACTIVE 3D MODEL
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
