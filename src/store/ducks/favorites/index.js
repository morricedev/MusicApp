import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addTrack = createAction("ADD_TRACK");
export const removeTrack = createAction("REMOVE_TRACK");

export default createReducer(INITIAL_STATE, {
  [addTrack.type]: (state, action) => [...state, ...action.payload],
  [removeTrack.type]: (state, action) =>
    state.filter((track) => track.id !== action.payload),
});
