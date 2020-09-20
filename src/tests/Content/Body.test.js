import React from "react";
import renderer from "react-test-renderer";
import BodyComponent from "../../components/Content/Body";

describe("BodyComponent", () => {
  it("renders correctly", () => {
    const props = [
      "<h2><span>Hey there</span></h2> ",
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> ",
    ];

    const tree = renderer.create(<BodyComponent body={props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
