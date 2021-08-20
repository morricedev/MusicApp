import api from "../../services/api";
import {
  loadTracks,
  searchTracks,
  startRequest,
  finishRequest,
} from "../ducks/tracks";

export const getAllTracks = ({ index = 0, limit = 9 } = {}) => {
  return (dispatch) => {
    dispatch(startRequest());

    api
      .get(`/editorial/0/charts?index=${index}&limit=${limit}`)
      .then((res) => {
        const tracks = res.data.tracks.data.map((track) => ({
          id: track.id,
          cover: track.album.cover_big,
          artist: track.artist.name,
          title: track.title,
          trackLink: track.link,
          audioLink: track.preview,
          duration: track.duration,
        }));

        dispatch(finishRequest());
        dispatch(loadTracks(tracks));
      })
      .catch(console.log);
  };
};

export const fetchSearchTracks = ({ index = 0, limit = 9, search } = {}) => {
  return (dispatch) => {
    dispatch(startRequest());

    api
      .get(`/search?q=${search}&index=${index}&limit=${limit}`)
      .then((res) => {
        const tracks = res.data.data.map((track) => ({
          id: track.id,
          cover: track.album.cover_big,
          artist: track.artist.name,
          title: track.title,
          trackLink: track.link,
          audioLink: track.preview,
          duration: track.duration,
        }));

        dispatch(finishRequest());
        dispatch(searchTracks(tracks));
      })
      .catch(console.log);
  };
};
