import React from "react";
import { TrackCard } from "../TrackCard";
import * as Styled from "./styles";

export const TrackGrid = ({ tracks = [] }) => {
  return (
    <Styled.Wrapper>
      {!tracks.length && (
        <Styled.NotFound>Nenhuma música encontrada.</Styled.NotFound>
      )}

      <Styled.Grid>
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackCard key={`track-card-${track.id}`} {...track} />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
