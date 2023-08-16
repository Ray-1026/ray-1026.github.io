<template>
  <div>
    <h1 style="text-align: center; font-size: 36px; margin-top: 48px">
      {{ article.title }}
    </h1>
    <div v-html="renderedHtml" class="markdown-content"></div>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";
import { articles } from "../data.js";

export default {
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
        // 使用axios或其他适用的方法读取Markdown文件的内容
        console.log(this.article.content);
        const response = await axios.get("../markdown/" + this.article.content);
        this.markdownContent = response.data;

        // 将Markdown转换为HTML
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