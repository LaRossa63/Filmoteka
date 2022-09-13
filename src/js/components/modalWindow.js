import { ref } from '../refElement';
import {
  handleCloseModalWindow,
  handleCloseModalWindow,
  handleClickAddToWatched,
  handleClickAddToQueue,
} from '../handle';

export const addListenerToModalWindow = () => {
  ref.modalWindowClose.addEventListener('click', handleCloseModalWindow);
  ref.modalWindowWatchBtn.addEventListener('click', handleClickAddToWatched);
  ref.modalWindowQueueBtn.addEventListener('click', handleClickAddToQueue);
};

export const clearListenerToModalWindow = () => {
  ref.modalWindowClose.removeEventListener('click', handleCloseModalWindow);
  ref.modalWindowWatchBtn.removeEventListener('click', handleClickAddToWatched);
  ref.modalWindowQueueBtn.removeEventListener('click', handleClickAddToQueue);
};

export const hideModalWindow = () => {
  ref.modalWindow.classList.add('visually-hidden');
  ref.modalWindow.dataset.id = '';
};

export const showModalWindow = () => {
  ref.modalWindow.classList.remove('visually-hidden');
};

const clearModalActiveBtn = () => {
  document
    ?.querySelector('.container__btn-selected')
    ?.classList.remove('container__btn-selected');
};

export const chooseModalActiveBtn = event => {
  clearModalActiveBtn();

  event.target.classList.add('container__btn-selected');
};
