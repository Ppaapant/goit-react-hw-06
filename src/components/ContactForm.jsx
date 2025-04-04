import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactsSlice";


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
    const initialValues = {
         name: "",
         number: ""
         };
  
    const validationSchema = Yup.object({
      name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Обов’язкове поле"),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат: 123-45-67")
        .required("Обов’язкове поле"),
    });
  
    const handleSubmit = (values, { resetForm }) => {
      const isDuplicate = contacts.some(contact => 
        contact.name.toLowerCase() === values.name.toLowerCase()
      );
  
      if (isDuplicate) {
        alert("Контакт вже існує!");
        return;
      }
  
      const newContact = { id: nanoid(), ...values };
      dispatch(addContact(newContact));
      resetForm();
    };
    
    return (
       
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        
      >
        <Form>
          <label >
            name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
      
    );
  };

export default ContactForm;