import * as Styled from "./styles";

export const Loading = ({ isLoading }) => {
  return isLoading && <Styled.Wrapper />;
};
