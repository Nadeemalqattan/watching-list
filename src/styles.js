import styled from "styled-components";

export const MovieName = styled.div`
  float: left;
  font-size: 25px;
  font-weight: 500;
  padding-left: 1em;
`;

export const MovieButtons = styled.div`
  float: right;
  margin-right: 1em;
`;

export const MovieHeight = styled.div`
  height: 60px;
`;

export const MovieWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 90%;
  margin: 2em auto;

  button {
    margin: 0.25em;
  }

  p {
    text-align: right;
  }

  h3 {
    text-align: left;
    padding-left: 0.8em;
    padding-top: 0.5em;
  }
`;

export const AddBarStyled = styled.form`
  margin: 1em auto;
  display: block;
  width: 90%;
`;

export const MovieSearchBar = styled.input`
  float: right;
  padding: 0.5rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  display: block;
  width: 40%;
`;
