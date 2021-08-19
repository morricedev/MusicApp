import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import { useState } from "react";
import { LogoLink } from "../LogoLink";
import { MenuLinks } from "../MenuLinks";
import * as Styled from "./styles";

export const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = (event) => {
    event.preventDefault();
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleToggleMenu}
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink />
          </Styled.Logo>
          <MenuLinks />
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
