---
title: Express
description: Express 是一个 Node.js 框架
date: 2022-07-23 22:35:34
tags:
  - Node
---

# Express

```sh
# 初始化
mkdir my_app
cd my_app
npm init
npm install express

# 运行
node app.js

# Express 应用生成器
npx express-generator

```

```js
// 基本路由
app.METHOD(PATH, HANDLER);
/*
 * app 是 express 实例
 * METHOD 是 HTTP 请求方法
 * PATH 是服务器上的路径
 * HANDLER 是路由匹配时执行的函数
 */
```

### 使用中间件

- 中间件函数可以执行以下任务

  - 执行任何代码

  - 对请求和响应对象进行更改

  - 结束请求/响应循环

  - 调用堆栈中的下一个中间件函数

    **如果当前中间件函数没有结束请求/循环响应，那么它必须调用 next() ，以将控制权传递给下一个中间件函数，否则，请求将保持挂起状态**

- 应用层中间件

  - 使用 `app.use()` 和 `app.METHOD()` 函数将应用层中间件绑定到应用程序对象的实例

- 路由器层中间件

  - 路由器层中间件绑定到 **express.Router()**的实例上

  - 要跳过路由器中间件堆栈中剩余的中间件函数时，调用 `next('route')` 将控制权传递给下一个路由

    ```js
    var app = express();
    var router = express.Router();

    router.use((req, res, next) => {
      console.log("Time", Date.now());
      next();
    });

    router.use("/user/:id", function (req, res, next) {
      console.log(req.method);
      next();
    });

    router.get(
      "/user/:id",
      function (req, res, next) {
        if (req.params.id == 0) next("route");
        else next();
      },
      function (req, res, next) {
        console.log("regular");
      }
    );

    app.use("/", router);
    ```

- 错误处理中间件

  - 错误处理中间件差别在于错误处理函数有四个自变量

    ```js
    app.use(function (err, req, res, next) {
      console.log(err.stack);
      res.status(500).send("Something broke!");
    });
    ```

- 内置中间件

- 第三方中间件

  https://expressjs.com/zh-cn/resources/middleware.html

### 模版引擎

```js
app.set("view engine", "pug");
app.set("views", "./views");
```
