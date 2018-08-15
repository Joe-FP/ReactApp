import React from 'react';
import SongList from '../components/SongList'

class SongsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    // this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    });

    request.send();
  }

  // handleSongSelected(index) {
  //   const selectedSong= this.state.songs[index];
  //   this.setState({currentSong: selectedSong})
  // }

  render(){
    return (
      <div>
        <h2>Top of the Charts</h2>
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongsContainer;
