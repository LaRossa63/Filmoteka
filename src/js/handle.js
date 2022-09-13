import { ref, WATCHED } from './refElement';
import {
  movieService,
  isValidClickCard,
  setContentToModalWindow,
  getMoviesByText,
  generateCardsToHome,
} from './components/fillingCards';
import {
  hideModalWindow,
  showModalWindow,
  addListenerToModalWindow as addListenerFromModalWindow,
  clearListenerToModalWindow as clearListenerFromModalWindow,
  chooseModalActiveBtn,
} from './components/modalWindow';
import {
  selectActiveNavBtn,
  chooseHomePage as changeToHomePage,
  chooseLibraryPage as changeToLibraryPage,
  changeActiveBtn,
} from './components/changePage';
import { addMovieToLocalStorage } from './utils/localStorage';
import { selectPaginationActivePage } from './components/pagination';
import { hidePaginationHome, showPaginationHome } from './utils/controlPage';

export const handlePageOpenHome = event => {
  selectActiveNavBtn(event);

  if (ref.outputCardsHome.children.length !== 0) {
    showPaginationHome();
  }

  changeToHomePage();
};

export const handlePageOpenLibrary = event => {
  selectActiveNavBtn(event);

  hidePaginationHome();
  changeToLibraryPage();
};

export const handleClickWatchedBtn = event => {
  changeActiveBtn(event);
};

export const handleClickQueueBtn = event => {
  changeActiveBtn(event);
};

export const handleFormSubmit = async event => {
  event.preventDefault();

  const searchText = ref.inputForm.value.toLowerCase().trim();

  const movies = await getMoviesByText(searchText);

  if (!movies) {
    return;
  }

  generateCardsToHome(movies.Search);
};

export const handleClickCards = async event => {
  if (!isValidClickCard(event.target)) {
    return;
  }

  event.preventDefault();

  await setContentToModalWindow(event.target);

  addListenerFromModalWindow();
  showModalWindow();
};

export const handleCloseModalWindow = () => {
  hideModalWindow();
  clearListenerFromModalWindow();
};

export const handleClickAddToWatched = event => {
  chooseModalActiveBtn(event);

  const thisMovies = {
    id: ref.modalWindow.dataset.id,
    title: ref.modalWindowTitle.textContent,
    url: ref.modalWindowImg.src,
  };

  addMovieToLocalStorage(WATCHED, thisMovies);
};

export const handleClickAddToQueue = event => {
  chooseModalActiveBtn(event);

  console.log('Queue');
};

export const handleClickPaginationArrowLeft = async () => {
  movieService.nextPageLeft();

  const movies = await getMoviesByText();

  if (!movies) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  generateCardsToHome(movies.Search);

  selectPaginationActivePage(movieService.page);
};

export const handleClickPaginationArrowRight = async () => {
  movieService.nextPageRight();

  const movies = await getMoviesByText();

  if (!movies) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  generateCardsToHome(movies.Search);

  selectPaginationActivePage(movieService.page);
};
