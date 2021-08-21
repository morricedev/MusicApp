import { configureStore } from "@reduxjs/toolkit";

import tracksReducer from "./ducks/tracks";
import favoritesReducer from "./ducks/favorites";

export default configureStore({
  reducer: {
    tracks: tracksReducer,
    favoriteTracks: favoritesReducer,
  },
});
