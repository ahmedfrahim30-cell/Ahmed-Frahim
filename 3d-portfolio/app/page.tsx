"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

/* Dynamic imports for components that use Three.js (WebGL) – must skip SSR */
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
