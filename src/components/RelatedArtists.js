// IMPORTS
import React from 'react';

// FUNCTIONS
const exploreArtist = (event, props, artist) => {
  event.preventDefault();
  event.stopPropagation();
  props.onSelectArtist(artist.id);
}

const RelatedArtists = (props) => (
  <div>
    <h2>Related Artists</h2>
    {props.artists.map((artist) =>
      <div
        key={artist.id}
        className="RelatedArtists-container"
        onClick={(event) => exploreArtist(event, props, artist)}
      >
        <img
          as
          alt="related-artist"
          className="RelatedArtists-image"
          src={artist.images[0].url}
        />
        <div className="RelatedArtists-name">
          {artist.name}
        </div>
      </div>
    )}
  </div>
);

// PROPTYPES

// EXPORT
export default RelatedArtists;
