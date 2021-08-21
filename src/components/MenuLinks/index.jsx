import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const MenuLinks = () => {
  return (
    <Styled.Wrapper>
      <Link to={"/"}>
        <Styled.Link>Início</Styled.Link>
      </Link>
      <Link to={"/favorites"}>
        <Styled.Link>Favoritos</Styled.Link>
      </Link>
    </Styled.Wrapper>
  );
};
