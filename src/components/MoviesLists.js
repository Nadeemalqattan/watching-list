import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { MovieWrapper } from "../styles";

const MoviesLists = () => {
  const allMovies = useSelector((state) => state.movies);

  const watchlist = allMovies.filter((movie) => movie.list === "watch");
  const movieWatch = watchlist.length;

  const watchedlist = allMovies.filter((movie) => movie.list === "watched");
  const movieWatched = watchedlist.length;
  return (
    <>
      <MovieWrapper>
        <h2>{`Watchlist (${movieWatch})`}</h2>

        <hr />
        <MovieList list={watchlist} />
      </MovieWrapper>
      <MovieWrapper>
        <h2>{`Watched (${movieWatched})`}</h2>

        <hr />
        <MovieList list={watchedlist} />
      </MovieWrapper>
    </>
  );
};

export default MoviesLists;
