import { ref } from '../refElement';
import {
  showPageHome,
  hidePageHome,
  showPageLibrary,
  hidePageLibrary,
} from './controlPage';

const clearActiveSelectedText = () => {
  document.querySelector('.text__selected').classList.remove('text__selected');
};

const clearActiveSelectedBtn = () => {
  document.querySelector('.selected__btn').classList.remove('selected__btn');
};

export const changeActiveText = event => {
  clearActiveSelectedText();

  event.target.classList.add('text__selected');
};

export const changePageOnHome = () => {
  ref.header.className = 'header home-page';

  hidePageLibrary();
  showPageHome();
};

export const changePageOnLibrary = () => {
  ref.header.className = 'header library-page';

  hidePageHome();
  showPageLibrary();
};

export const changeActiveBtn = event => {
  clearActiveSelectedBtn();

  event.target.classList.add('selected__btn');
};
