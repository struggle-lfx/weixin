const config = require('../config/auth-config')
var getRawBody = require('raw-body')
var contentType = require('content-type')
const xmljs = require('xml-js')
//自动回复
module.exports = {
  //getRawBody第一个参数是Node.js的对象，要用ctx.req
  async autoreplay(ctx){
    let xml = await getRawBody(ctx.req, {
      length: ctx.req.headers['content-length'],
      limit: '1mb',
      encoding: contentType.parse(ctx.req).parameters.charset
    })
    console.log(result)

    //将xml解析成js对象
    let replyObjct = xmljs.xml2js(xml,{
      compact:true,
      cdataKey:'value',
      textKey:'value'
    })
  }
}