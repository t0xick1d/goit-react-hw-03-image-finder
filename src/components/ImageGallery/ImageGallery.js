import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ listImg, showModalImg, status, onClickNextPage }) => {
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
      {status === 'showImg' && <Button onCLickButton={onClickNextPage} />}
    </>
  );
};

ImageGallery.propTypes = {
  listImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  showModalImg: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  onClickNextPage: PropTypes.func.isRequired,
};

export default ImageGallery;
