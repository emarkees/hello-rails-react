import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  status: 'idle',
};

export const fetchGreetingData = createAsyncThunk('greetings/fetchGreetingData', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/greetings/random_greeting');
    return response.data
  } catch (error) {
    throw new Error(error.message);
  }
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetingData.fulfilled, (state, action) => {
        state.status = 'success';
        state.greeting = action.payload.greeting;
      })      
      .addCase(fetchGreetingData.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default greetingSlice.reducer;
