<template>
  <div class="header__search">
    <input class="input--default" v-model="model" placeholder="Search"/>
    <CustomButton :buttonName="buttonName"/>
  </div>
</template>

<script>
import CustomButton from '@/components/button/Button.vue';

export default {
  name: 'CustomSearch',
  components: {
    CustomButton,
  },
  data() {
    return {
      buttonName: 'Search',
    };
  },
  computed: {
    model: {
      set(value) {
        this.$store.commit('SET_SEARCH_VALUE', value);
      },
      get() {
        return this.$store.state.inputSearchValue;
      },
    },
  },
};
</script>

<style scoped>
  .header__search {
    display: flex;
  }

  .header__search input {
    flex-grow: 1;
    font-size: 20px;
  }

  .input--default {
    min-height: 24px;
    border: none;
    box-shadow: 0 0 10px #00000061;
    border-radius: 5px;
    margin-right: 10px;
  }
</style>
