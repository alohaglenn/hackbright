// IMPORTS
import React, { Component } from 'react';

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
      greeting: 'Hello there',
      artistQuery: '',
      SearchResults: [],
      topTracks: [],
      relatedArtists: [],
    }
  }

// RENDER
  // the render function should only return one parent element
  render() {
    return (
      <div className="App-container">
        <h1>{this.state.greeting}</h1>
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
