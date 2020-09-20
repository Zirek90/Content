import React from "react";
import renderer from "react-test-renderer";
import { ErrorBox } from "../../utils/errorHandlers/ErrorBox";

describe("ErrorBox", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ErrorBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
