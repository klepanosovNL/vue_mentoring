<template>
  <div class="card" @click="$emit('selectFilm', film)" @keydown="selectFilm($event)">
    <img :src="film.img" :alt="film.name"/>
    <div class="card__title">
      {{ film.name }}
    </div>
    <div class="card__year">{{ film.year }}</div>
    <div class="card__genre">{{ film.genre }}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    film: {
      id: Number,
      name: String,
      year: String,
      genre: String,
      img: String,
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
