import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();

    onTermSubmit(term);
    setTerm('');
  };

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onSubmitForm}>
        <div className='ui icon input' style={{ width: '100%' }}>
          <input
            type='text'
            placeholder='Search...'
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <i className='search icon'></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
