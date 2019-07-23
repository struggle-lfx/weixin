const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const weixin = require('./router/')

const router = new Router()

router.user('/',weixin.routes())
app.user(router)

app.listen(3000,()=>{
  console.log('服务已经启动')
})