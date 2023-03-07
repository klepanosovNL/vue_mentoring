<template>
  <div class="header__search">
    <CustomInput />
    <CustomButton :buttonName="buttonName"/>
  </div>
</template>

<script>
import CustomButton from '@/components/button/Button.vue';
import CustomInput from '@/components/input/Input.vue';

export default {
  name: 'CustomSearch',
  components: {
    CustomButton,
    CustomInput,
  },
  data() {
    return {
      buttonName: 'Search',
    };
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
</style>
