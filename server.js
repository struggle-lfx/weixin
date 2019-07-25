const Koa = require('koa')
const Router = require('koa-router')
const auth = require('./router/')
const bodyparse = require('koa-bodyparser')

const app = new Koa()
app.use(bodyparse())
const router = new Router()

router.use('/',auth.routes())
app.use(router.routes())

 
app.listen(3333,()=>{
  console.log('3333服务已经启动')
})
