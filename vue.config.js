const pxtorem = require('postcss-pxtorem')

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            propList: ['*', '!font*'],
            exclude: 'vant',
          }),
        ],
      },
    },
  },
}
