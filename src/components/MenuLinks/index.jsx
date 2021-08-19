import * as Styled from "./styles";

export const MenuLinks = () => {
  return (
    <Styled.Wrapper>
      <Styled.Link href={"/"}>Início</Styled.Link>
      <Styled.Link href={"/favorites"}>Favoritos</Styled.Link>
    </Styled.Wrapper>
  );
};
