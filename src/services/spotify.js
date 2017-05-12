import axios from 'axios';

const spotify = {

  URL_ROOT: 'https://api.spotify.com/v1/',

  getArtist : (artistName) => new Promise((resolve, reject) => {
    axios.get(spotify.URL_ROOT + `search?q=${artistName}&type=artist&limit=10`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  }),

  getArtistSong: (artistId) => new Promise((resolve, reject) => {
    axios.get(spotify.URL_ROOT + `artists/${artistId}/top-tracks?country=US`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  }),

  getRelatedArtists: (artistId) => new Promise((resolve, reject) => {
    axios.get(spotify.URL_ROOT + `artists/${artistId}/related-artists`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  }),

}

export default spotify;

// we're using the axios library as our promise-based HTTP client.

// ideally, we'd use axios.all to execute both getArtistSong and getRelatedArtists in parallel, but we'll keep them separate to limit complexity
