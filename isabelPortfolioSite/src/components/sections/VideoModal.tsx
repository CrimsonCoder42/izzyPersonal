// src/components/sections/VideoModal.tsx
import React from 'react';

const VideoModal: React.FC = () => {
  return (
    <div
      className="modal fade"
      id="videoModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="videoModalLabel"
      aria-hidden={true}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden={true}>&times;</span>
            </button>
            {/* 16:9 aspect ratio */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src=""
                id="video"
                allow="autoplay"
                title="Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
