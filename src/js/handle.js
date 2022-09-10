import {
  changeActiveText,
  changePageOnHome,
  changePageOnLibrary,
  changeActiveBtn,
} from './utils/changePage';

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
