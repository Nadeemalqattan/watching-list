import { moviesData } from "../movies";
import { ADD_MOVIE } from "./actions";

const initialState = {
  movies: moviesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:

    default:
      return state;
  }
};
