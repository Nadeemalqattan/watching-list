import { useSelector } from "react-redux";
import movies from "../movies";
import Movie from "./Movie";

const MoviesLists = () => {
  const allMovies = useSelector((state) => state.movies);
  const watchlist = allMovies
    .filter((movie) => movie.list === "watchlist")
    .map((movie) => {
      return <Movie className="list-group-item" key={movie.id} movie={movie} />;
    });
  const watchedlist = allMovies
    .filter((movie) => movie.list === "watched")
    .map((movie) => {
      return <Movie className="list-group-item" key={movie.id} movie={movie} />;
    });

  return (
    <>
      <ul>{watchlist}</ul>
      <ul>{watchedlist}</ul>
    </>
  );
};

export default MoviesLists;
