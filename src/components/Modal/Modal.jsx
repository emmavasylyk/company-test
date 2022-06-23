import React from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  const onCloseModal = () => {
    onClose(false);
    window.addEventListener('keydown', handleKeyDowm);
  };

  const handleKeyDowm = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        {children}
        <button type="button" className={style.ModalButton}>
          <IoCloseSharp
            className={style.ModalCloseIcon}
            onClick={onCloseModal}
          />
        </button>
      </div>
    </div>,
    modalRoot,
  );
}
