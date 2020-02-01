module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
    ['@shopify/react-i18n/babel'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
