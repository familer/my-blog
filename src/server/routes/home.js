const router = require('koa-router')()

router.get('/', async ctx => {
  ctx.body = "eternalcoder";
})

router.get('/home', async ctx => {
  ctx.cookies.set(
    'cid', 'eternalcoder', {
      domain: 'localhost',    // 写cookie所在的域名
      path: ctx.request.url,  // 写cookie所在的路径
      maxAge: 60 * 1000,      //cookie有效时长
      expires: new Date(), // cookie失效时间
      httpOnly: false,    // 是否只用于http请求中获取
      overWrite: false   // 是否允许重写
    }
  )
  ctx.body = {
    query: ctx.request.query,
    querystring: ctx.request.querystring
  }
})

router.post('/home/post', async ctx => {
  // 通过 ctx.request.body 可以获取前端发过来的post数据
  let data = ctx.request.body;
  ctx.body = data;
})

module.exports = router
