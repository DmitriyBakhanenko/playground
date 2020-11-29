import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongList from './SongList';
import Player from './Player';

const App = ({ songs, SongToPlayer, selectSongDispatch }) => {
  const onSongSelect = song => selectSongDispatch(song);

  return (
    <div className='ui grid'>
      <div className='eight wide column'>
        <SongList songs={songs} onSongSelect={onSongSelect} />
      </div>
      <div className='eight wide column'>
        {SongToPlayer ? <Player SongToPlayer={SongToPlayer} /> : null}
      </div>
    </div>
  );
};

const dispatchStateToProps = dispatch => ({
  selectSongDispatch: song => dispatch(selectSong(song))
});

const mapStateToProps = ({ songs, selectedSong }) => ({
  songs: songs,
  SongToPlayer: selectedSong
});

export default connect(mapStateToProps, dispatchStateToProps)(App);
