const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/ray-1026.github.io/'
  //   : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Ray-1026',
      mode: 'hash'
    },
    subpage: 'src/main.js'
  },
  pluginOptions: {
    vuetify: {}
  }
});
