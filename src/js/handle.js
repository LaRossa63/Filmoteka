import { ref } from './refElement';
import { fillingCars } from './components/fillingCards';
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
