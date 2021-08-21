import styled, { css } from "styled-components";

import { Title as HeadingStyles } from "../Heading/styles";

const wrapperChanger = (menuVisible, theme) => css`
  left: ${menuVisible ? "0" : "-30rem"};
  overflow-y: ${menuVisible ? "auto" : "hidden"};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? "0" : "-32rem"};
  }
`;

export const Wrapper = styled.div`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 2;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    overflow-y: auto;
    ${wrapperChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  margin: 3rem auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
    }
  `}
`;

const buttonChanger = (menuVisible, theme) => css`
  left: ${menuVisible ? "26rem" : "1rem"};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? "26rem" : "1rem"};
  }
`;

export const OpenClose = styled.a`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 3;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 0.3s ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
