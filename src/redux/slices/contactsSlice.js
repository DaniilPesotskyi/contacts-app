import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialState from '../initialState';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,
  reducers: {
    createType: (state, { payload }) => {
      state.contactTypes.push({
        id: nanoid(),
        name: payload.name,
        backgroundColor: payload.color,
      });
      console.log(state.contactTypes)
    },
    createContact: (state, { payload }) => {
      state.contacts.items.push({
        id: nanoid(),
        name: payload.name,
        number: payload.number,
        type: payload.type,
      });
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== payload),
        },
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact, deleteContact, createType } = contactsSlice.actions;
