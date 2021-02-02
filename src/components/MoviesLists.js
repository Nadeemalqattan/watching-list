import { useSelector } from "react-redux";
import Movie from "./Movie";

const MoviesLists = () => {
  const watchMovies = useSelector((state) => state.movies).map((movie) => {
    return <Movie className="list-group-item" key={movie.id} movie={movie} />;
  });

  return (
    <>
      <span>{watchMovies}</span>
    </>
  );
};

export default MoviesLists;
