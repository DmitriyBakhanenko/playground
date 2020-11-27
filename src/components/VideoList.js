import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  return (
    <div className='ui relaxed divided list'>
      {videos.map(video => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}
