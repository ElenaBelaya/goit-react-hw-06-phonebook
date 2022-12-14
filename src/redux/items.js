import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.items = action.payload;
    },
    addContacts: (state, { payload: item }) => {
      state.items = [...state.items, item];
    },
    deleteContact(state, { payload: id }) {
      state.items = state.items.filter(contact => contact.id !== id);
    },
  },
});

export const { setContacts, addContacts, deleteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
