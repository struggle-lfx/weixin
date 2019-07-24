const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const auth = require('./router/')

  const router = new Router()

router.user('/',auth.routes())
app.user(router.routes())
 
app.listen(3000,()=>{
  console.log('服务已经启动')
})