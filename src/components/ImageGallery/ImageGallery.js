import Button from 'components/Button/Button';
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ listImg, showModalImg }) {
  return (
    <>
      <ul className="ImageGallery">
        {listImg.map(obj => {
          return (
            <ImageGalleryItem
              key={obj.id}
              alt={obj.tags}
              url={obj.webformatURL}
              showModalImg={showModalImg}
            />
          );
        })}
      </ul>
      <Button />
    </>
  );
}
