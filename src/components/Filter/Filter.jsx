import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="Lable__filter">
    Find contacts by name
    <input
      className="Input__filter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
