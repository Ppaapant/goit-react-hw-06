import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";


const App = () => {
  const dispatch = useDispatch();
 const contacts = useSelector(state => state.contacts.items);
 const filter = useSelector(state => state.filters.name);

 const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes((filter ?? "").toLowerCase())
);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={(newContact) => dispatch(addContact(newContact))} />
      
      <SearchBox filter={filter} onFilterChange={(e) => dispatch(setFilter(e.target.value))} />
      <ContactList contacts={filteredContacts} onDelete={(id) => dispatch(removeContact(id))} />
    </div>
  );
};

export default App;
