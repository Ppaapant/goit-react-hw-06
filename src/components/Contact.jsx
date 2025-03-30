import css from "../App.module.css";

import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactitem}>
      <div className="contact-info">
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {number}</p>
      </div>
      <button className={css.deletebutton} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
