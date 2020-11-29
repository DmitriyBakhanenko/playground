import React, { useState } from 'react';

export default function Accordian({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitileClick = idx => {
    if (activeIndex === idx) return setActiveIndex(null);
    setActiveIndex(idx);
  };

  const renderedItems = items.map((item, idx) => {
    const active = idx === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.id}>
        <div className={`title ${active}`} onClick={() => onTitileClick(idx)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className='ui styled accordion'>{renderedItems}</div>
    </>
  );
}
