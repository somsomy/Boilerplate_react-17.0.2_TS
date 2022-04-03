const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isEnvDev = argv.mode === 'development'
  const isEnvProd = argv.mode === 'production'

  return {
    entry: "./src/index.tsx",
    mode: isEnvDev ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      alias: {
        "@booksbridge": path.resolve(__dirname, 'src')
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "bolier.js"
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
    ]
  };
}