import React from "react";
import renderer from "react-test-renderer";
import AuthorComponent from "../../components/Content/Author";

describe("AuthorComponent", () => {
  it("renders correctly", () => {
    const props = "John Doe";
    const tree = renderer.create(<AuthorComponent author={props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
