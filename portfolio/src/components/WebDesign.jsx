import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";
const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        {/* <Mac/> */}
      </Stage>
    </Canvas>
  )
}

export default WebDesign