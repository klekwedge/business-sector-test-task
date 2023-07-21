/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../../hooks/http.hook';
import { CurrentPostsState } from './postsSlice.types';

const initialState: CurrentPostsState = {
    posts: [],
    postsLoadingStatus: 'loading',
    searchInput: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    const { request } = useHttp();
    return request('https://jsonplaceholder.typicode.com/posts?_limit=50');
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.postsLoadingStatus = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log('!!121');
                state.postsLoadingStatus = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.postsLoadingStatus = 'error';
            })
    },
});

const { actions, reducer } = postsSlice;

export const { changeSearchInput } = actions

export default reducer;