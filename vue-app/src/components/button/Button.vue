<template>
  <div class="button">{{ buttonName || "button" }}</div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonName: String,
  },
};
</script>

<style scoped>
.button {
  background-color: #f65261;
  padding: 10px 15px;
  color: #fff;
  display: inline-block;
  text-align: center;
  transition: 0.4s;
}

.button:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 0 #00000070;
}
</style>
