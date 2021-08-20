import React from "react";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import * as Styled from "./styles";

export const BaseTemplate = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Menu />

      <Styled.HeaderContainer>
        <Header description="Seu melhor site de música" />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
    </Styled.Wrapper>
  );
};
