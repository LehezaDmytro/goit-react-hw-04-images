import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items, showModalFunc }) => {
  return (
    <ul className="ImageGallery">
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          imageURL={item.webformatURL}
          showModalFunc={showModalFunc}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  showModalFunc: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
