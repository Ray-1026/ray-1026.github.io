<template>
  <div class="pdf-viewer">
    <iframe :src="pdfUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: ["pdfUrl"],
  name: "CV",
};
</script>

<style scoped>
.pdf-viewer {
  width: 100%;
  height: 100vh;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
