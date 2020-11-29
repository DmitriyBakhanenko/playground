import React, { useState } from 'react';

import SearchBar from './SearchBar';
import { youtubeApi } from './Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async term => {
    const { data } = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    setItems(data.items);
    setSelectedVideo(data.items[0]);
  };

  return (
    <div style={{ width: '70vw', margin: '20px auto' }}>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={items}
              onVideoSelect={e => setSelectedVideo(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
