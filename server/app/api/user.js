//用户路由
const Router = require('@koa/router')
const userList = require("../../data/user")
const router = new Router()

//视图函数
router.get('/user', async ctx => {
  console.log(userList, !userList)
  if(userList.length){
    ctx.body = userList
  }else {
    ctx.body = "暂时还没有用户哦哦~"
    
  }
})

//post
router.post('/user', async ctx => {
  const data = ctx.request.body
  const user = {
    name: data.username,
    password: data.password,
    nickname: data.nickname
  }

  userList.push(user)
  //响应体
  ctx.body = {
    code: 0,
    msg: '创建成功'
  }
})

module.exports = router