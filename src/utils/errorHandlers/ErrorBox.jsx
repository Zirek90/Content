import React from "react";
import { ErrorContainter } from "../../styles/ContainerStyles";
import { ErrorBtn } from "../../styles/ButtonStyles";

export const ErrorBox = () => (
  <ErrorContainter role="alert">
    <p>Ops seems like there is some problem. Please reload page</p>
    <ErrorBtn onClick={() => window.location.reload()}>Reload page</ErrorBtn>
  </ErrorContainter>
);
