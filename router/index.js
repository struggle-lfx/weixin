const Router = require("koa-router")

const router = new Router()

const authController = require('../controller/authController')
router.get('auth',authController.auth)
  
module.exports = router