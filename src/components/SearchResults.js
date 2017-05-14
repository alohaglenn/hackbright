// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// FUNCTIONS

const SearchResults = (props) => (
    <div>
      {props.results.map((artist) =>
        <div
          key={artist.id}
          className="SearchResults-artist"
          onClick={() => props.getSongs(artist.id)}
        >
          {artist.name}
        </div>
      )}
    </div>
);


// PROPTYPES
SearchResults.propTypes = {
  results: PropTypes.array,
}

// EXPORTS
export default SearchResults;
