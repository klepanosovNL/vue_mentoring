<template>
  <div class="film">
    <div class="home" @click="closeMovieDescription" @keydown="closeMovieDescription">back</div>
    <img v-lazy="movie.poster_path" :alt="movie.title" />
    <div class="film__details">
      <h2 class="film__title">{{ movie.title }}</h2>
      <CustomRating :rating="movie.vote_count" />
      <CustomReleaseAndDuration duration="140" :release="movie.release_date" />
      <div class="film__description">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
import CustomRating from "@/components/rating/Rating.vue";
import CustomReleaseAndDuration from "@/components/releaseAndDuration/ReleaseAndDuration.vue";
import { mapGetters } from "vuex";

export default {
  name: "CustomFilmDescription",
  components: {
    CustomReleaseAndDuration,
    CustomRating,
  },
  computed: {
    ...mapGetters({
      movie: "getMovieById",
    }),
  },
  methods: {
    closeMovieDescription() {
      this.$store.commit("CLOSE_MOVIE_DESCRIPTION");
    },
  },
};
</script>

<style scoped>
.film {
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  background-color: darkslategrey;
  position: relative;
}

.film img {
  max-width: 400px;
}

.home {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: chartreuse;
  cursor: pointer;
}
</style>
