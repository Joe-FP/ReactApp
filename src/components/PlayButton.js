import React from 'react';
import './PlayButton.css'

const PlayButton = (props) => {

    return(
      <div className="btn-container">
        <a href="https://www.imdb.com/showtimes/cinema/UK/ci66293599/UK/CW60RF" className="play-btn" onClick={() => this.play()}>Play &raquo;</a>
      </div>
    )
  }

export default PlayButton;
