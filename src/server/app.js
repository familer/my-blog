const koa = require('koa2')
// 导入中间件
const logger = require('./middle/logger')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const cors = require('koa2-cors')
const home = require('./routes/home')
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
const app = new koa()

// 在使用中间件时是不能添加 async 关键字
// 路由的优先级高于自定义的中间件
app.use(bodyparser())
app.use(cors())
app.use(static(
  path.join(__dirname, staticPath)
))
app.use(home.routes())
app.use(router.allowedMethods())
app.use(logger())

app.listen(3000, () => {
  console.log('[demo]: Your server is running on port 3000.')
})
