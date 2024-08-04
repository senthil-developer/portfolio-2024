"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, CameraControls } from "@react-three/drei";
import Model from "@/components/model/PageNotFound";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
export default function Scene() {
  const { theme } = useTheme();
  return (
    <Canvas
      orthographic
      style={{ background: theme === "light" ? "white" : "black" }}
      camera={{ position: [0, 0, 1], zoom: 1000 }}
    >
      <Model />
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <Environment preset="city" />
    </Canvas>
  );
}
