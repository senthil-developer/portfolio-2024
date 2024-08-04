"use client";

import { Canvas } from "@react-three/fiber";
import Model from "@/components/model/Earth";

export default function EarthCanva() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={2} />
      <directionalLight
        intensity={20}
        position={[10, 10, -10]}
        color={0x6f8ffa}
      />
      <Model position={[0, 0, -1]} scale={1} />
    </Canvas>
  );
}
