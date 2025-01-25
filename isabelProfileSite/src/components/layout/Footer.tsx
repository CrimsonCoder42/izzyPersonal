// src/components/layout/Footer.tsx

import React from 'react';
import { socialLinks } from '../../constants/socialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-5 px-3">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mb-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} <a href="#" className="font-bold hover:underline">Domain Name</a>. All Rights Reserved. Designed by{' '}
          <a href="https://htmlcodex.com" className="font-bold hover:underline">
            HTML Codex
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
