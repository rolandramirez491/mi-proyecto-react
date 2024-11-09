
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

const App = () => (
  <Router>
    <Header /> {/* Barra de navegacion*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>
);

export default App;
