module.exports = {
  output: {
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  entry: './js/browser.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
