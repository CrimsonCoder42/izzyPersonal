// src/components/layout/Footer.tsx
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaImdb } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      background: 'var(--primary)',
      color: 'white',
      marginTop: '3rem',
      padding: '3rem 0',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1.5rem 15px'
      }}>
        <div className="d-flex justify-content-center mb-4">
          <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/isabelcafaroanderson/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0077B5', color: 'white' }}>
            <FaLinkedinIn />
          </a>
          <a className="btn btn-light btn-social mr-2" href="https://www.instagram.com/isabelcanderson/" target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            color: 'white'
          }}>
            <FaInstagram />
          </a>
          <a className="btn btn-light btn-social" href="https://www.imdb.com/name/nm3682805/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#F5C518', color: 'black' }}>
            <FaImdb />
          </a>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a className="text-white" href="#">Privacy</a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">Terms</a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">FAQs</a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">Help</a>
        </div>
        <p className="m-0">
          &copy; <a className="text-white font-weight-bold" href="#">isabelcafaroanderson.com</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://digitalelevatepartners.com/" target="_blank" rel="noopener noreferrer">Digital Elevate Partners</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;