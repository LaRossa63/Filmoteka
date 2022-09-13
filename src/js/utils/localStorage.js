export const getMovieInLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key)) ?? [];
};

export const addMovieToLocalStorage = (key, movie) => {
  const strangeLocalStorage = getMovieInLocalStorage(key);

  const result = [movie, ...strangeLocalStorage];

  localStorage.setItem(key, JSON.stringify(result));
};
