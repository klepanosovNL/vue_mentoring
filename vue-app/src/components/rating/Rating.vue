<template>
  <div class="rating">
    {{ rating }}
  </div>
</template>

<script>
export default {
  name: "CustomRating",
  props: {
    rating: Number,
  },
};
</script>

<style scoped>
.rating {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: green;
  border: 1px solid white;
  padding: 10px;
  box-sizing: border-box;
  font-size: 26px;
}
</style>
