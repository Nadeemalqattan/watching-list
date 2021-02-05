import { MovieSearchBar } from "../styles";

const SearchBar = (props) => {
  return (
    <MovieSearchBar
      onChange={(event) => {
        props.setQuery(event.target.value);
      }}
      placeholder="Search for a Movie!"
    />
  );
};

export default SearchBar;
