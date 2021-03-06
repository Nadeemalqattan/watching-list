import moviesData from "../movies";
import { ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from "./actions";

const initialState = {
  movies: moviesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const { newMovie } = action.payload;
      state.movies.length === 0
        ? (newMovie.id = 1)
        : (newMovie.id = state.movies[state.movies.length - 1].id + 1);
      newMovie.list = "watch";
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };

    case UPDATE_MOVIE:
      const { updatedMovie } = action.payload;
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === updatedMovie.id ? updatedMovie : movie
        ),
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
      };

    default:
      return state;
  }
};

export default reducer;
