import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  universities: [],
  status: 'idle',
};

export const fetchUniversities = createAsyncThunk(
  'universities/fetchUniversities',
  async () => {
    const response = await fetch('http://universities.hipolabs.com/search?country=Australia');
    return await response.json();
  }
);

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    deleteLast: (state) => {
      state.universities.pop();
    },
    addFirstToLast: (state) => {
      if (state.universities.length > 0) {
        state.universities.push(state.universities[0]);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.universities = action.payload;
      })
      .addCase(fetchUniversities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteLast, addFirstToLast } = universitiesSlice.actions;

export default universitiesSlice.reducer;
