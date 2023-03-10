<template>
  <div class="wrapper">
    <CustomHeader v-if="!isVisibleMovieDescription" />
    <CustomFilmDescription v-else/>
    <CustomSort v-if="!isVisibleMovieDescription"/>
    <div class="main">
      <div class="cards">
        <CustomCard :movie="movie" v-for="movie in movies" :key="movie.id"/>
      </div>
    </div>
    <global-footer/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import CustomCard from '@/components/card/Card.vue';
import CustomFilmDescription from '@/components/filmDescription/FilmDescription.vue';
import CustomHeader from '@/components/header/Header.vue';
import CustomSort from '@/components/sort/Sort.vue';
import { mapState, useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    CustomFilmDescription,
    CustomHeader,
    CustomSort,
    CustomCard,
  },
  setup() {
    const { getters } = useStore();
    const movies = computed(() => getters.getMovies);
    return {
      movies,
    };
  },
  computed: {
    ...mapState({
      isVisibleMovieDescription: 'movieById',
    }),
  },
});
</script>

<style lang="scss">
html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.wrapper {
  padding: 20px;
  box-sizing: border-box;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.cards {
  column-width: 300px;
  row-gap: 15px;
  margin-bottom: 20px;
}

.main {
  flex: 1 0 auto;
}
</style>
