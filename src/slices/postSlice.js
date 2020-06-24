import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  hasError: false,
  posts: [],
  post: {}
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPosts(state) {
      state.loading = true;
    },
    getSuccess(state, {payload}) {
      state.loading = false;
      state.posts = payload;
    },
    getError(state, {payload}) {
      state.loading = false;
      state.hasError = true;
      console.log(payload);
    }
  }
});

export const postSelector = state => state;
export const { getPosts, getSuccess, getError } = postSlice.actions;
export default postSlice.reducer;

export function fetch() {
  return async dispatch => {
    dispatch(getPosts());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = response.data;
      dispatch(getSuccess(data));
    } catch (error) {
      dispatch(getError(error));
    }
  }
}