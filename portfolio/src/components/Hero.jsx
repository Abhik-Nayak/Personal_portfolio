import React, { Suspense } from "react"
import styled from 'styled-components';
import Navbar from './Navbar';
import User from "../assets/user.png";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width:1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
font-size: 50px;

@media only screen and (max-width: 768px) {
  text-align: center;
}
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.div`
  height: 4px;
  max-width: 300px;
  border-radius: 2px;
  background: rgb(237,192,6);
  background: linear-gradient(99deg, rgba(237,192,6,1) 0%, rgba(7,56,214,1) 100%, rgba(17,17,222,1) 100%);
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex:3;
  position:relative;

`;
const Img = styled.img`
  width:500px;
  height: 1000px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left style={{ justifyContent: "center" }}>
          <Title>Think, Make, Solve.</Title>
          <Line />
          <WhatWeDo>
            {/* <Line /> */}
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={User} />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;

