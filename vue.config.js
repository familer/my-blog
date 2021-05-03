const path = require('path')

module.exports = {
  // 保存不检查格式
  lintOnSave: false,
  // 配置别名路径
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'assets': 'src/assets',
  //       'components': 'src/components',
  //       'views': 'src/views',
  //       'styles': 'src/styles',
  //       'utils': 'src/utils',
  //       'apis': 'src/apis'
  //     }
  //   }
  // },
  configureWebpack:{
      resolve:{
          alias:{
              'assets':path.resolve('./src/assets'),
              'components': path.resolve('./src/components'),
              'views': path.resolve('./src/views'),
              // 'styles': path.resolve('./src/styles'),
              'utils': path.resolve('./src/utils'),
              'apis': path.resolve('./src/apis')
          }
      }
  }
}
