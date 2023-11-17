import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunks,
  deleteContactsThunks,
  addContactsThunks,
} from './operations';


const initialState = { items: [], isLoading: false, error: null };



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    [getContactsThunks.pending]: state => {
      state.isLoading = true;
    },
    [getContactsThunks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [getContactsThunks.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContactsThunks.pending]: state => {
      state.isLoading = true;
    },
    [addContactsThunks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [addContactsThunks.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContactsThunks.pending]: state => {
      state.isLoading = true;
    },
    [deleteContactsThunks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [deleteContactsThunks.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});



export const contactReducer = contactsSlice.reducer;
