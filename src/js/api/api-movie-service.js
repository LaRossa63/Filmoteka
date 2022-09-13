import axios from 'axios';
import { Spinner } from '../components/spinner';

axios.defaults.baseURL = 'http://www.omdbapi.com';

const spinner = new Spinner();

export class MovieService {
  constructor() {
    this._key = '49e5b904';
    this._IMDb = 'tt3896198';

    this._page = 1;
    this._countCardsPage = 20;
    this._totalPage = 0;
    this._lastSearchText = '';
  }

  nextPageLeft() {
    if (this._page - 1 === 0) {
      return;
    }

    this._page -= 1;
  }

  nextPageRight() {
    if (this._page + 1 > this.totalPage) {
      return;
    }

    this._page += 1;
  }

  get page() {
    return this._page;
  }

  set page(value) {
    this._page = value;
  }

  get countCardsPage() {
    return this._countCardsPage;
  }

  set countCardsPage(value) {
    this._countCardsPage = value;
  }

  get totalPage() {
    return this._totalPage;
  }

  set totalPage(value) {
    this._totalPage = value;
  }

  async getMovie(searchText = this._lastSearchText) {
    try {
      this._lastSearchText = searchText;
      spinner.start();

      const result = await axios.get(
        `/?i=${this._IMDb}&apikey=${this._key}&s=${searchText}&page=${this._page}`
      );

      return result.data;
    } catch (err) {
      throw Error(err);
    } finally {
      spinner.stop();
    }
  }

  async getMovieDetailsByID(id) {
    try {
      spinner.start();

      const result = await axios.get(`/?apikey=${this._key}&i=${id}`);
      return result.data;
    } catch (err) {
      throw Error(err);
    } finally {
      spinner.stop();
    }
  }
}
