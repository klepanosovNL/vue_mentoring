<template>
  <div class="filter">
    <span>{{ options.label }}</span>
    <button @click="setFilter(item.id)" v-for="item of options.filters" :key="item.id"
            :id="item.id"
            :class="{
          'filter__item': true,
          'filter__item--selected': options.currentHeaderFilter === item.id
        }">{{ item.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomFilter',
  props: {
    options: {
      label: String,
      filters: Array,
      currentHeaderFilter: String,
    },
  },
  emits: ['setFilter'],
  methods: {
    setFilter(selectedFilter) {
      this.$emit('setFilter', selectedFilter);
    },
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  align-items: center;
}

.filter > span {
  margin-right: 10px;
  color: darkgrey;
}

.filter__item {
  min-height: 24px;
  border: none;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  transition: .4s;
}

.filter__item:hover {
  background-color: #f65261;
}

.filter__item--selected {
  background-color: #f65261;
}
</style>
