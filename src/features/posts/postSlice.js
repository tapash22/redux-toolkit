import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchPosts = createAsyncThunk("posts/fatchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fatchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fatchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });

    builder.addCase(fatchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
