import { combineReducers } from "@reduxjs/toolkit";

import useSlice from "./postSlice";
import themeslice from "./theme";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
  user: useSlice,
  theme: themeslice,
  posts: postSlice,
});

export { rootReducer };
