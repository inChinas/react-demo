#一个简单的React demo
==
### 1.全局安装forever npm i -g forever

### 2.初始化 npm init 

### 3.运行 npm run start


### **项目目录结构**

```js
│  .babelrc                       //babel配置文件
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│
├─server                          //存放服务端代码文件
│  │  server.js                   //开启http服务
│  │
│  └─middleware
│          devMiddleware.js       
│          hotMiddleware.js
│
├─src                             //存放前端业务代码文件
│  │  index.js                    //前端页面入口文件
│  │
│  ├─actions                     //存放action文件
│  │
│  │
│  ├─assets                       //前端静态资源目录
│  │      index.html
│  │
│  ├─components                  //存放react组件
│  │
│  │
│  ├─constants                   //存放actionType以及其他常量
│  │
│  │
│  ├─containers                  //存放容器组件
│  │
│  │
│  ├─reducers                    //存放reducer文件
│  │
│  │
│  └─store                      //store配置文件
│          configureStore.js
│
└─webpack                        //存放webpack配置文件
        webpack.config.dll.js
        webpack.config.js
        webpack.config.prod.js
```


## 暂时还不知道写些什么
