import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form
        className="SearchForm"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(inputValue);
          setInputValue('');
        }}
      >
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
