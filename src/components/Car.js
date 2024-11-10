// src/components/Car.js
import React from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import useKeyboardControls from '../hooks/useKeyboardControls';
import { useGLTF } from '@react-three/drei';

const Car = React.forwardRef(({ position, onPageChange }, ref) => {
  const { scene } = useGLTF('/DamagedHelmet.gltf');

  const [boxRef, api] = useBox(() => ({
    mass: 5,
    position: position,
  }));

  const controls = useKeyboardControls();


  useFrame(() => {
    const velocity = 2;
    if (controls.forward) api.velocity.set(0, 0, -velocity);
    if (controls.backward) api.velocity.set(0, 0, velocity);
    if (controls.left) api.velocity.set(-velocity, 0, 0);
    if (controls.right) api.velocity.set(velocity, 0, 0);

    if (controls.jump) {
      api.velocity.set(0, 3.6, 0);
    }
  });

  return (
    <mesh ref={boxRef} castShadow>
      <primitive object={scene} scale={0.002} />
    </mesh>
  );
});

export default Car;
