import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around">
        <li><Link to="/about" className="text-white">Quién Soy</Link></li>
        <li><Link to="/" className="text-white">Cotizador</Link></li>
        <li><Link to="/contact" className="text-white">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;