import {StyledFooter} from "./styles/Footer.styled.js"

export default function Footer() {
  return (
    <StyledFooter>
      <img src="../assets/logo.svg"></img>
      <nav>
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
          </ul>
      </nav>
      <nav>
          <ul>
              <li><a href="#"><img src="../assets/icon-facebook.svg"></img></a></li>
              <li><a href="#"><img src="../assets/icon-instagram.svg"></img></a></li>
              <li><a href="#"><img src="../assets/icon-twitter.svg"></img></a></li>
              <li><a href="#"><img src="../assets/icon-pinterest.svg"></img></a></li>
          </ul>
      </nav>

    </StyledFooter>
  );
}