import {
  useGLTF,
  Text,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import React from "react";
import { MeshProps, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Object3D, Object3DEventMap } from "three";
import { useTheme } from "next-themes";

interface MeshData {
  data: Object3D<Object3DEventMap>;
  key: number;
}

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/shards.glb");

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh data={mesh} key={i} />;
      })}
      <Font />
    </group>
  );
}

function Font() {
  const src = "/fonts/PPNeueMontreal-Bold.otf";
  const textOption = {
    color: "white",
    anchorX: "center" as "center",
    anchorY: "middle" as "middle",
  };
  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        404
      </Text>
      <Text
        font={src}
        position={[0, -0.2, -0.01]}
        fontSize={0.03}
        {...textOption}
      >
        Page Not Found
      </Text>
    </group>
  );
}

function Mesh({ data }: MeshData) {
  const { theme } = useTheme();

  const materialProps = {
    transmission: theme === "light" ? 2.55 : 0.99,
    thickness: 0.275,
    ior: 1.8,
    chromaticAberration: 0.75,
  };
  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </Float>
  );
}

// const materialProps = useControls({
//   transmission:
//     theme === "light"
//       ? { value: 2.55, min: 1.3, max: 5, step: 0.01 }
//       : { value: 0.99, min: 0, max: 1, step: 0.01 },
//   thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
//   ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
//   chromaticAberration: { value: 0.75, min: 0, max: 1 },
//   resolution: { value: 300, min: 100, max: 1000 },
// });
