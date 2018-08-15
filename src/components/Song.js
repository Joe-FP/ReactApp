import React from 'react';
// import './Movie.css';

class Song extends React.Component {

  constructor(props){
    super();
    this.state = {
    }
  }

  render(){
    return (
      <p>{this.props.song.title.label}</p>
    )
  }
}

export default Song;
