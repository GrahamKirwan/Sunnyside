import {
  StyledInfo,
  Content,
  ImageContainer,
} from "./styles/InfoSection.styled";


function InfoSection(props) {

  return (

    <StyledInfo layout={props.data.id % 2 === 0 && 'row-reverse'}>
      <ImageContainer image={props.data.image} imageMobile={props.data.imageMobile} />

      <div>
        <Content>
          <h2>{props.data.title}</h2>
          <p>{props.data.para}</p>
          <a href="#" color={props.data.color}>
            Learn more
          </a>
        </Content>
      </div>
    </StyledInfo>
  );
}

export default InfoSection;
