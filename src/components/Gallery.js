import {StyledGallery} from "./styles/Gallery.styled.js"

export default function Gallery(props) {
  const images = props.images;

  return (
    <StyledGallery>
      {images.map((image) => <img src={image} />)}
    </StyledGallery>
  );
}
