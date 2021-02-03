import { MovieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const Movie = ({ movie }) => {
  return (
    <MovieWrapper>
      {movie.name}
      <UpdateButton movie={movie} />
      <DeleteButton movieId={movie.id} />
    </MovieWrapper>
  );
};
export default Movie;
