module.exports = {
  // 保存不检查格式
  lintOnSave: false,
  // 配置别名路径
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'styles': '@/styles'
      }
    }
  },
}
