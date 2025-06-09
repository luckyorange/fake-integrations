const path = require('path')
const rimraf = require('rimraf')

const devtool = process.env.NODE_ENV === 'production'
  ? false
  : 'inline-source-map'
const mode = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'
const outputPath = path.resolve(__dirname, 'dist')

rimraf.sync(outputPath)

module.exports = {
  mode,
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devtool
}
