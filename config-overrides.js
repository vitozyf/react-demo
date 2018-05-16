/* config-overrides.js */
const path = require("path")
const { injectBabelPlugin } = require("react-app-rewired") 

const AliasConfig = {
  src: resolve('src'),
  components: resolve('src/components'),
  utils: resolve('src/utils'),
  '~router': resolve('src/router'),
  'router': resolve('src/router'),
  '~layout': resolve('src/layout'),
  'layout': resolve('src/layout'),
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  extend(config.resolve.alias, AliasConfig)

  config = injectBabelPlugin(['import', { 
    libraryName: 'antd', 
    style: 'css' 
  }], config);

  return config;
}

function resolve (name) {
  return path.resolve(__dirname, name)
}

function extend (...arguments) {
  return Object.assign(...arguments)
}