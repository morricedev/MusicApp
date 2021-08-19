import { LogoLink } from "../LogoLink";
import * as Styled from "./styles";

export const Header = ({ description }) => {
  return (
    <Styled.Container>
      <LogoLink colorDark={true} />
      <Styled.Content>
        <p>{description}</p>
      </Styled.Content>
    </Styled.Container>
  );
};
