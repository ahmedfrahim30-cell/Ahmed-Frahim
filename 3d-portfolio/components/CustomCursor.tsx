"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, visible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
        scale: hovering ? 1.5 : 1,
      }}
      transition={{ 
        scale: { type: "spring", stiffness: 400, damping: 25 },
        opacity: { duration: 0.15 }
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top line */}
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="12"
          stroke="#00eaff"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{ opacity: hovering ? 1 : 0.8 }}
        />
        {/* Bottom line */}
        <line
          x1="16"
          y1="20"
          x2="16"
          y2="32"
          stroke="#00eaff"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{ opacity: hovering ? 1 : 0.8 }}
        />
        {/* Left line */}
        <line
          x1="0"
          y1="16"
          x2="12"
          y2="16"
          stroke="#00eaff"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{ opacity: hovering ? 1 : 0.8 }}
        />
        {/* Right line */}
        <line
          x1="20"
          y1="16"
          x2="32"
          y2="16"
          stroke="#00eaff"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{ opacity: hovering ? 1 : 0.8 }}
        />
        {/* Center dot appears on hover */}
        {hovering && (
          <motion.circle
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            cx="16"
            cy="16"
            r="2"
            fill="#00eaff"
          />
        )}
      </svg>
    </motion.div>
  );
}
