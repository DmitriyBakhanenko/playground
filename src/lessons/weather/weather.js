import React from 'react';
import SeasonDisplay from './SeasonDispay';

function App() {
  return (
    <div className='App'>
      <h1>Your current possition</h1>
      <SeasonDisplay />
    </div>
  );
}

class AppClass extends React.Component {
  state = {
    time: null
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <h1>The time is: {this.state.time}</h1>;
  }
}
