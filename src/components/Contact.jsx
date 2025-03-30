import css from "../App.module.css";
import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { removeContact } from "../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    
    <li className={css.contactitem}>
      <div className="contact-info">
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {number}</p>
      </div>
      <button onClick={() => dispatch(removeContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
