import React from 'react';

import './VideoItem.css';

export default function VideoItem({ video }) {
  return (
    <div className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt=''
      />
      <div className='content'>
        <div className='header' href='/'>
          {video.snippet.title}
        </div>
        <div className='description'>{video.snippet.description}</div>
      </div>
    </div>
  );
}
