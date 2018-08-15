import React from 'react';
import Song from './Song';
import PlayButton from './PlayButton';
import './SongList.css'

const SongList = (props) => {

  const songs = props.songs.map((song, index) => {
    return (
      <tr className='table-row' key={index}>
        <td className='table-data'> {index+1}</td>
        <td className='table-data'><Song song={song} /></td>
        <td>
          <button
            onClick='playSound({props.songs[0].link[1].attributes.href})'
            className="play-btn">Play!</button>
        </td>
      </tr>
    )
  })

  const playSound = function(url){
    console.log(url);
    var snd = new Audio(url);
    snd.play();
  }

  return (
      <table className='song-table'>
        {songs}
      </table>
  )

}

export default SongList



// id={props.songs[0].link[1].attributes.href}
