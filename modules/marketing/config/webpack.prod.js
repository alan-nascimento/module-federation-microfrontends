const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const package = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remote-entry.js',
      exposes: {
        './app': './src/bootstrap',
      },
      shared: package.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);