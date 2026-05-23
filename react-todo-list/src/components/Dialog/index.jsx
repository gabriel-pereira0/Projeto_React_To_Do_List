import React, { useEffect, useRef } from 'react';
import './dialog.style.css';
import { IconClose } from '../IconClose';

export function Dialog({ isOpen, onClose, children }) {
  // Criando ref do dialog
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener('close', onClose);

    return () => {
      dialog?.removeEventListener('close', onClose);
    };
  }, [onClose]);

  // Comando para abrir o Dialog
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // Comando para fechar o Dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <div>
      <dialog ref={dialogRef} className='dialog'>
        <div className='btn-close-rapper'>
          <button autoFocus onClick={onClose} className='btn-close'>
            <IconClose />
          </button>
        </div>
        <div className='body'>{children}</div>
      </dialog>
    </div>
  );
}
