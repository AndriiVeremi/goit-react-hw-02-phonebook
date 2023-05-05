import React from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.css';

// const nameId = nanoid();

const ContactForm = ({ value, onAddToList }) => {
  const nameId = nanoid();
  return (
    <form className="Form" autoComplete="off" onSubmit={onAddToList}>
      <label className="Label" htmlFor={nameId}>
        Name :{' '}
        <input
          className="Form__input"
          id={nameId}
          type="text"
          value={value.value}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className="Label" htmlFor={nameId}>
        Number :{' '}
        <input
          className="Form__input"
          type="tel"
          value={value.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className="Btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
