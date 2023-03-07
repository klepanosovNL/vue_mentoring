const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule()
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'src/assets/[name].[ext]',
      });
  },
});
