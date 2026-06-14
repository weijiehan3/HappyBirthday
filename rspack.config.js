const rspack = require('@rspack/core')

module.exports = {
  context: __dirname,
  entry: './script/main.js',
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: './'
    }
  },
  output: {
    clean: true
  },
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        { from: 'index.html' },
        { from: 'customize.json' },
        { from: 'style', to: 'style' },
        { from: 'script', to: 'script' },
        { from: 'img', to: 'img' },
        { from: 'music', to: 'music' },
        { from: 'fonts', to: 'fonts' }
      ]
    })
  ]
}
