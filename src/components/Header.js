
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav>
    <Link to="/">visor 3d</Link>
    <Link to="/about">juego 3d</Link>
    <Link to="/users">perfiles con ia falsos</Link>
  </nav>
);

export default Header;
