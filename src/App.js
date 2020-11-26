// import React from 'react';
// import SeasonDisplay from './SeasonDispay';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Your current possition</h1>
//       <SeasonDisplay />
//     </div>
//   );
// }

// export default App;

// class App extends React.Component {
//   state = {
//     time: null
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: new Date().toLocaleTimeString() });
//     }, 1000);
//   }

//   render() {
//     return <h1>The time is: {this.state.time}</h1>;
//   }
// }

// export default App;

import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <h1>The time is: {time}</h1>;
}
