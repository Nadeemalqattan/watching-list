import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/actions";

const DeleteButton = ({ movieId }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => dispatch(deleteMovie(movieId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
