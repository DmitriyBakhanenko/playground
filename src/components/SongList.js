import React from 'react';

export default function SongList({ songs, onSongSelect }) {
  const songList = songs.map((song, idx) => (
    <div className='ui internally celled list' key={idx}>
      <div
        className='item'
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <div className='content'>
          <div className='header' style={{ marginBottom: '3px' }}>
            <h1>{song.title}</h1>
          </div>
          Duration: {song.duration}
        </div>
        <div className='content' style={{ display: 'flex' }}>
          <div
            onClick={() => onSongSelect(song)}
            className='ui primary button'
            style={{ alignSelf: 'center' }}
          >
            Play
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{songList}</div>;
}
