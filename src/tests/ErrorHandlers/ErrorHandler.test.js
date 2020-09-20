import React from "react";
import renderer from "react-test-renderer";
import { ErrorHandler } from "../../utils/errorHandlers/ErrorHandler";

describe("ErrorHandler", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ErrorHandler />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
