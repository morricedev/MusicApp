import { configureStore } from "@reduxjs/toolkit";

import tracksReducer from "./ducks/tracks";

export default configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
