import React, { Component } from 'react';
// import axios from 'axios';

import SearchBar from './lessons/youtube/components/SearchBar';
import { youtubeApi } from './lessons/youtube/components/Youtube';
import VideoList from './lessons/youtube/components/VideoList';
import VideoDetail from './lessons/youtube/components/VideoDetail';

export default class App extends Component {
  state = {
    items: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      items: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ width: '70vw', margin: '20px auto' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.items}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
