import React from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

function Obstacle({ position, size, color }) {
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

function Labyrinth({ currentPage }) {
  const obstacles = [];
  const colors = ['purple', 'orange', 'green', 'red', 'blue']; // Colores variados para los obstáculos

  // Configuración de la cuadrícula de obstáculos
  const rows = 2;
  const cols = 6;
  const spacing = 8;
  const heightVariation = [1, 2, 3]; // Diferentes alturas para variar visualmente

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) continue; // Crear un patrón de laberinto

      const position = [
        i * spacing - (rows * spacing) / 2,
        heightVariation[Math.floor(Math.random() * heightVariation.length)] / 2,
        j * spacing - (cols * spacing) / 2,
      ];

      const size = [4, position[1] * 2, 4];
      const color = colors[Math.floor(Math.random() * colors.length)];

      obstacles.push(
        <Obstacle
          key={`${i}-${j}`}
          position={position}
          size={size}
          color={color}
        />
      );
    }
  }

  return <group visible={currentPage === 1}>{obstacles}</group>;
}

export default Labyrinth;
