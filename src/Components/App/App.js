import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
      { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
      { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
      playlistName: 'My Playlist',
      playlistTracks: [{ name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 5 },
      { name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 6 },
      { name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 7 }]

    };
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlayListName(name) {
    this.setState({ playlistName: name });
  }

  savePlayList() {
    const tractUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onSearch={this.onSearch} />
            <Playlist playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
              onSave={this.savePlayList}
              />
          </div>
        </div>
      </div>
    );
  }
}


