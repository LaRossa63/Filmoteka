export class Spinner {
  constructor() {
    this._isShow = false;
    this._spinnerRef = document.querySelector('.spinner');
  }

  start() {
    this._spinnerRef.classList.add('is-open');
    this._isShow = true;
  }

  stop() {
    this._spinnerRef.classList.remove('is-open');
    this._isShow = false;
  }
}
