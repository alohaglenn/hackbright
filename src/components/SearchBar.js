// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// FUNCTION DEFINITION
const onFormSubmit = (event, props) => {
	event.preventDefault();
	event.stopPropagation();
	props.getSongs();
}

const SearchBar = (props) => (
	<div
		className="SearchBar-container"
	>
		<form id="searchForm"
			onSubmit={(event) => onFormSubmit(event, props)}
		>
			<input
				autoFocus
				className="SearchBar-input"
				placeholder="Search Spotify"
				onChange={(event) => props.getArtist(event.target.value)}
			/>
		</form>
	</div>
);

// PROPTYPES
SearchBar.propTypes = {
	getArtist: PropTypes.func,
}

// EXPORTS
export default SearchBar;

// this will be a child component of the App component and will receive props, so this is a dumb/stateless/presentation/function component

// basic blueprint of a dumb component
// imports
// define function that takes in props
// propTypes
// exports
