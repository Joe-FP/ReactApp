import React, { Component } from 'react';
import SongsContainer from './containers/SongsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='songlist-container'>
        <SongsContainer />
      </div>
    );
  }
}

export default App;
