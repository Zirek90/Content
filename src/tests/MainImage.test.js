import React from "react";
import renderer from "react-test-renderer";
import MainImageComponent from "../components/MainImage";

describe("MainImageComponent", () => {
  it("renders correctly", () => {
    const props = {
      leadImage: {
        url:
          "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg",
      },
      leadImageCaption: {
        value: "Listen your voice",
      },
    };
    const url = "https://content-eu-4.content-cms.com";
    const tree = renderer
      .create(<MainImageComponent mainImage={props} url={url} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
