import React, { useRef,Suspense } from 'react';
import { OrbitControls, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Projection = () => {
  const textRef = useRef();
  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

  // useFrame(state=> console.log(state));
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            MERN
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}
const Cube = () => {


  return (
    <Container>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Projection />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
    </Container>
  )
}

export default Cube