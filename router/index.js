const Router = require("koa-router")

const router = new Router()

const authController = require('../controller/authController')
router.get('auth',(ctx)=>{
  //进行来自微信平台的验证
  ctx.body=ctx.query.echoster

})

module.exports = router