import React from "react";
import { LoaderContainer } from "../../styles/ContainerStyles";
import { DualRing } from "react-spinners-css";

export const Loader = () => (
  <LoaderContainer>
    <DualRing color="#686ade" size={100} />
    <p>Please wait. Loading content</p>
  </LoaderContainer>
);
