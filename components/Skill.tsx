"use client";

import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useState } from "react";

const Ball = ({ url }: { url: string }) => {
  const [decal] = useTexture([url]);
  const { viewport } = useThree();
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0}>
      <mesh castShadow receiveShadow scale={viewport.width / 3}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Skill = ({ url }: { url: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        cursor: hovered ? "pointer" : "auto",
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas frameloop="always" style={{ width: "100%", height: "100%" }}>
        <OrbitControls
          enableZoom={false}
          enableDamping={false}
          enablePan={false}
        />
        <Ball url={url} />
      </Canvas>
    </div>
  );
};
export default Skill;
