import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";


const contactsPersistConfig = {
	key: "contacts",
	storage,
  };

  const filtersPersistConfig = {
	key: "filters",
	storage,
  };

export const store = configureStore({
    reducer: {
		contacts: persistReducer(contactsPersistConfig, contactsReducer),
		filters: persistReducer(filtersPersistConfig, filtersReducer),
	   }
});

export const persistor = persistStore(store);

