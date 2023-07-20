import { configureStore } from '@reduxjs/toolkit';
import posts from '../slices/postsSlice/postsSlice';

const store = configureStore({
  reducer: {
    posts
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;