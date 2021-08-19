import * as Styled from "./styles";

export const Heading = ({
  children,
  colorDark = true,
  as = "h1",
  size = "huge",
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
