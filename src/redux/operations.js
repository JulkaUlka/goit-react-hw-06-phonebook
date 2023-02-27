import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: 'https://63fcb2a6859df29986c27525.mockapi.io/',
   
  });


export const getContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await instance.get("/contacts");
  return response.data;
});

export const deleteContact = createAsyncThunk("contacts/delete", async (contactId, ) => {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data;
  });

  export const addContact = createAsyncThunk("contacts/add", async (contact ) => {
    const response = await instance.post(`/contacts`, contact);
    return response.data;
  });


