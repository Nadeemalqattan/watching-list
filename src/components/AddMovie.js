import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
import { SearchBarStyled } from "../styles";

const AddMovie = () => {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    setMovie({
      name: "",
    });
  };

  return (
    <SearchBarStyled onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          value={movie.name}
          placeholder="Enter a Movie Name"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <BsPlusCircle />
          </button>
        </div>
      </div>
    </SearchBarStyled>
  );
};

export default AddMovie;
