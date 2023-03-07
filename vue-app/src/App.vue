<template>
  <div class="wrapper">
    <CustomHeader v-if="Object.keys(currentFilm).length === 0"/>
    <CustomFilmDescription @closeFilmDescription="closeFilmDescription" v-else :film="currentFilm"/>
    <CustomSort/>
    <div class="main">
      <div class="cards">
        <CustomCard
          @selectFilm="showFilmDescription"
          :film="film"
          v-for="film in
          films" :key="film.id"/>
      </div>
    </div>
    <CustomFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomCard from '@/components/card/Card.vue';
import CustomFilmDescription from '@/components/filmDescription/FilmDescription.vue';
import CustomHeader from '@/components/header/Header.vue';
import CustomSort from '@/components/sort/Sort.vue';
import CustomFooter from '@/components/footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    CustomFilmDescription,
    CustomHeader,
    CustomSort,
    CustomFooter,
    CustomCard,
  },
  data() {
    return {
      films: [
        {
          id: 1,
          name: 'Зеленая миля',
          year: '1999',
          genre: 'Драма',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
          description: 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
          rating: '4.5',
          duration: '123',
        },
        {
          id: 2,
          name: 'Список Шиндлера',
          year: '1993',
          genre: 'Драма',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/300x450',
          description: 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
          rating: '4.7',
          duration: '123',
        },
        {
          id: 3,
          name: 'Побег из Шоушенка',
          year: '1994',
          genre: 'Драма',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/300x450',
          description: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
          rating: '4.2',
          duration: '123',
        },
        {
          id: 4,
          name: 'Форрест Гамп',
          year: '1994',
          genre: 'Драма',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/300x450',
          description: 'Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.',
          rating: '4.4',
          duration: '123',
        },
      ],
      currentFilm: {},
    };
  },
  methods: {
    showFilmDescription(film: object) {
      this.currentFilm = film;
    },
    closeFilmDescription() {
      this.currentFilm = {};
    },
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
