import css from "../App.module.css";

import Contact from "./Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactlist}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
