const config = require('../config/auth.config')

const crypto = require('crypto')
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
      ctx.body = echoster
    }else{
      ctx.body=''
      
    }
     

  }
}