import { PlaylistAdd } from "@styled-icons/material-outlined/PlaylistAdd";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { OpenInNew } from "@styled-icons/material-outlined/OpenInNew";
import { Timer } from "@styled-icons/material-outlined/Timer";
import { useDispatch, useSelector } from "react-redux";

import * as Styled from "./styles";
import { Heading } from "../Heading";
import { addTrack, removeTrack } from "../../store/ducks/favorites";
import { useState } from "react";

export const TrackCard = ({
  id,
  cover,
  artist,
  title,
  trackLink,
  audioLink,
  duration,
  isFavorite,
}) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.favoriteTracks);
  const [fade, setFade] = useState(false);

  const toMinutes = duration % (60 * 60);
  const minutes = Math.floor(toMinutes / 60);

  const toSeconds = toMinutes % 60;
  const seconds = Math.ceil(toSeconds);

  const durationInMinutes = `${("0" + minutes).slice(-2)}:${(
    "0" + seconds
  ).slice(-2)}`;

  const handleClick = () => {
    setFade(true);
    if (isFavorite) {
      dispatch(removeTrack(id));
    } else {
      if (tracks.some((track) => track.id === id)) return;
      dispatch(
        addTrack([{ id, cover, artist, title, trackLink, audioLink, duration }])
      );
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Cover>
        <img src={cover} alt={title} />

        <Styled.IconsContainer>
          <Styled.FavoriteButton
            onClick={handleClick}
            onAnimationEnd={() => setFade(false)}
          >
            <span className={fade ? "fade" : ""}>
              {isFavorite ? <Delete /> : <PlaylistAdd />}
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
