import { Favorite } from "@styled-icons/material-outlined/Favorite";
import { OpenInNew } from "@styled-icons/material-outlined/OpenInNew";
import { Timer } from "@styled-icons/material-outlined/Timer";

import { useState } from "react";

import { Heading } from "../Heading";
import * as Styled from "./styles";

export const TrackCard = ({
  cover,
  artist,
  title,
  trackLink,
  audioLink,
  duration,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toMinutes = duration % (60 * 60);
  const minutes = Math.floor(toMinutes / 60);

  const toSeconds = toMinutes % 60;
  const seconds = Math.ceil(toSeconds);

  const durationInMinutes = `${("0" + minutes).slice(-2)}:${(
    "0" + seconds
  ).slice(-2)}`;

  return (
    <Styled.Wrapper>
      <Styled.Cover>
        <img src={cover} alt={title} />

        <Styled.IconsContainer>
          <Styled.FavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
            <span className={isFavorite ? "active" : ""}>
              <Favorite />
            </span>
          </Styled.FavoriteButton>

          <Styled.Duration>
            <span className="timer">
              <Timer /> {durationInMinutes}
            </span>
          </Styled.Duration>
        </Styled.IconsContainer>
      </Styled.Cover>

      <Heading as="h2" size="small">
        <a href={trackLink} rel="noreferrer" target="_blank">
          {title} - <span>{artist}</span>
        </a>
      </Heading>

      <Styled.Actions>
        <a
          href={trackLink}
          rel="noreferrer"
          target="_blank"
          title="Abrir no Deezer"
        >
          <OpenInNew />
        </a>
        <audio controls>
          <source src={audioLink} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Styled.Actions>
    </Styled.Wrapper>
  );
};
