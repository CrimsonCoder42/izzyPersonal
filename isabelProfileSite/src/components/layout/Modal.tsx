// src/components/layout/Modal.tsx

import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>('');

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setVideoSrc('');
    setIsOpen(false);
  };

  // Example: You can manage multiple modals or pass props as needed
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
      className="max-w-3xl mx-auto my-20 bg-white rounded shadow-lg overflow-hidden"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="relative pb-9/16">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700">
          &times;
        </button>
        <iframe
          className="w-full h-full"
          src={videoSrc}
          title="Video"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </ReactModal>
  );
};

export default Modal;
