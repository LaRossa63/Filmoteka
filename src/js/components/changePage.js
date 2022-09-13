import { ref, WATCHED } from '../refElement';
import { generateCardsToLibrary } from './fillingCards';
import {
  showPageHomeHeader,
  hidePageHomeHeader,
  showPageLibraryHeader,
  hidePageLibraryHeader,
  showPageHomeContent,
  hidePageHomeContent,
  showPageLibraryContent,
  hidePageLibraryContent,
} from '../utils/controlPage';
import { getMovieInLocalStorage } from '../utils/localStorage';

const unselectActiveNavBtn = () => {
  document.querySelector('.text__selected').classList.remove('text__selected');
};

const unselectActiveListBtn = () => {
  document.querySelector('.selected__btn').classList.remove('selected__btn');
};

export const selectActiveNavBtn = event => {
  unselectActiveNavBtn();

  event.target.classList.add('text__selected');
};

export const chooseHomePage = () => {
  ref.header.className = 'header home-page';

  hidePageLibraryHeader();
  showPageHomeHeader();

  showPageHomeContent();
  hidePageLibraryContent();
};

export const chooseLibraryPage = () => {
  ref.header.className = 'header library-page';

  hidePageHomeHeader();
  showPageLibraryHeader();

  generateCardsToLibrary(getMovieInLocalStorage(WATCHED));
  showPageLibraryContent();
  hidePageHomeContent();
};

export const changeActiveBtn = event => {
  unselectActiveListBtn();

  event.target.classList.add('selected__btn');
};
