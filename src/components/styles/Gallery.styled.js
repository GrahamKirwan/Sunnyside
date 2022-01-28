import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 25%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 50%;
    }
  }
`;
