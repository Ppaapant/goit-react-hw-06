import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import css from "./App.module.css";
import { useSelector } from "react-redux";



const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
