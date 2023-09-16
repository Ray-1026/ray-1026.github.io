const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Ray-1026',
      mode: 'hash'
    },
  },
  pluginOptions: {
    vuetify: {}
  }
});
