import React from "react";
import { HeaderContainer } from "../styles/ContainerStyles";
import { Header } from "../styles/HeadersAndParaStyles";

const HeadingComponent = ({ heading }) => (
  <HeaderContainer>
    <Header>{heading}</Header>
  </HeaderContainer>
);

export default HeadingComponent;
