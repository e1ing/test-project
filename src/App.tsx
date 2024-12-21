import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import Box from './Box';

const App = () => {
  return (
    <Canvas camera={{ position: [15, 15, 15] }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        intensity={1}
      />
      <pointLight
        position={[10, 10, 10]}
        intensity={1}
      />
      <Box />

      <OrbitControls enableZoom={true} />
    </Canvas >
  );
};

export default App;