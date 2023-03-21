<template>
  <div class="card">
    <img
      v-lazy="movie.poster_path"
      :alt="movie.title"
      @click="setMovieById(movie.id)"
      @keydown="setMovieById(movie.id)"
    />
    <div class="card__title">
      {{ movie.title }}
    </div>
    <div class="card__year">{{ new Date(movie.release_date).getFullYear() }}</div>
    <div class="card__genre">{{ String(movie.genres) }}</div>
  </div>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    movie: {
      id: Number,
      title: String,
      tagline: String,
      vote_average: Number,
      vote_count: Number,
      release_date: Number,
      overview: String,
      budget: Number,
      poster_path: String,
      revenue: Number,
      genres: Array,
    },
  },
  methods: {
    setMovieById(id) {
      this.$store.commit("OPEN_MOVIE_DESCRIPTION", id);
    },
  },
};
</script>

<style scoped>
.card img {
  width: 100%;
}

.card {
  background: #00000075;
  margin-bottom: 15px;
  break-inside: avoid;
  cursor: pointer;
}
</style>
