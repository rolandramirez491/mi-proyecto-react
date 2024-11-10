// src/components/Obstacles.js
import React from 'react';
import { useBox } from '@react-three/cannon';

function Obstacle({ position, size = [1, 1, 1], color = 'red' }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    position: position,
    args: size,
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Obstacles() {
  // Puedes personalizar la posición, tamaño y color de cada obstáculo aquí
  const obstaclesData = [
    { position: [5, 0.5, -5], size: [2, 1, 2], color: 'blue' },
    { position: [-5, 0.5, -10], size: [3, 1, 3], color: 'green' },
    { position: [0, 0.5, -15], size: [1, 1, 4], color: 'yellow' },
    { position: [7, 0.5, -20], size: [1.5, 1, 1.5], color: 'purple' },
    { position: [-7, 0.5, -25], size: [2, 1, 2], color: 'orange' },
  ];

  return (
    <>
      {obstaclesData.map((data, index) => (
        <Obstacle
          key={index}
          position={data.position}
          size={data.size}
          color={data.color}
        />
      ))}
    </>
  );
}

export default Obstacles;
