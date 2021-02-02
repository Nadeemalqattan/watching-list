import { useDispatch } from "react-redux";
import { updateMovie } from "../../store/actions";

const UpdateButton = ({ movie }) => {
  const dispatch = useDispatch();

  const _movie = {
    id: movie.id,
    name: movie.name,
    list: movie.list === "watchlist" ? "watched" : "watchlist",
  };

  const buttonView = () =>
    movie.list === "watchlist" ? "watched" : "unwatched";

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => dispatch(updateMovie(_movie))}
    >
      {buttonView()}
    </button>
  );
};

export default UpdateButton;
