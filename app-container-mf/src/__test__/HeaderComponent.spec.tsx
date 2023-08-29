import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import HeaderComponent from "../components/organismos/HeaderComponent";
import { segmentsValues } from "../constants/values";
describe("<HeaderComponent />", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <HeaderComponent segments={segmentsValues} titleName="test title" />
      </MemoryRouter>
    );
  });
  test("Renders HeaderComponent correctly", () => {
    const segments = component.container.querySelectorAll("a");
    const title = component.container.querySelector(".header__titles__text");
    segments?.forEach((segment, i) => {
      expect(segment).toHaveTextContent(segmentsValues[i].title); // Harry Potter & Avengers
    });
    expect(title).toHaveTextContent("test title");
    expect(component.container).toBeInTheDocument();
  });
});
