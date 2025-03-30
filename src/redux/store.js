import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filtersSlice";
import {  persistReducer } from "redux-persist";


const contactsPersistConfig = {
	key: "contacts",
	storage,
  };

export const store = configureStore({


	
    reducer: {
		contacts: persistReducer(contactsPersistConfig, contactsReducer),
		filters: filtersReducer,
	   }
});



