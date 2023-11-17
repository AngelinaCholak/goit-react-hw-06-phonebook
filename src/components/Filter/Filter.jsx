import React, { useState } from 'react';
import css from './Filter.module.css';

const Filter = ({ handleFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setFilterValue(value);
    handleFilterChange(value);
  };

  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        value={filterValue}
        onChange={handleChange}
        placeholder="Filter contacts"
      />
      <p className={css.filterLabel}>Find Contacts by name</p>
    </div>
  );
};

export default Filter;
