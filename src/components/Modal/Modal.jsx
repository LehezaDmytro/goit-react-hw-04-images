import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.addEventListener('keydown', hendleClose);
    return () => {
      document.body.removeEventListener('keydown', hendleClose);
    };
  });

  const hendleClose = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      closeModal();
    }
  };
  return createPortal(
    <div className="Overlay" onClick={hendleClose}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
