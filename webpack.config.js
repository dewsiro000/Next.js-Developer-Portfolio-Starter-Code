import path from 'path';

const webpackConfig = {
  // ... other webpack configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash].[ext]',
          },
        }
      }
    ]
  }
};

export default webpackConfig;
