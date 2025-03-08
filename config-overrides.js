const path = require('path');

module.exports = function override(config) {
  config.entry = './src/lib/index.js';
  config.output = {
    ...config.output,
    library: {
      name: 'MyCDNModal', // UMD 名称
      type: 'umd',         // 模块类型
      export: 'default'    // 关键修复点
    },
    globalObject: 'this'
  };
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
  };
  return config;
};