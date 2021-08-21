import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TrackGrid } from "../../components/TrackGrid";
import { BaseTemplate } from "../../templates/Base";
import { resetTracks } from "../../store/ducks/tracks";

export const Favorites = () => {
  const tracks = useSelector((state) => state.favoriteTracks);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(resetTracks());
  }, [dispatch]);

  return (
    <BaseTemplate>
      <TrackGrid tracks={tracks} isFavorite={true} />
    </BaseTemplate>
  );
};
