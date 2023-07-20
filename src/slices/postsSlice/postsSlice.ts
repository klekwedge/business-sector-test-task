/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useHttp from '../../hooks/http.hook';
import { CurrentPostsState } from './postsSlice.types';

const initialState: CurrentPostsState = {
    posts: [],
    postsLoadingStatus: 'loading'
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    const { request } = useHttp();
    return request('https://jsonplaceholder.typicode.com/posts?_limit=50');
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