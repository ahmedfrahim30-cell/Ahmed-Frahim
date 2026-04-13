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
      "Battle-ready mech with articulated joints and weapon arrays.",
    longDescription:
      "A high-poly battle mech featuring fully articulated joints, detailed armor plating with panel lines, integrated weapon systems, and realistic hydraulic mechanisms. Designed for real-time game engines with optimized topology.",
    category: "CHARACTER",
    tools: ["Blender", "Substance Painter", "ZBrush"],
    modelImage: "/images/veo-9.png",
    modelPath: "/models/veo_9.glb",
    accent: "#ff204e",
  },
  {
    id: "cyber-helmet",
    title: "CYBER HELMET",
    description:
      "Futuristic tactical helmet with HUD visor integration.",
    longDescription:
      "A next-generation tactical helmet featuring an integrated heads-up display visor, modular attachment rails, atmospheric filtration system, and adaptive camouflage panels. Textured with PBR materials for photorealistic rendering.",
    category: "PROP",
    tools: ["Blender", "Substance Painter"],
    modelPath: "/models/spider bot.glb",
    accent: "#00eaff",
  },
  {
    id: "neon-cityscape",
    title: "NEON CITYSCAPE",
    description:
      "Dystopian urban environment with volumetric lighting.",
    longDescription:
      "A sprawling cyberpunk cityscape environment featuring towering megastructures, neon-lit streets, atmospheric fog, and volumetric god rays. Built with modular architecture pieces optimized for real-time rendering.",
    category: "ENVIRONMENT",
    tools: ["Blender", "Unreal Engine", "Substance Painter"],
    modelPath: "/models/piler.glb",
    accent: "#ff204e",
  },
  {
    id: "drone-x7",
    title: "DRONE X-7",
    description:
      "Autonomous reconnaissance drone with stealth profile.",
    longDescription:
      "A military-grade autonomous drone featuring a low-observable stealth profile, quad-rotor propulsion, sensor arrays, and retractable landing gear. Optimized for both cinematic sequences and game engine integration.",
    category: "VEHICLE",
    tools: ["Blender", "Substance Painter", "Marmoset"],
    modelPath: "/models/drone-x7.glb",
    accent: "#00eaff",
  },
  {
    id: "plasma-rifle",
    title: "PLASMA RIFLE",
    description:
      "High-energy weapon with modular rail system.",
    longDescription:
      "A sci-fi plasma rifle with energy coil chamber, modular Picatinny rail system, holographic sight, and magazine-fed cooling system. Features 4K PBR textures with wear, scratches, and battle damage detail.",
    category: "WEAPON",
    tools: ["Blender", "Substance Painter", "ZBrush"],
    modelPath: "/models/plasma-rifle.glb",
    accent: "#ff204e",
  },
  {
    id: "space-station",
    title: "SPACE STATION",
    description:
      "Orbital research facility with modular ring structure.",
    longDescription:
      "A large-scale orbital space station featuring a rotating habitation ring, solar panel arrays, docking ports, and research modules. Designed with realistic proportions and detailed surface greebling for cinematic production.",
    category: "ENVIRONMENT",
    tools: ["Blender", "Substance Painter", "After Effects"],
    modelPath: "/models/space-station.glb",
    accent: "#00eaff",
  },
];
