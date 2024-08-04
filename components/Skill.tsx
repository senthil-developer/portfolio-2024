"use client";

import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import PLaceHolderComponent from "./PLaceHolderComponent";
import { StaticImageData } from "next/image";

const Ball = ({ url }: { url: string }) => {
  const [decal] = useTexture([url]);
  const { viewport } = useThree();
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={viewport.width / 3}>
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
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
      />
      <Ball url={url} />
    </Canvas>
  );
};
export default Skill;
