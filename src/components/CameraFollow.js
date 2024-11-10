// src/components/CameraFollow.js
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const CameraFollow = ({ carRef }) => {
  const cameraRef = useRef();

  // Actualizamos la posición de la cámara cada frame
  useFrame(() => {
    if (cameraRef.current && carRef.current) {
      // Desplazar la cámara en base a la posición del carro
      cameraRef.current.position.x = carRef.current.position.x;
      cameraRef.current.position.z = carRef.current.position.z + 5;  // Ajusta la distancia según necesites
      cameraRef.current.position.y = carRef.current.position.y + 2;  // Ajusta la altura de la cámara
      cameraRef.current.lookAt(carRef.current.position);  // Mantiene la cámara mirando al carro
    }
  });

  return <perspectiveCamera ref={cameraRef} position={[0, 7, 10]} fov={15} />;
};

export default CameraFollow;
