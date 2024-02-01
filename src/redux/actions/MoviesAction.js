export const FETCHMOVIESPENDING = "FETCHMOVIESPENDING";
export const FETCHMOVIESSUCCESS = "FETCHMOVIESSUCCESS";
export const FETCHMOVIESERROR = "FETCHMOVIESERROR";
export const SEARCHMOVIES = "SEARCHMOVIES";

export const fetchMoviesPending = () => {
  return {
    type: FETCHMOVIESPENDING,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCHMOVIESSUCCESS,
    payload: movies,
  };
};

export const fetchMoviesError = (error) => {
  return {
    type: FETCHMOVIESSUCCESS,
    payload: error,
  };
};

export const searchMovies = (value) => {
  return {
    type: SEARCHMOVIES,
    payload: value,
  };
};
