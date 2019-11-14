<template>
  <div class="home">
    <div class="newPerdido">
      <h1>Nuevo Perdido</h1>
      <InputText message="" placeholder="Nombre" />
      <Button text="Enviar" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputText from "@/components/form/InputText.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "newPerdido",
  components: {
    Button,
    InputText
  }
};
</script>
<style scoped>
.newPerdido {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
