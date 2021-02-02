import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const Movie = ({ movie }) => {
  return (
    <>
      {movie.name}
      <span>
        <UpdateButton movie={movie} />
        <DeleteButton movieId={movie.id} />
      </span>
    </>
  );
};
export default Movie;
