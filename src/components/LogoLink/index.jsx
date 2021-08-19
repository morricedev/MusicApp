import * as Styled from "./styles";
import { Heading } from "../Heading";

export const LogoLink = ({ colorDark = false }) => {
  return (
    <Heading colorDark={colorDark} size="small">
      <Styled.Container href="/">MusicApp</Styled.Container>
    </Heading>
  );
};
