import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  reducers: {
    addFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
