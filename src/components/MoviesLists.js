import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesLists = () => {
  const allMovies = useSelector((state) => state.movies);

  const watchlist = allMovies.filter((movie) => movie.list === "watch");

  const watchedlist = allMovies.filter((movie) => movie.list === "watched");

  return (
    <>
      <MovieList list={watchlist} />
      <MovieList list={watchedlist} />
    </>
  );
};

export default MoviesLists;
