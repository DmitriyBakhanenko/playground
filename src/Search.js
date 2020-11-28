import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [term, setTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      });

      setSearchResults(data.query.search);
    };

    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderedResults = searchResults.map(result => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content' style={{ display: 'flex' }}>
          <a
            style={{ alignContent: 'flex-end' }}
            className='ui button'
            href={'https://en.wikipedia.org/?curid=' + result.pageid}
            target='_blank'
            rel='noopener noreferrer'
          >
            VISIT
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {result.snippet.replace(/<\/?[^>]+(>|$)/g, '')}
        </div>
      </div>
    );
  });

  return (
    <div style={{ width: '70vw', margin: 'auto' }}>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}
