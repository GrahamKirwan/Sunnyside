import styled from "styled-components";

export const StyledTiles = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Tile = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap");

  width: 50%;
  background-image: ${(image) => image.image};
  background-size: cover;
  background-position: top;
  height: 800px;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue2};


  h3 {
    font-family: "Fraunces", serif;
    font-size: 40px;
    margin-top: 500px;
  }

  p {
    width: 43%;
    margin: 0 auto;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
  }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: ${(image) => image.imageMobile};
    width: 100%;
  }
`;
