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
    <li class="cards__list-li" data-id="${card.imdbID}">
      <a class="list__li-link" href="">
        <img
          class="list__li-img"
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
