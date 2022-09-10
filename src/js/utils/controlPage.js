import { ref } from '../refElement';

export const showPageHome = () => {
  ref.pageHome.classList.remove('visually-hidden');
};

export const hidePageHome = () => {
  ref.pageHome.classList.add('visually-hidden');
};

export const showPageLibrary = () => {
  ref.pageLibrary.classList.remove('visually-hidden');
};

export const hidePageLibrary = () => {
  ref.pageLibrary.classList.add('visually-hidden');
};
