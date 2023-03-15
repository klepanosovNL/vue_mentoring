<template>
  <div class="sort">
    <div class="sort__count">
      {{ movieCount }} movie found
    </div>
    <CustomFilter :options="options" :activeChoice="sortBy" :clickHandler="clickHandler"/>

  </div>
</template>

<script>
import CustomFilter from '@/components/filter/Filter.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CustomSort',
  components: {
    CustomFilter,
  },
  computed: {
    ...mapGetters({
      movieCount: 'getMoviesCount',
    }),
    sortBy() {
      return this.$store.state.sortBy;
    },
  },
  data() {
    return {
      options: {
        label: 'sort by',
        filters: [
          {
            text: 'release date',
            id: 'release_date',
          },
          {
            text: 'rating',
            id: 'rating',
          },
        ],
      },
    };
  },
  methods: {
    clickHandler(sortBy) {
      this.$store.commit('SET_SORT_BY', sortBy);
    },
  },
};
</script>

<style scoped>
  .sort {
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 20px 0;
    background-color: darkslategrey;
  }

  .sort__count {
    color: white;
    font-weight: 500;
    margin-right: 15px;
  }
</style>
