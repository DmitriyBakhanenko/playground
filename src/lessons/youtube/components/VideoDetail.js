import React from 'react';

export default function VideoDetail({ video }) {
  return (
    <div>
      {video ? (
        <>
          <div className='ui embed'>
            <iframe
              title={video?.snippet?.title || 'no video'}
              src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
            />
          </div>
          <div className='ui segment'>
            <h4 className='ui header'>{video?.snippet?.title || 'no video'}</h4>
            <p>{video?.snippet?.description}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}
