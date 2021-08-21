import * as Styled from "./styles";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";

export const LogoLink = ({ colorDark = false }) => {
  return (
    <Heading colorDark={colorDark} size="small">
      <Styled.Container>
        <Link to="/">MusicApp</Link>
      </Styled.Container>
    </Heading>
  );
};
