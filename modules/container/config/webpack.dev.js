const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        auth: 'auth-app@http://localhost:8082/remoteEntry.js',
        marketing: 'marketing-app@http://localhost:8081/remoteEntry.js',
        dashboard: 'dashboard-app@http://localhost:8083/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
