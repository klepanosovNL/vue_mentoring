<template>
  <div class="header">
    <div class="header__container">
      <h1>FIND YOUR MOVIE</h1>
      <CustomSearch />
      <CustomFilter :options="options" :activeChoice="searchBy" :clickHandler="clickHandler" />
    </div>
  </div>
</template>

<script>
import CustomFilter from "@/components/filter/Filter.vue";
import CustomSearch from "@/components/search/Search.vue";

export default {
  name: "CustomHeader",
  components: {
    CustomSearch,
    CustomFilter,
  },
  data() {
    return {
      options: {
        label: "search by",
        filters: [
          {
            text: "title",
            id: "title",
          },
          {
            text: "genre",
            id: "genres",
          },
        ],
      },
    };
  },
  computed: {
    searchBy() {
      return this.$store.state.searchBy;
    },
  },
  methods: {
    clickHandler(searchBy) {
      this.$store.commit("SET_SEARCH_BY", searchBy);
    },
  },
};
</script>

<style scoped>
.header {
  background: #00000075;
}

.header .filter {
  margin-top: 30px;
}

.header__container {
  padding: 20px;
}
</style>
