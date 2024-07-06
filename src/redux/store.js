import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from './universitiesSlice';

export const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});