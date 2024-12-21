import * as THREE from 'three';
import { Mesh, Vector3 } from 'three';
import { ThreeElements, ThreeEvent, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react';
import { log } from 'three/tsl';


function Box(props: ThreeElements['mesh']) {

  const boxRef = useRef<THREE.Mesh>(null!);
  const [ball, setBall] = useState<Vector3>();

  const onBoxClickHandler = (event: ThreeEvent<MouseEvent>) => {
    const { x, y, z } = event.point;
    setBall(new Vector3(x, y, z))
  }

  return (
    <>
      <mesh
        ref={boxRef}
        onClick={onBoxClickHandler}
      >
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color={'#F07D24'} />
      </mesh>
      <mesh
        position={ball}>
        <sphereGeometry args={[0.5, 30, 30]} />
        <meshStandardMaterial color={'7FBFF6'} />
      </mesh>
    </>
  );
}

export default Box;