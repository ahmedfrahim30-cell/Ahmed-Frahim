export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tools: string[];
  modelPath?: string;
  modelImage?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "veo-09",
    title: "VEO-09",
    description:
      "A mech built as a hybrid between organic & artificial intelligence.",
    longDescription:
      "Vigilante, also known as VEO-9, is a mech designed to be highly creative and agile in combat, specializing in speed-based maneuvers to outwork incoming threats. It is the only mech to give a challenge to Shinrai MK-X. This verse is an ongoing project to one day see the light of day.",
    category: "MECH / CHARACTER",
    tools: ["Blender", "Inkscape", "Gimp"],
    modelImage: "/images/veo-9.png",
    modelPath: "/models/veo_09.glb",
    accent: "#ff204e",
  },
  {
    id: "shinrai-mk-x",
    title: "SHINRAI MK-X",
    description:
      "The first Hybrid mech built to test the power from radiant elements from outer space.",
    longDescription:
      "Shinrai MK-X is the first ever mech built in the timeline of its verse to see how radiant elements from space can be a source of power to a mechanized being with the organic intelligence and mathematical precision.",
    category: "MECH / CHARACTER",
    tools: ["Blender", "Inkscape", "Gimp"],
    modelImage: "/images/shinrai.png",
    modelPath: "/models/shinrai.glb",
    accent: "#00eaff",
  },
  // {
  //   id: "neon-cityscape",
  //   title: "NEON CITYSCAPE",
  //   description:
  //     "Dystopian urban environment with volumetric lighting.",
  //   longDescription:
  //     "A sprawling cyberpunk cityscape environment featuring towering megastructures, neon-lit streets, atmospheric fog, and volumetric god rays. Built with modular architecture pieces optimized for real-time rendering.",
  //   category: "ENVIRONMENT",
  //   tools: ["Blender", "Unreal Engine", "Substance Painter"],
  //   modelPath: "/models/piler.glb",
  //   accent: "#ff204e",
  // }, 
];
