import React from 'react';
import Container from './Container';

const SearchBar = ({valueSearch, onInputChange, onEnter, onSearch}) => (
  <Container>
    <input className="search__input" type="text" value={valueSearch} onChange={onInputChange} onKeyDown={onEnter} />
    <button className="search__button" onClick={onSearch}></button>
  </Container>
);

export default SearchBar;
