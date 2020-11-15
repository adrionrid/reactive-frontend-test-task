const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './src/scripts.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: miniCss.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'sass-loader',
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }, {
        test: /\.(svg)/,
        use: [{
          loader: 'svg-url-loader',
        }],
      }, {
        test: /\.(svg)/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: 'url-loader',
          },
          {
            resourceQuery: /external/, 
            use: 'file-loader',
          },
        ],
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader", 
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-async-to-generator",
              "@babel/plugin-transform-arrow-functions",
              "@babel/plugin-transform-modules-commonjs"
            ]
          },
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new miniCss({
      filename: 'styles.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
}