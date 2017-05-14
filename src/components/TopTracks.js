// IMPORTS
import React from 'react';

// FUNCTIONS
const TopTracks = (props) => (
  <div>
    <h2>
      Top Tracks
    </h2>
    {props.tracks.map((track) =>
      <div
        className="top-track-item"
        key={track.id}
      >
        <img
          alt="album-cover"
          className="TopTracks-image"
          src={track.album.images[0].url}
        />
        <audio controls src={track.preview_url} />
        <div className="top-track-name">
          {track.name}
        </div>
      </div>
    )}
  </div>
);

// PROPTYPES

// EXPORTS
export default TopTracks;
