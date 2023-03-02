import '../index.css';

import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ErrorMessage } from './Messages/ErrorMessage';
import { WarningMessage } from './Messages/WarningMessage';

import { getPost } from 'shared/api/posts';
import { Hearts } from 'react-loader-spinner';
export const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    const featchPost = async () => {
      try {
        setLoader(true);
        setMessage(false);
        const {
          data: { hits },
        } = await getPost(searchRequest, page);
        if (hits.length) {
          setItems(prevState => [...prevState, ...hits]);
        } else {
          setItems([]);
          setMessage(true);
        }
      } catch ({ response: { data } }) {
        setError(
          data || 'Error! Unable to load the image, please try again later!'
        );
      } finally {
        setLoader(false);
      }
    };
    if (searchRequest) {
      featchPost();
    }
  }, [searchRequest, page]);

  const onSubmit = inputValue => {
    setItems([]);
    setPage(1);
    setSearchRequest(inputValue);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const showModalFunc = (largeImageURL, tags) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  const closeModal = e => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal closeModal={closeModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
      <Searchbar onSubmit={onSubmit} />
      {error && <ErrorMessage error={error} />}
      {message && <WarningMessage />}
      <ImageGallery items={items} showModalFunc={showModalFunc} />
      {loader && (
        <Hearts
          color="#4fa94d"
          ariaLabel="hearts-loading"
          wrapperClass="Loader"
        />
      )}
      {Boolean(items.length) && <Button loadMore={loadMore} />}
    </div>
  );
};
