import React from 'react';

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

export default ImageGalleryItem;
