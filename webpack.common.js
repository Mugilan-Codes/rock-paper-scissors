const path = require('path');
const ImageminPlugin = require('imagemin-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
          {
            loader: ImageminPlugin.loader,
            options: {
              bail: false,
              cache: false,
              imageminOptions: {
                plugins: [
                  ['pngquant', { quality: [0.5, 0.5] }],
                  ['mozjpeg', { quality: 50, progressive: true }],
                  ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
                  ['svgo', { plugins: [{ removeViewBox: false }] }],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
