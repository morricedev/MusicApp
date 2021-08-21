import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
  `}
`;
