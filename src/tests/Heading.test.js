import React from "react";
import renderer from "react-test-renderer";
import HeadingComponent from "../components/Heading";

describe("HeadingComponent", () => {
  it("renders correctly", () => {
    const props = "Top article title";
    const tree = renderer.create(<HeadingComponent heading={props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
