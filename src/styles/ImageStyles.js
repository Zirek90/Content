import styled, { css, keyframes } from "styled-components";

const pulser = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  height: ${(props) => !props.replacer && "100%"};
  background: ${(props) =>
    props.replacer
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: ${pulser} 1.2s ease-in-out infinite;
`;
