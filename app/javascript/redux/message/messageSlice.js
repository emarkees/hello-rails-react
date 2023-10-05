import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: [],
  status: 'idle',
};

export const fetchGreetingData = createAsyncThunk('greetings/fetch', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings/random'); // Update with your API endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const greetingsSlice = createSlice({
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
        state.greetings = action.payload;
      })
      .addCase(fetchGreetingData.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default greetingsSlice.reducer;
