"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function MechCore({ scale = 1 }: { scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.3;
      coreRef.current.rotation.z += delta * 0.2;
    }
    if (cageRef.current) {
      cageRef.current.rotation.x -= delta * 0.15;
      cageRef.current.rotation.y += delta * 0.25;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.4;
      ring3Ref.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* ── Central Core: glowing octahedron ── */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#ff204e"
          emissive="#ff204e"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* ── Wireframe Cage: icosahedron edges ── */}
      <mesh ref={cageRef} scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial visible={false} />
        <Edges color="#ff204e" threshold={15} />
      </mesh>

      {/* ── Ring 1: horizontal orbit ── */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.015, 16, 128]} />
        <meshStandardMaterial
          color="#ff204e"
          emissive="#ff204e"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* ── Ring 2: angled orbit ── */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[2.3, 0.01, 16, 128]} />
        <meshStandardMaterial
          color="#00eaff"
          emissive="#00eaff"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* ── Ring 3: perpendicular orbit ── */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, Math.PI / 6]}>
        <torusGeometry args={[1.7, 0.012, 16, 128]} />
        <meshStandardMaterial
          color="#00eaff"
          emissive="#00eaff"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* ── Floating Particles ── */}
      <Sparkles
        count={50}
        scale={6}
        size={1.5}
        speed={0.3}
        color="#ff204e"
      />

      {/* ── Core point lights ── */}
      <pointLight color="#ff204e" intensity={2} distance={8} />
      <pointLight
        color="#00eaff"
        intensity={0.5}
        distance={5}
        position={[0, 2, 0]}
      />
    </group>
  );
}
