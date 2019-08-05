const Koa = require('koa')
const Router = require('koa-router')
const auth = require('./router/')
const bodyParse = require('koa-bodyparser')
const views = require('koa-views')
const path = require('path')

const app = new Koa()
app.use(bodyParse())

//加载模板引擎
app.use(views(path.join(__dirname,'./view'),{
  extension:'ejs'
}
))

const router = new Router()

router.use('/',auth.routes())
app.use(router.routes())

 
app.listen(5555,()=>{
  console.log('5555端口已经启动')
})
