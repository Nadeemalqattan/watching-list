import { MovieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { MovieName, MovieButtons, MovieHeight } from "../styles";

const Movie = ({ movie }) => {
  return (
    <MovieHeight>
      <MovieName>{movie.name}</MovieName>
      <MovieButtons>
        <span>
          <UpdateButton movie={movie} />
          <DeleteButton movieId={movie.id} />
        </span>
      </MovieButtons>
      <br />
    </MovieHeight>
    <MovieWrapper>
      {movie.name}
      <UpdateButton movie={movie} />
      <DeleteButton movieId={movie.id} />
    </MovieWrapper>
  );
};
export default Movie;
