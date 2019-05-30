import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/main.js',
  output: {
    file: 'dist/module.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/main.js': ['contexts', 'constants']
      }
    })
  ]
};
