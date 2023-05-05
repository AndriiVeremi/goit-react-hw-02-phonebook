import React from 'react';
import './ContactList.css';

const ContactList = ({ value, onDeleteContacts }) => (
  <ul className="Contact__list">
    {value.map(({ id, name, number }) => (
      <li className="Contact__item" key={id}>
        <p className="Contact__name">{name} :</p>
        <p className="Contact__text">{number}</p>
        <button
          className="Contact__btn"
          type="button"
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
