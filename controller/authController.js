const config = require('../config/auth-config.js')

const crypto = require('crypto')
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

    let orderedStr=[config.token,timestamp,nonce].sort().join('')
    //crypto加密
    let mySecret = crypto.createHash('sha1').update(orderedStr).digest('hex')
    
    if(mySecret === signature){
      console.log(a)
      ctx.body = echoster
    }else{
      ctx.body='错误'
      
    }
     

  }
}