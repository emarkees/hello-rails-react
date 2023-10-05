import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  greetings: [],
  status: [],
};

export const fetchGreetingData = createAsyncThunk('', async () => {
  try {
    const response = await axios.get('url for backend')
    const greetingWithId = response.data.map((greeting) => ({
      id: greeting.id
    }));
    return greetingWithId;
  } catch (error) {
    throw new Error(error.message)
  }
})

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchGreetingData.pending, (state) => {
      state.status = 'loading';
    })
   . addCase(fetchGreetingData.fulfilled, (state, action) => {
      state.status = 'success';
    })
    .addCase(fetchGreetingData.rejected, (state) => {
      state.status = 'rejected'
    })
  },
});

export default greetingsSlice.reducer