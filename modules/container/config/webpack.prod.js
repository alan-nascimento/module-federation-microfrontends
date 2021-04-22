const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const package = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remote-entry.js`,
      },
      shared: package.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
