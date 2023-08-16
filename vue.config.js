const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'productioni'
    ? '/ray-1026.github.io/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Ray-1026',
      mode: 'hash'
    }
  },
  pluginOptions: {
    vuetify: {}
  }
}
