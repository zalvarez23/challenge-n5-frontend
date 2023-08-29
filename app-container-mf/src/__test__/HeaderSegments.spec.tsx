import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { HeaderSegments } from "../components/moleculas";
import { segmentsValues } from "../constants/values";
describe("<HeaderSegments />", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <HeaderSegments segments={segmentsValues} />
      </MemoryRouter>
    );
  });
  test("Renders segments correctly  - lenght", () => {
    const segments = component.container.querySelectorAll("a");

    expect(component.container).toBeInTheDocument();
    expect(segments).toHaveLength(segmentsValues.length);
  });
});
