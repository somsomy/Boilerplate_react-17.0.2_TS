const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const Dotenv = require('dotenv')

module.exports = (env, argv) => {
  const dotenv = Dotenv.config({path: path.resolve(__dirname, `.env.${env.goal}`)})
  const isDev = process.env.NODE_ENV !== 'production'

  return {
    entry: './src/index.tsx',
    mode: argv.mode,
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        '@booksbridge': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed),
        'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
    ],
  }
}
