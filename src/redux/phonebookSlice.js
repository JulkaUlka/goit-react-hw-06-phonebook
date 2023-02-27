import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const contactReducer = contactSlice.reducer;
