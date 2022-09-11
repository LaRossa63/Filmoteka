import { ref } from './refElement';
import {
  handlePageOpenHome,
  handlePageOpenLibrary,
  handleClickWatch,
  handleClickQueue,
  handleFormSubmit,
} from './handle';

ref.btnHome.addEventListener('click', handlePageOpenHome);
ref.btnLibrary.addEventListener('click', handlePageOpenLibrary);

ref.libraryWatchBtn.addEventListener('click', handleClickWatch);
ref.libraryQueueBtn.addEventListener('click', handleClickQueue);

ref.searchForm.addEventListener('submit', handleFormSubmit);
