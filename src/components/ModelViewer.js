
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function HelmetModel() {
    const { scene } = useGLTF('/DamagedHelmet.gltf'); 
    return <primitive object={scene} />;
  }

const ModelViewer = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      {}
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} intensity={3.9} />
      <OrbitControls enableZoom={true} />
      <HelmetModel />
    </Canvas>
  );
};

export default ModelViewer;
