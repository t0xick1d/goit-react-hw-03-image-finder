import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ url, alt, closeOverlay }) => {
  return (
    <div
      className="Overlay"
      onClick={e => {
        closeOverlay(e);
      }}
    >
      <div className="Modal">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  closeOverlay: PropTypes.func.isRequired,
};

export default Modal;
