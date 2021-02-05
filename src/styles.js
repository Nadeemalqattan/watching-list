import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center:

`;
export const MovieName = styled.div`
  float: left;
  font-size: 25px;
  padding: 0.2em;
`;
export const MovieButtons = styled.div`
  float: right;
  margin: 0;
`;
export const MovieHeight = styled.div`
  height: 60px;
`;
export const Description = styled.h4`
  text-align: center;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 5px solid orange;
`;

// export const Logo = styled(Link)`
//   img {
//     width: 70px;
//   }
// `;

// export const NavItem = styled(NavLink)`
//   color: black;
//   &.active {
//     color: orange;
//     font-weight: bold;
//   }
// `;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex-wrap;
`;

export const MovieWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 90%;
  margin: 2em auto;
  padiing: 2em;
  display: block;

  button {
    margin: 0.5em;
  }

  img {
    height: 200px;
    border: 5px solid white;
  }

  p {
    text-align: left;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: center;
  }

  p {
    vertical-align: middle;
  }
`;

export const SearchBarStyled = styled.form`
  margin: 1em auto;
  display: block;
  width: 90%;
`;

export const RangeBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  margin-top: -20px;
  display: block;
  width: 350px;
`;

export const Buttons = styled.div`
  display: inline-flex;

  button {
    margin-left: 10px;
  }
`;

export const TripName = styled.p`
  font-size: 30px;
`;

export const TripCity = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: -15px;
`;

export const TripLength = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  display: block;
`;

export const TripDifficulty = styled.p`
  font-size: 25px;
  color: ${(props) => {
    if (props.trip.difficulty === "easy") return "green";
    else if (props.trip.difficulty === "medium") return "orange";
    else return "red";
  }};
`;

export const TripRating = styled.p`
  font-size: 10px;
`;
export const SuggestListWrapper = styled.div`
  margin: 20px;
  display: inline-block;
  width: 45%;
  img {
    width: 350px;
    border: 5px solid white;
  }

  p {
    text-align: center;
  }
`;

export const BackButton = styled.div`
  clear: both;
  margin-bottom: 20px;
  button {
    margin-right: 20px;
  }
`;

export const DetailedName = styled.p`
  font-size: 40px;
`;

export const DetailedCity = styled.p`
  font-size: 30px;
`;

export const DetailedLength = styled.p`
  font-size: 32px;
  display: inline;
`;

export const DetailedDifficulty = styled.p`
  font-size: 32px;
  display: inline-block;
`;

export const DetailedRating = styled.p`
  font-size: 28px;
  margin-bottom: 40px;
`;

export const DetailedDescription = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  float: right;
`;

export const DetailedImage = styled.div`
  img {
    width: 600px;
    float: left;
    border: 5px solid orange;
  }
`;
