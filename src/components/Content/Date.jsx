import React from "react";
import { Paragraph } from "../../styles/HeadersAndParaStyles";

const DateComponent = ({ date }) => (
  <Paragraph>{new Date(date).toUTCString()}</Paragraph>
);

export default DateComponent;
