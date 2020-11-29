import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Convert({ text, language }) {
  const [translated, setTranslated] = useState('');
  const [debounceText, setDebounceText] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, 600);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    if (debounceText) {
      axios
        .post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debounceText,
              target: language.value,
              key: process.env.REACT_APP_GOOGLE_TRANSLATE_KEY
            }
          }
        )
        .then(({ data }) =>
          setTranslated(data.data.translations[0].translatedText)
        );
    }
  }, [language, debounceText]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
}
