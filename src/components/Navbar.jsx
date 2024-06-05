import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-neutral-500 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo-01.png" alt="Logo" className="h-20 w-20" />
          <div className="ml-8">
            <h1 className="text-white text-4xl font-bold">Leandro Guerrero</h1>
            <p className="text-white text-2xl">Productor y Asesor de Seguros</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link 
              to="/about" 
              className="text-white text-xl hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
            >
              Quién Soy
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              className="text-white text-xl hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
            >
              Cotizador
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-white text-xl hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;