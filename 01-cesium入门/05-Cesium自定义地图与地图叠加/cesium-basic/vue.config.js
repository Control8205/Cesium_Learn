const { defineConfig } = require('@vue/cli-service')
//解决webPack5 报错
// pnpm install node-polyfill-webpack-plugin
// pnpm install crypto-browserify
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:  {
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify")
      }
    },
    plugins: [new NodePolyfillPlugin()],
  }
})
