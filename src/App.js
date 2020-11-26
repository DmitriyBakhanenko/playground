import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className='app container'>
        <div className='ui container' style={{ marginTop: '50px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}
