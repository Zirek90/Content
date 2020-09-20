import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => (props.author ? "14px" : "12px")};
  font-style: oblique;
`;
