import styled, { css } from "styled-components";

export const SearchContainer = styled.form`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 1rem;
      border: none;
      border-radius: ${theme.spacings.xsmall};
      padding: 0.5rem;
      cursor: pointer;
      background-color: ${theme.colors.white};

      svg {
        width: 2.5rem;
        color: ${theme.colors.primary};
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        svg {
          color: ${theme.colors.secondary};
        }
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};
    border: 1px solid ${theme.colors.darkText};

    &:disabled {
      outline: 0.1rem solid ${theme.colors.secondary};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
  `}
`;
