const config = require('../config/auth-config.js')
const crypto = require('crypto')   //nodejs加密

//token认证
module.exports = {
  auth(ctx){
    //ctx上下文解构出需要
    let {
      signature,
      echoster,
      timestamp,
      nonce
    } = ctx.query
    //做字典排序，并拼成字符串
    let orderedStr=[config.token,timestamp,nonce].sort().join('')

    //crypto加密
    let mySecret = crypto.createHash('sha1').update(orderedStr).digest('hex')

    if(mySecret === signature){
      ctx.body = echoster
    }else{
      ctx.body='错误'
      
    }
     

  }
}