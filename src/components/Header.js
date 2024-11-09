
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users">Users</Link>
  </nav>
);

export default Header;
