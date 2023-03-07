<template>
  <div class="sort">
    <div class="sort__count">
      9 movie found
    </div>
    <Filter :options="options" @setFilter="setFilterOption" />
  </div>
</template>

<script>
import Filter from '@/components/filter/Filter.vue';

export default {
  name: 'CustomSort',
  components: {
    Filter,
  },
  data() {
    return {
      options: {
        label: 'sort by',
        currentHeaderFilter: 'release',
        filters: [
          {
            text: 'release data',
            id: 'release',
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
    setFilterOption(currentOption) {
      this.options.currentHeaderFilter = currentOption;
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
