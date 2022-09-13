import { ref } from '../refElement';

export const showPageHomeHeader = () => {
  ref.pageHome.classList.remove('visually-hidden');
};

export const hidePageHomeHeader = () => {
  ref.pageHome.classList.add('visually-hidden');
};

export const showPageLibraryHeader = () => {
  ref.pageLibrary.classList.remove('visually-hidden');
};

export const hidePageLibraryHeader = () => {
  ref.pageLibrary.classList.add('visually-hidden');
};

export const showPageHomeContent = () => {
  ref.outputCardsHome.classList.remove('visually-hidden');
};

export const hidePageHomeContent = () => {
  ref.outputCardsHome.classList.add('visually-hidden');
};

export const showPageLibraryContent = () => {
  ref.outputCardsLibrary.classList.remove('visually-hidden');
};

export const hidePageLibraryContent = () => {
  ref.outputCardsLibrary.classList.add('visually-hidden');
};

export const showPaginationHome = () => {
  ref.pagination.classList.remove('visually-hidden');
};

export const hidePaginationHome = () => {
  ref.pagination.classList.add('visually-hidden');
};
