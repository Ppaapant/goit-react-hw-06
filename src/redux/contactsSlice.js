import { createSlice } from "@reduxjs/toolkit";
const STORAGE_KEY = "contacts";
const initContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const initialState = {
    items: JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? initContacts,
}

const contactsSlice = createSlice({
name: 'contacts',
initialState,

reducers:{
addContact: (state,action) => {
    state.items.push(action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items)); 
},
removeContact: (state, action) => {
    state.items = state.items.filter(contact => contact.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
}

}
})

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;



// export const addContact = createAction("contacts/addContact");

// export const removeContact = createAction("contacts/removeContact");


// export default function filterSliceReducer(state = initialState, action) {
//  switch (action.type){
//     case "contacts/addContact":
//       return {
//         ...state,
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
//       }

//   default:
//     return state;
//   }

// }