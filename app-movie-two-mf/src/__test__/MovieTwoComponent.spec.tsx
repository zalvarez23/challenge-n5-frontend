import React from "react";
import { prettyDOM, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieTwoComponent from "./../../src/component/MovieTwoComponent";
import { MOCK_PERSONAGES } from "./../../src/constants/mock-personages";

describe("<MovieTwoComponent />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<MovieTwoComponent personages={MOCK_PERSONAGES} />);
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
    expect(textMovieCard).toBeinTheDocument();
  });
});
