import _ from 'lodash';
import { createStore } from 'vuex';
import movies from '../assets/movies.json';

interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: null;
  [key: string]: any,
}

export default createStore({
  state: {
    movies: movies as Movie[],
    movieById: null,
    searchBy: 'title',
    sortBy: 'release_date',
    inputSearchValue: '',
  },
  getters: {
    getMovies: (state) => (state.inputSearchValue !== ''
      ? _.filter(_.sortBy(state.movies, state.sortBy), ((movie) => Array.isArray(movie[state.searchBy])
          ? String(movie[state.searchBy].map((genre:string) => genre.toLowerCase())).includes(state.inputSearchValue.toLocaleLowerCase())
          : _.startsWith(movie[state.searchBy].toLowerCase(), state.inputSearchValue.trim().toLowerCase())
      ))
      : _.sortBy(state.movies, state.sortBy)),
    getMoviesCount: (state) => state.movies.length,
    getMovieById: (state) => state.movies.find((movie) => movie.id === state.movieById),
  },
  mutations: {
    OPEN_MOVIE_DESCRIPTION(state, movieId) {
      state.movieById = movieId;
    },
    SET_SEARCH_BY(state, searchBy) {
      state.searchBy = searchBy;
    },
    SET_SEARCH_VALUE(state, searchValue) {
      state.inputSearchValue = searchValue;
    },
    SET_SORT_BY(state, sortBy) {
      state.sortBy = sortBy;
    },
    CLOSE_MOVIE_DESCRIPTION(state) {
      if (state.movieById !== null) state.movieById = null;
    },
  },
  actions: {},
  modules: {},
});

