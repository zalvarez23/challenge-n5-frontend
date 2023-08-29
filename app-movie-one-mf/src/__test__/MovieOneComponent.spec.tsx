import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieOneComponent from "../component/MovieOneComponent";
import { MOCK_PERSONAGES } from "../constants/mock-personages";

describe("<MovieOneComponent />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<MovieOneComponent personages={MOCK_PERSONAGES} />);
  });

  test("Renders characters and cards lenght correctly ", async () => {
    const liMoviesCard = component.container.querySelectorAll("li");
    expect(component.container).toBeInTheDocument();
    expect(liMoviesCard).toHaveLength(MOCK_PERSONAGES.length);
  });

  test("Renders card characters movie", async () => {
    const liMoviesCard = component.container.querySelectorAll("li")[0];
    const imgMovieCard = liMoviesCard.querySelector("img");
    const textMovieCard = liMoviesCard.querySelector(".movie__text");
    expect(imgMovieCard).toBeInTheDocument();
    expect(textMovieCard).toBeInTheDocument();
  });
});
