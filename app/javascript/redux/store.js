import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './message/messageSlice';

const store = configureStore ({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;