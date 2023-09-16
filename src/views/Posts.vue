<template>
  <AppBar />
  <v-main style="min-height: 300px">
    <div>
      <h1 class="subtitle"># My Posts</h1>
      <div style="margin-bottom: 20px">
        <div
          v-for="article in reversedArticles"
          :key="article.id"
          class="d-flex align-center justify-center"
        >
          <v-card variant="tonal" width="800" height="85" class="vcard">
            <v-card-title style="font-size: 24px">
              {{ article.title }}
            </v-card-title>
            <v-card-subtitle style="font-size: 16px">
              {{ article.time }}
            </v-card-subtitle>
            <v-card-actions class="card-actions">
              <v-btn variant="plain">
                <router-link :to="'/posts/' + article.id">
                  Read more...
                </router-link>
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
import { articles } from "../data.js";

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      articles,
    };
  },
  computed: {
    reversedArticles() {
      return this.articles.slice().reverse();
    },
  },
};
</script>

<style>
.subtitle {
  color: #00ced1;
  font-size: 36px;
  text-align: center;
  margin-top: 50px;
}
.subtitle:hover {
  text-decoration: underline;
}
.vcard {
  margin-top: 28px;
  position: relative;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>