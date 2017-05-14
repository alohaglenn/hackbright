// IMPORTS
import React, {
	Component
} from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import TopTracks from './TopTracks';
import RelatedArtists from './RelatedArtists';

import spotify from '../services/spotify';

// CLASS DEFINITION
class App extends Component {

	// CONSTRUCTOR
	// constructor is how we initialize state in a smart component
	// it's called when a new instance of this class is created
	constructor(props) {
		super(props);

		// SET INITIAL STATE
		// this is our initial app state
		// to update state, we'll use 'this.setState({ key: prop })'
		this.state = {
			artistQuery: '',
			searchResults: [],
			topTracks: [],
			relatedArtists: [],
		}
	}

	resetState = () => (
		this.setState({
			artistQuery: '',
			searchResults: [],
			topTracks: [],
			relatedArtists: []
		})
	)

	getArtist = (artist) => {
		if (artist && artist.length) {
			this.setState({
				artistQuery: artist,
				topTracks: [],
				relatedArtists: [],
				searchResults: []
			});
		} else {
			return this.resetState();
		}

		return spotify.getArtist(artist)
			.then((data) => {
				this.setState({
					searchResults: data.artists.items
				});
			})
	}

	getSongs = (id) => {
		document.getElementById('searchForm').reset();
		const idArtist = id || this.state.searchResults[0].id;
		this.setState({
			searchResults: []
		});
		spotify.getArtistSong(idArtist)
			.then((data) => {
				this.setState({
					topTracks: data.tracks.slice(0, 5)
				});
			})
		spotify.getRelatedArtists(idArtist)
			.then((data) => {
				this.setState({
					relatedArtists: data.artists.slice(0, 5)
				})
			})
	}

	// RENDER
	// the render function should only return one parent element
	render() {
		return (
			<div
				className="App-container"
			>
				<SearchBar
					getArtist={this.getArtist}
					getSongs={this.getSongs}
				/>
				<div
					className="discovery-container"
				>
					{
						this.state.searchResults.length ?
						<SearchResults
							results={this.state.searchResults}
							getSongs={this.getSongs}
						/> : null
					}

					{
						this.state.topTracks.length ?
						<TopTracks
							tracks={this.state.topTracks}
						/> : null
					}

					{
						this.state.relatedArtists.length ?
							<RelatedArtists
								artists={this.state.relatedArtists}
								onSelectArtist={this.getSongs}
							/> : null
					}
				</div>
			</div>
		);
	}

}

// EXPORTS
export default App;

// App contains state and will pass down props to children components, so it's a smart/stateful/container/class component

// basic blueprint for a smart component
// imports
// define class
// define constructor + super
// set initial state
// render method

// TODO: create children components
// SearchBar
// SearchResults
// TopTracks
// RelatedArtists
