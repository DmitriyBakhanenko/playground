import React, { useState } from 'react';

// import Accordian from './Accordian';
// import Search from './Search';
import Dropdown from './Dropdown';

// const items = [
//   {
//     id: 1,
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     id: 2,
//     title: 'Why use React?',
//     content: 'React is a favorite javascript library among engineers'
//   },
//   {
//     id: 3,
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   }
// ];

const options = [
  {
    label: 'Red Blood Color ',
    value: 'red'
  },
  {
    label: 'The Color of Grass',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}
