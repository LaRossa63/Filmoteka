export const ref = {
  header: document.querySelector('.header'),
  btnHome: document.querySelector('.navigation__list-home'),
  btnLibrary: document.querySelector('.navigation__list-library'),

  searchForm: document.querySelector('.header__search-form'),
  inputForm: document.querySelector('.search__form-input'),
  searchError: document.querySelector('.header__search-error'),

  pageHome: document.querySelector('.header__search'),
  pageLibrary: document.querySelector('.header__library'),

  libraryWatchBtn: document.querySelector('.header__library-watched'),
  libraryQueueBtn: document.querySelector('.header__library-queue'),

  outputCardsHome: document.querySelector('.cards__list-home'),
  outputCardsLibrary: document.querySelector('.cards__list-library'),

  modalWindow: document.querySelector('.modal'),
  modalWindowClose: document.querySelector('.modal__content-close'),

  modalWindowImg: document.querySelector('.wrap__img-image'),
  modalWindowTitle: document.querySelector('.wrap__information-title'),
  modalWindowList: document.querySelector('.wrap__information-list'),
  modalWindowAboutText: document.querySelector('.wrap__information-text'),

  modalWindowWatchBtn: document.querySelector('.btn-watched'),
  modalWindowQueueBtn: document.querySelector('.btn-queue'),
};

export const WATCHED = 'watched';
