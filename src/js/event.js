import { ref } from './refElement';
import {
  handlePageOpenHome,
  handlePageOpenLibrary,
  handleClickWatch,
  handleClickQueue,
} from './handle';

ref.btnHome.addEventListener('click', handlePageOpenHome);
ref.btnLibrary.addEventListener('click', handlePageOpenLibrary);

ref.libraryWatchBtn.addEventListener('click', handleClickWatch);
ref.libraryQueueBtn.addEventListener('click', handleClickQueue);
