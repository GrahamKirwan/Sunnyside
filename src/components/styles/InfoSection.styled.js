import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */

  div {
    width: 50%;
    position: relative;
  }

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
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
  /* font-family: 'Barlow', serif; */

  h2 {
    font-family: "Fraunces", serif;
    font-size: 50px;
  }

  p {
    line-height: 1.5;
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
      background-color: ${( color ) => color.children[2].props.color};
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
`;
