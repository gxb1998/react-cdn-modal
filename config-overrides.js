const path = require('path');

module.exports = function override(config) {
  config.entry = './src/lib/index.js';
  config.output = {
    ...config.output,
    library: 'MyCDNModal',
    libraryTarget: 'umd',
    globalObject: 'this',
    publicPath: 'https://[YOUR_GITHUB_USERNAME].github.io/[REPO_NAME]/'
  };
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
  };
  return config;
};