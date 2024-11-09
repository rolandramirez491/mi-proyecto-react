// src/components/ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Cargar el modelo GLTF con `useGLTF`
function HelmetModel() {
    const { scene } = useGLTF('/DamagedHelmet.gltf'); // La ruta ahora apunta a la raíz de `public`
    return <primitive object={scene} />;
  }

const ModelViewer = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      {/* Luz ambiental y de fondo */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={true} />
      <HelmetModel />
    </Canvas>
  );
};

export default ModelViewer;
