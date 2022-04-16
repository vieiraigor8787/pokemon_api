const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    //gera id pro projeto
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        //css
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              [
                "babel-plugin-styled-components",
                {
                  minify: false,
                  transpileTemplateLiterals: false,
                },
              ],
            ],
          },
        },
      },
      {
        //images (i = case insensitive)
        test: /\.(JPG|JPEG|PNG)$/i,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: "./public",
    },
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
