import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contact/contact.reducer';

export const App = () => {

  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

    const handleAddContact = contactData => {
      const hasDuplicates = contacts.some(
        contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
      );

      if (hasDuplicates) {
        alert(`Oops, produc with title '${contactData.title}' already exists!`);
        return;
      }

      const finalContact = {
        ...contactData,
        id: nanoid(),
      };

      dispatch(addContact(finalContact));
    };
  

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));

  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <PhoneBook handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Contacts
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
