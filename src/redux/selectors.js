import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;

export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const getIsloading = state => state.contacts.isLoading;