

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contact/filter.reducer';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        onChange={handleChange}
        placeholder="Filter contacts"
      />
      <p className={css.filterLabel}>Find Contacts by name</p>
    </div>
  );
};

export default Filter;
