import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [visible, setVisible] = useState(false);
  const UiFormRef = useRef();

  useEffect(() => {
    const onClickEvent = event => {
      if (UiFormRef.current.contains(event.target)) {
        return;
      }
      setVisible(false);
    };

    document.body.addEventListener('click', onClickEvent);

    return () => {
      document.body.removeEventListener('click', onClickEvent);
    };
  }, []);

  const rendOptions = options.map(option => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={UiFormRef} className='ui form'>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div
          onClick={() => setVisible(!visible)}
          className={`ui selection dropdown ${visible ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${visible ? 'visible transition' : ''}`}>
            {rendOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
