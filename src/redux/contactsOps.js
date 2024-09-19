import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("https://66eca3752b6cf2b89c5ef63f.mockapi.io/contacts");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await axios.post(
                "https://66eca3752b6cf2b89c5ef63f.mockapi.io/contacts",
                contact,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const { data } = await axios.delete(
                `https://66eca3752b6cf2b89c5ef63f.mockapi.io/contacts/${contactId}`
            );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);