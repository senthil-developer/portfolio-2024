"use client";

import { Canvas } from "@react-three/fiber";
import Model from "@/components/model/Earth";

export default function EarthCanva() {
  return (
    <Canvas camera={{ position: [0, 0, 6.2] }}>
      <ambientLight intensity={4} />
      <directionalLight
        intensity={20}
        position={[10, 10, -10]}
        color={0x6f8ffa}
      />
      <Model position={[0, 0, -0.4]} />
    </Canvas>
  );
}
