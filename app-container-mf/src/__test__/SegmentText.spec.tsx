import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SegmentText } from "./../components/atomos";
import { MemoryRouter } from "react-router-dom";
describe("<SegmentText />", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <SegmentText title="avengers" selected={true} link="/movie-two" />
      </MemoryRouter>
    );
  });
  test("Renders label text correctly", () => {
    expect(component.container).toHaveTextContent("avengers");
    expect(component.container).toBeInTheDocument();
  });

  test("Renders link and svg correctrly", () => {
    const linkElement = component.container.querySelector("a");
    const svgElement = component.container.querySelector("svg");
    expect(linkElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
  });
});
