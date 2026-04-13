"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  useGLTF,
  Html,
} from "@react-three/drei";
import MechCore from "./MechCore";

/* ── Loading Spinner ─────────────────────── */
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border border-neon-red border-t-transparent animate-spin" />
        <span className="text-[10px] text-neon-red font-code tracking-[0.3em]">
          LOADING
        </span>
      </div>
    </Html>
  );
}

/* ── GLB Model Loader ────────────────────── */
function GLBModel({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

/* ── Model Viewer ────────────────────────── */
interface ModelViewerProps {
  modelPath?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  coreScale?: number;
  className?: string;
}

export default function ModelViewer({
  modelPath,
  autoRotate = true,
  enableZoom = true,
  enablePan = false,
  coreScale = 1,
  className = "",
}: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 1.5, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<Loader />}>
          {/* Model or placeholder */}
          {modelPath ? (
            <GLBModel path={modelPath} />
          ) : (
            <MechCore scale={coreScale} />
          )}

          {/* Lighting: Clean and direct without heavy shading */}
          <ambientLight intensity={0.7} color="#ffffff" />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color="#ffffff"
          />
          <directionalLight
            position={[-3, 3, -3]}
            intensity={0.5}
            color="#00eaff"
          />

          {/* Controls */}
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            enableZoom={enableZoom}
            enablePan={enablePan}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            minDistance={3}
            maxDistance={12}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
