import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/contact.reducer';
import PropTypes from 'prop-types';
import css from './contacts.module.css';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const selectContacts = state => state.contactsStore.contacts;
  const contacts = useSelector(selectContacts);

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : null;

  return (
    <div>
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      {filteredContacts !== null && (
        <ul className={css.contactsList}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.deleteButton}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
