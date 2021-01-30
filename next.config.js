const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    const { isServer } = options;
    const microfrontendConfig = {
      name: "collections",
      library: { type: config.output.libraryTarget, name: "collections" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {},
      exposes: {
        './Articles': './src/application/views/Articles'
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, microfrontendConfig);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3010/_next/";
    }

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
