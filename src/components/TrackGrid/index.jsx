import React from "react";
import { TrackCard } from "../TrackCard";
import * as Styled from "./styles";

export const TrackGrid = ({
  tracks = [],
  loading = false,
  isFavorite = false,
}) => {
  return (
    <Styled.Wrapper>
      {!tracks.length && !loading && (
        <Styled.NotFound>Nenhuma música encontrada.</Styled.NotFound>
      )}

      <Styled.Grid>
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackCard
              key={`track-card-${track.id}`}
              isFavorite={isFavorite}
              {...track}
            />
          ))}
        <span id="ward" />
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
