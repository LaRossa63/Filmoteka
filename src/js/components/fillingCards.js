import { ref } from '../refElement';
import { MovieService } from '../api/api-movie-service';
import { drawPagination } from './pagination';
import { showPaginationHome } from '../utils/controlPage';

export const movieService = new MovieService();

const setTotalPage = request => {
  const totalResult = Number(request.totalResults);
  movieService.totalPage = Math.ceil(totalResult / movieService.countCardsPage);
};

export const generateCardsToHome = cards => {
  const li = cards.map(card => {
    return `
    <li class="cards__list-li">
      <a class="list__li-link" href="">
        <img
          class="list__li-img"
          data-id="${card.imdbID}"
          src="${card.Poster}"
          alt="${card.Title}"
        />
      </a>

      <div class="list__li-info">
        <h3 class="li__info-name">${card.Title}</h3>
        <span class="li__info-description">${card.Year}</span>
      </div>
    </li>
    `;
  });

  ref.outputCardsHome.innerHTML = li.join('');

  showPaginationHome();
  drawPagination(movieService.totalPage, movieService.page);
};

const drawErrorSearch = error => {
  let message = '';

  switch (error.toLowerCase()) {
    case 'too many results.':
      message = 'Напишите полное название фильма';
      break;

    case 'movie not found!':
      message = 'Данного фильма пока нет в прокате';
      break;

    default:
      message = `Ошибка [${error}]`;
      break;
  }

  ref.searchError.innerHTML = message;
};

const isValidAnswer = answer => {
  ref.searchError.innerHTML = '';

  return answer.Response !== 'False';
};

export const getMoviesByText = async searchText => {
  const answer = await movieService.getMovie(searchText);

  if (!isValidAnswer(answer)) {
    drawErrorSearch(answer.Error);
    return;
  }

  setTotalPage(answer);

  return answer;
};

export const isValidClickCard = element => {
  return element.closest('.list__li-img');
};

export const setContentToModalWindow = async card => {
  const details = await movieService.getMovieDetailsByID(card.dataset.id);

  const arrayLists = ['imdbRating', 'Language', 'Title', 'Genre'];

  const outputList = arrayLists.map(element => {
    return `
    <li class="list__li">
      <p class="list__li-title">${element}</p>
      <p class="list__li-subtitle subtitle__selected">${details[element]}</p>
    </li>`;
  });

  ref.modalWindow.dataset.id = details.imdbID;

  ref.modalWindowImg.src = details.Poster;
  ref.modalWindowImg.alt = details.Title;

  ref.modalWindowTitle.innerHTML = details.Title;
  ref.modalWindowList.innerHTML = outputList.join('');
  ref.modalWindowAboutText.innerHTML = details.Plot;
};

export const generateCardsToLibrary = cards => {
  const li = cards.map(card => {
    return `
    <li class="cards__list-li">
      <a class="list__li-link" href="">
        <img
          class="list__li-img"
          data-id="${card.id}"
          src="${card.url}"
          alt="${card.title}"
        />
      </a>

      <div class="list__li-info">
        <h3 class="li__info-name">${card.title}</h3>
      </div>
    </li>
    `;
  });

  ref.outputCardsLibrary.innerHTML = li.join('');
};
