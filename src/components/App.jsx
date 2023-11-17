import React, { useState } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = value => {
    setFilter(value);
  };

  return (
    <div className={css.container}>
      <PhoneBook />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Contacts />
    </div>
  );
};

export default App;
