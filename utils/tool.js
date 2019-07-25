const randomstring = require('randomstring')

const crypto = require('crypto')
//生成随机字符串
exports.noncester=()=>{
  return randomstring.generate(16)

}

exports.timestamp=()=>{
  return Math.floor(new Date().getTime()/1000)
}

exports.sha1 = (str)=>{
  return crypto.createHash
}
