import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export function SetPosts(post) {
  return (dispath, getState) => {
    dispath(postSlice.actions.getPosts(post));
  };
}
