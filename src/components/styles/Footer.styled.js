import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  text-align: center;
  padding: 50px;

  nav {

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      

      li {
        margin: 25px 0;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.cyan};
          padding: 25px;
        }
      }
    }
  }
`;
