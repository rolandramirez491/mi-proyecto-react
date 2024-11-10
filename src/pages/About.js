// src/pages/About.js
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Car from '../components/Car';
import Page from '../components/Page';
import Platform from '../components/Platform';
import CameraFollow from '../components/CameraFollow';  // Importa CameraFollow

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const carRef = useRef();  // Ref para el carrito

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <p>Utiliza las teclas arriba, abajo, derecha, izquierda y barra espaciadora</p>
      <div style={{ width: '100%', height: '82vh' }}>
        <Canvas>
          <ambientLight intensity={1.9} />
          <directionalLight position={[1, 10, 5]} />
          <Physics>
            <Platform position={[0, -0.02, 0]} />
            <CameraFollow carRef={carRef} />  {/* La cámara sigue al carro */}
            <Car ref={carRef} position={[0, 0, 0]} onPageChange={handlePageChange} />
            <Page position={[0, 0, 0]} pageNumber={0} currentPage={currentPage} />
            <Page position={[10, 0, 0]} pageNumber={1} currentPage={currentPage} />
            <Page position={[20, 0, 0]} pageNumber={2} currentPage={currentPage} />
          </Physics>
        </Canvas>
      </div>
    </div>
  );
};

export default About;
