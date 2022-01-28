import {
  StyledInfo,
  Content,
  ImageContainer,
} from "./styles/InfoSection.styled";

function InfoSection(props) {
  let color = props.data.color;

  return (
    <StyledInfo>
      {props.data.id % 2 === 0 && (
        <ImageContainer>
          <img src={props.data.image}></img>
        </ImageContainer>
      )}
      <div>
        <Content>
          <h2>{props.data.title}</h2>
          <p>{props.data.para}</p>
          <a href="#" color={color}>Learn more</a>
        </Content>
      </div>

      {props.data.id % 2 !== 0 && (
        <ImageContainer>
          <img src={props.data.image}></img>
        </ImageContainer>
      )}
    </StyledInfo>
  );
}

export default InfoSection;
