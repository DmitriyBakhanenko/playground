import { combineReducers } from 'redux';

const initialSongs = [
  { title: 'Tik Tok', duration: '3:35' },
  { title: 'I like it', duration: '4:05' },
  { title: 'Replay', duration: '2:55' },
  { title: 'Like a G6', duration: '3:22' }
];

const songsReducer = (songs = initialSongs, action) => {
  if (action.type === 'ADD_SONG') return [...songs, action.payload];
  return songs;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
