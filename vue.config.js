const path = require('path')

const webpackConfig = {
  resolve: {
    alias: {
      ASSETS: path.resolve(__dirname, 'src/assets/'),
    },
  },
  devtool: 'source-map',
}

module.exports = {
  configureWebpack: webpackConfig,
}
