const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader' }
        ]
      }
    ]
  }
};
