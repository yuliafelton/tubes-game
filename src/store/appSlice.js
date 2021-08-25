import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTubes: (state, action) => {
      state.tubes = action.payload;
    },
    setSelectedTube: (state, action) => {
      if (state.selectedTube === action.payload) {
        state.selectedTube = null;
      } else {
        state.selectedTube = action.payload;
      }
    },
    addTube: (state, action) => {
      state.tubes.push(action.payload);
    }
  }});

export const {
  setTubes,
  setSelectedTube,
  addTube
} = appSlice.actions;

export default appSlice.reducer;
