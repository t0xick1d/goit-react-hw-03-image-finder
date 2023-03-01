import React from 'react';

const Modal = ({ url, alt, closeOverlay }) => {
  return (
    <div
      className="Overlay"
      onClick={e => {
        closeOverlay(e);
      }}
      onKeyDown={e => {
        closeOverlay(e);
      }}
    >
      <div className="Modal">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
