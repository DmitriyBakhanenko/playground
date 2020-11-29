import React from 'react';

export default function Player({ SongToPlayer }) {
  return (
    <div className='ui middle aligned center aligned grid'>
      <div className='column'>
        <div className='ui left floated content'>
          <h4 className='ui blue icon header'>
            <i className='play circle outline icon'></i>
            <p>Playing now</p>
          </h4>
        </div>
        <div className='content'>
          <div className='header'>
            <h2>{SongToPlayer.title}</h2>
            <p>{SongToPlayer.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
