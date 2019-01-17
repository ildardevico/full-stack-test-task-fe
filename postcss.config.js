

module.exports = {
  map: true,
  ident: 'postcss',
  plugins: [
    require('postcss-preset-env')({
      browser: '> 1%',
      stage: 0,
    }),
  ],
};
