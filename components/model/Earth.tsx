"use client";

import React, { useRef } from "react";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, Object3DEventMap } from "three";

type ModelProps = JSX.IntrinsicElements["mesh"];

const EarthTexture = "/earth-texture-nightmap.jpg";

export default function Model(props: ModelProps) {
  const texture = useTexture(EarthTexture);
  const sun = useRef<Mesh<
    BufferGeometry,
    Material | Material[],
    Object3DEventMap
  > | null>(null);

  useFrame(() => {
    if (sun.current) {
      sun.current.rotation.y += 0.007;
      sun.current.rotation.x += 0.007;
      sun.current.rotation.z += 0.007;
    }
  });

  return (
    <mesh {...props}>
      <mesh ref={sun}>
        <icosahedronGeometry args={[2, 32]} />
        <meshStandardMaterial map={texture} flatShading />
      </mesh>
      <mesh scale={1.18} position={[0, 0, -1]}>
        <icosahedronGeometry args={[2, 20]} />
        <meshStandardMaterial color={0x6f8ff0} wireframe />
      </mesh>
    </mesh>
  );
}
