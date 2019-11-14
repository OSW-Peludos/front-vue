<template>
  <input type="text" v-model="message" v-bind:placeholder="placeholder" />
</template>

<script>
export default {
  name: "InputText",
  props: {
    message: String,
    placeholder: String
  }
};
</script>
<style></style>
