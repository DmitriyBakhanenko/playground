import React from 'react';
// import Accordian from './Accordian';
import Search from './Search';

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

export default function App() {
  return (
    <div>
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  );
}
