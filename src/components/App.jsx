import React from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';

export const App = () => {
  return (
    <div className={css.container}>
      <PhoneBook />
      <Contacts />
    </div>
  );
};

export default App;
