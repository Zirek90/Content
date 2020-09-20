import styled from "styled-components";

export const MainContainer = styled.div`
  width: 90%;
  background-color: white;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 8px #888888;

  .mainWrapper {
    display: flex;

    @media (min-width: 769px) {
      flex-direction: row-reverse;
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid lightgrey;
`;

export const MainImageContainer = styled.figure`
  margin-bottom: 0;

  figcaption {
    text-align: right;
    font-size: 13px;
    padding: 5px;
    font-style: oblique;
  }

  @media (min-width: 769px) {
    width: 60%;
  }
`;

export const ContentContainer = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 769px) {
    width: 40%;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const ErrorContainter = styled(LoaderContainer)``;

export const ErrorExceptionWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: lightgray;
  }
`;

