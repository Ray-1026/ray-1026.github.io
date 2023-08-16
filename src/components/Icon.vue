<template>
  <a :href="href" target="_blank">
    <v-icon class="icon" color="info" :icon="icon_name" />
  </a>
</template>

<script>
export default {
  name: "Icon_link",
  props: ["href", "icon_name"],
};
</script>

<style scoped>
.icon {
  font-size: 50px;
}
.icon:hover {
  transform: scale(1.3);
}
</style>