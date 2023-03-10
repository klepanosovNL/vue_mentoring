import { createStore } from 'vuex';
import movies from '../assets/movies.json';

export default createStore({
  state: {
    movies,
    movieById: null,
  },
  getters: {
    getMovies: (state) => state.movies,
    getMoviesCount: (state) => state.movies.length,
    getMovieById: (state) => state.movies.find((movie) => movie.id === state.movieById),
  },
  mutations: {
    OPEN_MOVIE_DESCRIPTION(state, movieId) {
      state.movieById = movieId;
    },
    CLOSE_MOVIE_DESCRIPTION(state) {
      if (state.movieById !== null) state.movieById = null;
    },
  },
  actions: {

  },
  modules: {
  },
});
