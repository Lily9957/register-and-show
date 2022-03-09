## 项目描述

**技术栈：vue2、elementui、koa2 **

**项目描述：主要实现功能有：注册和查询用户**

**项目目的：简单练手，熟悉搭建项目，前后端的交互**



## 笔记

### 客户端

1、先用vue脚手架 搭建一个vue项目，再引入elementUI

2、新建两个组件：register、user-list，注册和用户列表页面，并为其注册路由

3、刚开始创建项目的时候并没有配置vue-router，所以自己npm下载了一个最新版，结果写好之后，运行报错,没有截图

```js
Uncaught TypeError: Object(...) is not a function at eval (vue-router.esm-bu.....in main.js
```

整半天，原来是vue-router版本太高了。把他的版本降到3.2.0就好了。

4、服务端启动在3000端口，客户端在8080端口，请求会跨域，添加vue.config.js文件，配置：

```js
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
```

**记得：一定要重启项目，这个配置才会生效！！！！！**

### 服务端

1、在server终端下先npm init一下，再下载koa

2、添加app.js文件，开启服务,端口：3000

```js
const Koa = require('koa')
const app = new Koa()

app.listen(3000)
```

3、下载koa-router

* koa-router是 koa 的一个路由中间件，它可以将请求的URL和方法（如：`GET` 、 `POST` 、 `PUT` 、 `DELETE` 等） 匹配到对应的响应程序或页面

4、新建app文件夹---》api文件夹-----》user.js文件添加user的api

```js
//用户路由
const Router = require('@koa/router')
const router = new Router()

//视图函数,get方法，/user路径
router.get('/user', async ctx => {
    ctx.body = "暂时还没有用户哦哦~"
    
})
module.exports = router
```

将user-router添加到app.js中

```js
const Koa = require('koa')
const userRouter = require('./app/api/user')
const app = new Koa()

app.use(userRouter.routes())

app.listen(3000)
```

5、添加get、post方法

```js
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
  //需要先下载koa-bodyparser并在app.js引入才能解析request.body
  const data = ctx.request.body
  const user = {
    name: data.username,
    password: data.password,
    nickname: data.nickname
  }
  //用的假数据，没有连接数据库
  userList.push(user)
  //响应体
  ctx.body = {
    code: 0,
    msg: '创建成功'
  }
})

module.exports = router
```

