const config = require('../config/auth-config')
var getRawBody = require('raw-body')
var contentType = require('content-type')
const xmljs = require('xml-js')
//自动回复模块
module.exports = {
  
  async autoreplay(ctx){
    //getRawBody第一个参数是Node.js的对象，要用ctx.req

    //获取并验证可以读流的原始体，即用户输入的信息
    let xml = await getRawBody(ctx.req, {
      length: ctx.req.headers['content-length'],
      limit: '1mb',
      encoding: contentType.parse(ctx.req).parameters.charset
    })
    console.log(xml)

    //将xml解析成js对象
    let replyObjct = xmljs.xml2js(xml,{
      compact:true,
      cdataKey:'value',   //起别名
      textKey:'value'
    })
    console.log(replyObjct)//返回的是一个对象

    //对象扁平化，减少嵌套的层数
    let result = Object.keys(replyObjct['xml']).reduce((obj,key)=>{
      obj[key]= replyObjct['xml'][key]['value']
      return obj
    },{})

    //此处ToUserName，FromUserName要把从用户那里取到的数据  做个颠倒
    let date ={
      Content: `<a href='http://www.struggle-lfx.cn'>欢迎关注</a>`,
      CreateTime:new Date().getTime(),
      ToUserName:result.FromUserName,
      FromUserName:result.ToUserName
    }
    await ctx.render('replay',date)   //第一个参数为模板名，第二个参数是数据
  }

}