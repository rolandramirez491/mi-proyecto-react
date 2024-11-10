
import React from 'react';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

function Platform({ position = [0, 0, 0], modelPath = '/model/p1.gltf' }) {
  const { scene } = useGLTF(modelPath);

  const [ref] = useBox(() => ({
    position: position,
    args: [10, 0.01, 10], 
    type: 'Static',
  }));

  return (
    <group>
      {}
      <mesh ref={ref} position={position} receiveShadow>
        <primitive object={scene} scale={0.9} /> {}
        <boxGeometry args={[200, 0.03, 200]} /> {}
        <meshStandardMaterial color="lightblue" /> {}
      </mesh>
    </group>
  );
}

export default Platform;
