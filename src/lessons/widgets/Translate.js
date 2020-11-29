import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const translateOptions = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'English',
    value: 'hi'
  }
];

export default function Translate() {
  const [language, setLanguage] = useState(translateOptions[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={translateOptions}
        label={'Select a Language'}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}
