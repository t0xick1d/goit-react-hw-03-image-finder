import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ alt, url, showModalImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={url}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => showModalImg(url)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  showModalImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
