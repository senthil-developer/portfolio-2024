import React, { useRef } from "react";

import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";
import {
  BufferGeometry,
  Euler,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

export default function Model() {
  const { nodes } = useGLTF("/models/torrus.glb");
  const { viewport } = useThree();
  const torus =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame(() => {
    if (torus.current?.rotation instanceof Euler) {
      torus.current.rotation.x += 0.02;
    }
  });
  const materialProps = {
    thickness: 0.2,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.2,
    backside: true,
  };

  return (
    <group scale={viewport.width / 4}>
      <Text
        fontSize={0.9}
        font={"/fonts/Lostar.ttf"}
        position={[0, 0, -0.5]}
        color={0xff50ff}
        anchorX="center"
        anchorY="middle"
      >
        SENTHIL
      </Text>
      <mesh ref={torus} {...nodes.Torus002} scale={2}>
        <MeshTransmissionMaterial {...materialProps} color={"white"} />
      </mesh>
    </group>
  );
}
