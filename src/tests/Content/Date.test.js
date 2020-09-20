import React from "react";
import renderer from "react-test-renderer";
import DateComponent from "../../components/Content/Date";

describe("DateComponent", () => {
  it("renders correctly", () => {
    const props = "2020-09-06T22:00:00Z";

    const tree = renderer.create(<DateComponent date={props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
