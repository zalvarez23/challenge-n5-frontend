import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import HeaderComponent from "../../components/organismos/HeaderComponent";
import useMoviesContainer from "./UseMoviesContainer";

const StyledHomeMoviesContainer = styled.div`
  padding: 2% 10%;
`;

const HomeMoviesContainer: React.FC = () => {
  const { segments } = useMoviesContainer();
  return (
    <StyledHomeMoviesContainer>
      <header>
        <HeaderComponent segments={segments} titleName="Lista de Personajes" />
      </header>
      <main>
        <Outlet />
      </main>
    </StyledHomeMoviesContainer>
  );
};

export default HomeMoviesContainer;
