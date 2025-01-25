// src/components/layout/Navbar.tsx

import React, { useState } from 'react';
import { navigationItems } from '../../constants/navigationItems';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home">FreeFolio</a>
        </div>
        <div className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.replace('#', '')}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <a href="#" className="btn btn-outline-primary">
            Hire Me
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-primary" />
            ) : (
              <MenuIcon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.replace('#', '')}
                smooth={true}
                duration={500}
                className="block cursor-pointer hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="#" className="btn btn-outline-primary w-full mt-2">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
