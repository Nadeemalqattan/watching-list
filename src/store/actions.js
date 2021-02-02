export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: { newMovie },
  };
};
