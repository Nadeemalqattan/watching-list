import Movie from "./Movie";

const MovieList = ({ list }) => {
  return (
    <>
      {list.map((movie) => {
        return (
          <Movie className="list-group-item" key={movie.id} movie={movie} />
        );
      })}
    </>
  );
};

export default MovieList;
