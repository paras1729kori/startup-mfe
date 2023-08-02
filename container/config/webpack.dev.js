const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:3001/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

// By assigning devConfig as a 2nd arg implies it will override any changes in common webpack.
module.exports = merge(commonConfig, devConfig);
