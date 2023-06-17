import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setCurrentType: (state, { payload }) => {
      state.activeTypes.push(payload)
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
