import { ref } from '../refElement';
import { MovieService } from '../api/api-movie-service';

const movieService = new MovieService();

const setTotalPage = request => {
  const totalResult = Number(request.totalResults);
  movieService.totalPage = Math.ceil(totalResult / movieService.countCardsPage);
};

const outputCards = cards => {
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

  ref.outputCards.innerHTML = li.join('');
};

const outputErrorSearch = error => {
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

const checkValidAnswer = answer => {
  ref.searchError.innerHTML = '';

  if (answer.Response === 'False') {
    return false;
  }

  return true;
};

export const fillingCars = async searchText => {
  const answer = await movieService.getMovie(searchText);

  if (!checkValidAnswer(answer)) {
    outputErrorSearch(answer.Error);
    return;
  }

  setTotalPage(answer);

  outputCards(answer.Search);
};

export const checkValidClickCard = element => {
  if (element.closest('.list__li-img')) {
    return true;
  }

  return false;
};

export const setContentForModalWindow = async card => {
  const details = await movieService.getMovieDetailsByID(card.dataset.id);

  ref.modalWindow.innerHTML = `
  <div class="modal__container">
    <div class="modal__content">
      <div class="content__wrap-img">
        <img
          class="wrap__img-image"
          src="${details.Poster}"
          alt="123"
        />
      </div>

      <div class="content__wrap-information">
        <h3 class="wrap__information-title">${details.Title}</h3>

        <ul class="wrap__information-list">
          <li class="list__li">
            <p class="list__li-title">Rating</p>
            <p class="list__li-subtitle subtitle__selected">${details.imdbRating}</p>
          </li>

          <li class="list__li">
            <p class="list__li-title">Language</p>
            <p class="list__li-subtitle">${details.Language}</p>
          </li>

          <li class="list__li">
            <p class="list__li-title">Original Title</p>
            <p class="list__li-subtitle">${details.Title}</p>
          </li>

          <li class="list__li">
            <p class="list__li-title">Genre</p>
            <p class="list__li-subtitle">${details.Genre}</p>
          </li>
        </ul>

        <p class="wrap__information-about">About</p>

        <p class="wrap__information-text">${details.Plot}</p>

        <div class="wrap__information-container">
          <button class="information__container-btn btn__selected">
            add to watched
          </button>

          <button class="information__container-btn">add to queue</button>
        </div>
      </div>
    </div>

    <svg class="modal__content-close">
      <use href="../../images/header/sprite.svg#icon-modal-close"></use>
    </svg>
  </div>`;
};
