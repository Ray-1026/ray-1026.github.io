<template>
  <AppBar />
  <v-main style="min-height: 300px">
    <div>
      <h1 class="subtitle"># My Projects</h1>
      <p style="text-align: center; font-size: 18px; margin-top: 10px">
        <v-progress-circular
          color="primary"
          indeterminate
        ></v-progress-circular>
        To be continued...
      </p>
    </div>
  </v-main>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>

<style>
</style>