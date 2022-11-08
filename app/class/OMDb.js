import axios from 'axios';

class OMDb {
  apiKey = null;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getMovieByIMDb(imdbId) {
    return new Promise((resolve, reject) => {
      axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&type=movie&plot=full&i=${imdbId}`).then((res) => {
        if (res.data.hasOwnProperty('Response') && res.data.Response === 'False') {
          return reject('Movies does not exist.');
        }
        const data = res.data;
        return resolve(data);
      });
    });
  }

  searchMovieByTitle(title) {
    return new Promise((resolve, reject) => {
      axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&type=movie&s=${title}`).then((res) => {
        if (res.data.Response === 'False') {
          return resolve([]);
        }
        const data = res.data.Search;
        return resolve(data);
      });
    });
  }
}

module.exports = OMDb;
