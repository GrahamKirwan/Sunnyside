import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.colors.white};
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    margin: 0;
  }

`

export default GlobalStyles;
