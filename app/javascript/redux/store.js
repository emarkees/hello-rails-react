import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './message/messageSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
