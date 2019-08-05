const Router = require("koa-router")

const router = new Router()

const authController = require('../controller/authController')
const replayController = require('../controller/replayController')


router.get('auth',authController.auth)
router.post('auth',replayController.autoreplay)
router.get('aa',(ctx)=>{
  ctx.body='ok'
})
  
module.exports = router