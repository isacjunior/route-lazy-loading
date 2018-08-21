const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devServer: {
    historyApiFallback: true,
  },

  mode: 'development',

  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Lazy Loading',
      template: './src/index.html',
    }),
  ],

}
