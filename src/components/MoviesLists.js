import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { MovieWrapper } from "../styles";

const MoviesLists = () => {
  const allMovies = useSelector((state) => state.movies);

  const watchlist = allMovies.filter((movie) => movie.list === "watch");

  const watchedlist = allMovies.filter((movie) => movie.list === "watched");

  return (
    <>
      <MovieWrapper>
        <MovieList list={watchlist} />
      </MovieWrapper>
      <MovieWrapper>
        <MovieList list={watchedlist} />
      </MovieWrapper>
    </>
  );
};

export default MoviesLists;
