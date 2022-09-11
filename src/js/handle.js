import { ref } from './refElement';
import {
  fillingCars,
  checkValidClickCard,
  setContentForModalWindow,
} from './components/fillingCards';

import {
  hideModalWindow,
  showModalWindow,
  addListener,
  clearListener,
} from './components/modalWindow';

import {
  changeActiveText,
  changePageOnHome,
  changePageOnLibrary,
  changeActiveBtn,
} from './components/changePage';

export const handlePageOpenHome = event => {
  changeActiveText(event);

  changePageOnHome();
};

export const handlePageOpenLibrary = event => {
  changeActiveText(event);

  changePageOnLibrary();
};

export const handleClickWatch = event => {
  changeActiveBtn(event);
};

export const handleClickQueue = event => {
  changeActiveBtn(event);
};

export const handleFormSubmit = event => {
  event.preventDefault();

  const searchText = ref.inputForm.value.toLowerCase().replaceAll(' ', '');

  fillingCars(searchText);
};

export const handleClickCards = async event => {
  if (!checkValidClickCard(event.target)) {
    return;
  }

  event.preventDefault();

  await setContentForModalWindow(event.target);

  addListener();
  showModalWindow();
};

export const handleCloseModalWindow = () => {
  hideModalWindow();
  clearListener();
};
