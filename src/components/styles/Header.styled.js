import styled from "styled-components";

export const StyledHeader = styled.header `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap');

    padding: 0;
    margin: 0;
    /* width: 100vw; */
    height: 100vh;
    background-image: url("../assets/desktop/image-header.jpg");
    background-size: cover;
    background-position: center;
    font-family: 'Barlow', serif;


    h1 {
        font-size: 100px;
        color: ${({theme}) => theme.colors.white};
        font-family: 'Fraunces', serif;
        text-align: center;
        

        @media (max-width: ${({ theme }) => theme.mobile}){
      font-size: 50px;
      letter-spacing: 5px;

  }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.mobile}){
    background-image: url("../assets/mobile/image-header.jpg");
        height: 80vh;
        width: 100%;
  }
`

export const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    padding: 50px;
`

export const Logo = styled.img `
    align-self: center;
`

export const List = styled.ul `
    display: flex;
    list-style: none;
    align-items: center;

    li, a {
        color: ${({theme}) => theme.colors.white};
        padding-left: 25px;
        text-decoration: none;
    }

    @media (max-width: ${({ theme }) => theme.mobile}){
      display: none;
  }
`

export const Button = styled.a `
    color: ${({theme}) => theme.colors.blue2} !important;
    background-color: #fff;
    padding: 15px 30px !important;
    margin-left: 25px;
    border-radius: 100px;
    text-transform: uppercase;
    font-family: 'Fraunces', serif;

    &:hover {
        color: ${({theme}) => theme.colors.white} !important;
        background-color: rgba(255, 255, 255, 0.3);
    }

`