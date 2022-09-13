import { ref } from './refElement';
import {
  handlePageOpenHome,
  handlePageOpenLibrary,
  handleClickWatchedBtn,
  handleClickQueueBtn,
  handleFormSubmit,
  handleClickCards,
  handleClickPaginationArrowLeft,
  handleClickPaginationArrowRight,
} from './handle';

ref.btnHome.addEventListener('click', handlePageOpenHome);
ref.btnLibrary.addEventListener('click', handlePageOpenLibrary);

ref.libraryWatchBtn.addEventListener('click', handleClickWatchedBtn);
ref.libraryQueueBtn.addEventListener('click', handleClickQueueBtn);

ref.searchForm.addEventListener('submit', handleFormSubmit);

ref.outputCardsHome.addEventListener('click', handleClickCards);
ref.outputCardsLibrary.addEventListener('click', handleClickCards);

ref.paginationArrowLeft.addEventListener(
  'click',
  handleClickPaginationArrowLeft
);

ref.paginationArrowRight.addEventListener(
  'click',
  handleClickPaginationArrowRight
);
