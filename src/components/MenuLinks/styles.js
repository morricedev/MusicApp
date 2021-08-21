import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Link = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 0.3s ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
