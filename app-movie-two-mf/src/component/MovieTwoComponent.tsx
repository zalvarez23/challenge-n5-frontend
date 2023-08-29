import React from "react";
import styled from "styled-components";
import { IPersonage } from "../types/personages.interface";
import { MOCK_PERSONAGES } from "../constants/mock-personages";

const StyledMovieComponent = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;

  .movie__card {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

    .movie__color-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .movie__poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .movie__text {
      position: absolute;
      bottom: 16px;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      z-index: 2;
      text-align: center;
      width: 100%;
    }
  }
`;

type MovieTwoComponentProps = {
  personages?: IPersonage[];
};

const MovieTwoComponent: React.FC<MovieTwoComponentProps> = ({
  personages,
}) => {
  const urlImage = process.env.REACT_APP_URL_IMAGE || "";
  return (
    <>
      <StyledMovieComponent>
        {personages?.map((personage) => {
          return (
            <li key={personage.id} className="movie__card">
              <div className="movie__color-overlay"></div>
              <img
                className="movie__poster"
                src={`${urlImage}${personage.profile_path}`}
                alt="The avengers"
              />
              <div className="movie__text">
                <p>{personage.character}</p>
                <p>{personage.name}</p>
              </div>
            </li>
          );
        })}
      </StyledMovieComponent>
    </>
  );
};
MovieTwoComponent.defaultProps = {
  personages: MOCK_PERSONAGES,
};

export default MovieTwoComponent;
