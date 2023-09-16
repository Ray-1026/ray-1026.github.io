<template>
  <AppBar />
  <v-main style="min-height: 300px">
    <div>
      <h1 class="subtitle"># My Projects</h1>
      <div style="margin-bottom: 20px">
        <div
          v-for="p in getProjects"
          :key="p.title"
          class="d-flex align-center justify-center"
        >
          <v-card variant="tonal" width="800" height="200" class="vcard">
            <v-card-title style="font-size: 24px; color: #00ced1">
              {{ p.title }}
            </v-card-title>
            <v-card-subtitle style="font-size: 16px; font-style: italic">
              <div>{{ p.language }}</div>
              <div>{{ p.time }}</div>
            </v-card-subtitle>
            <v-card-text
              style="font-size: 18px; font-style: italic; line-height: 1.5"
            >
              {{ p.text }}
            </v-card-text>
            <v-card-actions class="card-actions">
              <v-btn variant="plain">
                <a :href="p.link" target="_blank"> Link </a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import { myprojects } from "../data.js";

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      myprojects,
    };
  },
  computed: {
    getProjects() {
      return this.myprojects.slice();
    },
  },
};
</script>

<style>
</style>