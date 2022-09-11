export class Spinner {
  constructor() {
    this._isOpen = false;
    this._spinnerRef = document.querySelector('.spinner');
  }

  start() {
    this._spinnerRef.classList.add('is-open');
    this._isOpen = true;
  }

  stop() {
    this._spinnerRef.classList.remove('is-open');
    this._isOpen = false;
  }
}
