import { ref } from '../refElement';
import { handleCloseModalWindow, handleCloseModalWindow } from '../handle';

export const addListener = () => {
  const close = document.querySelector('.modal__content-close');

  close.addEventListener('click', handleCloseModalWindow);
};

export const clearListener = () => {
  const close = document.querySelector('.modal__content-close');

  close.removeEventListener('click', handleCloseModalWindow);
};

export const hideModalWindow = () => {
  ref.modalWindow.classList.add('visually-hidden');
};

export const showModalWindow = () => {
  ref.modalWindow.classList.remove('visually-hidden');
};
