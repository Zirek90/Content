import React from "react";
import { ErrorExceptionWrapper } from "../../styles/ContainerStyles";

export const ErrorHandler = () => (
  <ErrorExceptionWrapper role="alert">
    <p>Could not download content</p>
  </ErrorExceptionWrapper>
);
