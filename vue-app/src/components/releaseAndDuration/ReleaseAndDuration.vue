<template>
  <div class="release-duration">
    {{$filters.durationAndRelease(duration, release)}}
  </div>
</template>

<script>
export default {
  name: 'CustomReleaseAndDuration',
  props: {
    release: String,
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
