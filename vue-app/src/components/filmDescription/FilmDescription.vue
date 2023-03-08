<template>
  <div class="film">
    <div class="home" @click="$emit('closeFilmDescription')"
         @keydown="$emit('closeFilmDescription')">back</div>
    <img v-lazy="film.img" :alt="film.name">
    <div class="film__details">
      <h2 class="film__title">{{ film.name }}</h2>
      <CustomRating :rating='film.rating'/>
      <CustomReleaseAndDuration :duration="film.duration" :release="film.year" />
      <div class="film__description">
        {{ film.description }}
      </div>
    </div>
  </div>
</template>

<script>
import CustomRating from '@/components/rating/Rating.vue';
import CustomReleaseAndDuration from '@/components/releaseAndDuration/ReleaseAndDuration.vue';

export default {
  name: 'CustomFilmDescription',
  components: {
    CustomReleaseAndDuration,
    CustomRating,
  },
  props: {
    film: {
      name: String,
      year: String,
      img: String,
      description: String,
      rating: String,
      duration: String,
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
