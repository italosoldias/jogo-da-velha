module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins:[
      [
        'module-resolver',{
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.png'
          ],
          alias: {
            '@imagens': './src/assets',
            '@configs': './src/configs',
        },
      },
      ],
    ],
  };
};
