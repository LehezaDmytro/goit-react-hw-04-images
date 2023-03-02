import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  imageURL,
  showModalFunc,
  largeImageURL,
  tags,
}) => {
  return (
    <li
      onClick={() => showModalFunc(largeImageURL, tags)}
      className="ImageGalleryItem"
    >
      <img className="ImageGalleryItem-image" src={imageURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  showModalFunc: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
