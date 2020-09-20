import React from "react";
import renderer from "react-test-renderer";
import ContentComponent from "../components/Content";

describe("ContentComponent", () => {
  it("renders correctly", () => {
    const props = {
      author: {
        value: "John Doe",
      },
      date: {
        value: "2020-09-06T22:00:00Z",
      },
      body: {
        values: [
          "<h2><span>Hey there</span></h2> ",
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> ",
        ],
      },
    };
    const tree = renderer.create(<ContentComponent content={props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
