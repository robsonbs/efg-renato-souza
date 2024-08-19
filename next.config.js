/* eslint-disable */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\/pages\/disciplinas\/.*/g,
      loader: "ignore-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
