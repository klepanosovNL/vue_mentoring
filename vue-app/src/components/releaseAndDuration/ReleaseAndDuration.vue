<template>
  <div class="release-duration">
    {{ duration }} and {{ year }}
  </div>
</template>

<script>
export default {
  name: 'CustomReleaseAndDuration',
  props: {
    year: String,
    duration: String,
  },
};
</script>

<style scoped>
  .release-duration {
    background-color: darkslategrey;
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>
