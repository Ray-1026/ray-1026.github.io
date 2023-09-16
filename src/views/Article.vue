<template>
  <AppBar />
  <v-main style="min-height: 300px">
    <div>
      <h1 style="text-align: center; font-size: 36px; margin-top: 48px">
        {{ article.title }}
      </h1>
      <div v-html="renderedHtml" class="markdown-content"></div>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";
import { articles } from "../data.js";
import AppBar from "../components/AppBar.vue";

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      article: {},
      md: new MarkdownIt(),
      markdownContent: "",
      renderedHtml: "",
    };
  },
  created() {
    const articleId = this.$route.params.id;
    this.article = articles.find(
      (article) => article.id === parseInt(articleId)
    );
  },
  mounted() {
    this.loadAndRenderMarkdown();
  },
  methods: {
    async loadAndRenderMarkdown() {
      try {
        const response = await axios.get("../markdown/" + this.article.content);
        this.markdownContent = response.data;
        this.renderedHtml = this.md.render(this.markdownContent);
      } catch (error) {
        console.error("Error loading and rendering Markdown:", error);
      }
    },
  },
};
</script>

<style>
.markdown-content {
  text-align: center;
  font-size: 18px;
  line-height: 2;
  margin-top: 28px;
}
</style>