'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather"',
  env_config:'"dev"',
})
