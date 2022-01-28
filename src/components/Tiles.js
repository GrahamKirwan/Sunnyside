import { StyledTiles, Tile } from "./styles/Tiles.styled";

function Tiles(props) {
  return (
    <StyledTiles>
      <Tile image={props.data[0].image}>
        <h3>{props.data[0].title}</h3>
        <p>{props.data[0].para}</p>
      </Tile>
      <Tile image={props.data[1].image}>
        <h3>{props.data[1].title}</h3>
        <p>{props.data[1].para}</p>
      </Tile>
    </StyledTiles>
  );
}

export default Tiles;