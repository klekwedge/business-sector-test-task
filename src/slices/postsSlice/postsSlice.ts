/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import useHttp from '../../hooks/http.hook';
import { CurrentPostsState } from './postsSlice.types';

const initialState: CurrentPostsState = {
    posts: [],
    postsLoadingStatus: 'loading'
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', (url: string) => {
    const { request } = useHttp();
    return request(url);
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.postsLoadingStatus = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postsLoadingStatus = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.postsLoadingStatus = 'error';
            })
    },
});

const { actions, reducer } = postsSlice;

export default reducer;
// export const {

// } = actions;