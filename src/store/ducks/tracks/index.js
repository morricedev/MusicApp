import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  tracks: [],
  loading: false,
};

export const loadTracks = createAction("LOAD_TRACKS");
export const searchTracks = createAction("SEARCH_TRACKS");
export const resetTracks = createAction("RESET_TRACKS");
export const startRequest = createAction("START_REQUEST");
export const finishRequest = createAction("FINISH_REQUEST");

export default createReducer(INITIAL_STATE, {
  [loadTracks.type]: (state, action) => ({
    ...state,
    tracks: [...state.tracks, ...action.payload],
  }),
  [searchTracks.type]: (state, action) => ({
    ...state,
    tracks: [...state.tracks, ...action.payload],
  }),
  [resetTracks.type]: (state) => ({
    ...state,
    tracks: [],
  }),
  [startRequest.type]: (state) => ({
    ...state,
    loading: true,
  }),
  [finishRequest.type]: (state) => ({
    ...state,
    loading: false,
  }),
});
