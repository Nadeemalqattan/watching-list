import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { ListWrapper, Lists } from "../styles";

const MoviesLists = () => {
  const allMovies = useSelector((state) => state.movies);

  const watchlist = allMovies.filter((movie) => movie.list === "watch");

  const watchedlist = allMovies.filter((movie) => movie.list === "watched");

  return (
    <div>
      <Lists>
        <ListWrapper size={1}>
          <h2>Watch List</h2>
          <MovieList list={watchlist} />
        </ListWrapper>
        <ListWrapper size={1}>
          <h2>Watched</h2>
          <MovieList list={watchedlist} />
        </ListWrapper>
      </Lists>
    </div>
  );
};

export default MoviesLists;
