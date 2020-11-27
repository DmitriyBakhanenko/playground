import React, { Component } from 'react';
// import axios from 'axios';

import SearchBar from './components/SearchBar';
import { youtubeApi } from './components/Youtube';
import VideoList from './components/VideoList';

export default class App extends Component {
  state = {
    items: []
  };

  onTermSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ items: response.data.items });
  };

  render() {
    return (
      <div style={{ width: '70vw', margin: '20px auto' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.items} />
      </div>
    );
  }
}
