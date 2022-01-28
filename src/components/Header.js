import { StyledHeader, Nav, Logo, List, Button } from "./styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="../assets/logo.svg"></Logo>
        <List>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <Button href="/">Contact</Button>
          </li>
        </List>
      </Nav>
      <div>
        <h1>WE ARE CREATIVES</h1>
        <img src="../assets/icon-arrow-down.svg"></img>
      </div>
    </StyledHeader>
  );
}

export default Header;
