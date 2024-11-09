// src/pages/Home.js
import React from 'react';
import ModelViewer from '../components/ModelViewer'; // Importa el componente ModelViewer

const Home = () => {
  return (
    <div>
      <h2>utiliza los 2 botones del mouse y el scrool</h2>
      <ModelViewer /> {/* El modelo 3D se muestra aquí */}
    </div>
  );
};

export default Home;
