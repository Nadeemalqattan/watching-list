import { useSelector } from "react-redux";
import { useState } from "react";
import { MovieWrapper } from "../styles";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const MoviesLists = () => {
  const [query, setQuery] = useState("");
  const [_query, _setQuery] = useState("");

  const allMovies = useSelector((state) => state.movies);

  const watchlist = allMovies.filter(
    (movie) =>
      movie.list === "watch" &&
      movie.name.toLowerCase().includes(query.toLowerCase())
  );

  const watchedlist = allMovies.filter(
    (movie) =>
      movie.list === "watched" &&
      movie.name.toLowerCase().includes(_query.toLowerCase())
  );

  return (
    <>
      <MovieWrapper>
        <SearchBar setQuery={setQuery} />
        <h3>{`Watchlist - ${watchlist.length}`}</h3>
        <hr />
        <MovieList list={watchlist} />
      </MovieWrapper>
      <MovieWrapper>
        <SearchBar setQuery={_setQuery} />
        <h3>{`Watched - ${watchedlist.length}`}</h3>
        <hr />
        <MovieList list={watchedlist} />
      </MovieWrapper>
    </>
  );
};

export default MoviesLists;
