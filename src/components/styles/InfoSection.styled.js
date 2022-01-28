import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: ${( layout ) => layout.layout || 'row'};

  div {
    width: 50%;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap");

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.blue2};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: translate(0, 0);
    top: 0;
    left: 0;
    text-align: center;
    padding: 40px 50px;
  }

  h2 {
    font-family: "Fraunces", serif;
    font-size: 42px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 15px;
    }
  }

  p {
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding-bottom: 20px;
    }
  }

  a {
    font-family: "Fraunces", serif;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue2};
    position: relative;

    &::after {
      content: " ";
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translate(-50%);
      height: 12px;
      width: 110%;
      z-index: -1;
      opacity: 0.5;
      border-radius: 100px;
      background-color: ${(color) => color.children[2].props.color};
    }

    &:hover::after {
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: ${(image) => image.image};
  background-size: cover;
  background-position: center;
  height: 700px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: ${(image) => image.imageMobile};
    height: 500px;
  }
`;
