import React from "react";
import BodyComponent from "./Content/Body";
import AuthorComponent from "./Content/Author";
import DateComponent from "./Content/Date";
import { ContentContainer } from "../styles/ContainerStyles";

const ContentComponent = ({ content }) => (
  <ContentContainer>
    <BodyComponent body={content.body.values} />
    <div>
      <AuthorComponent author={content.author.value} />
      <DateComponent date={content.date.value} />
    </div>
  </ContentContainer>
);

export default ContentComponent;
