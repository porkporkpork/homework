# React课程课后作业

> 作业提交说明：在每一期的目录下新增以自己名字命名的目录，在该目录下提交你的作业，最后提交pull request.

## 第一期第一次课课后作业

### 课后作业
使用webpack搭建一个开发环境，实现以下功能：

1. 可以编译ES6和JSX语法
2. 支持代码热替换
3. 加载并编译CSS/LESS样式文件
4. 支持图片、图标字体加载
5. JS业务代码和第三方代码分开打包
6. 通过插件支持html文件产出

### 参考资料
1. [Webpack配置](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/%E5%A2%9E%E5%BC%BAWebpack%E9%85%8D%E7%BD%AE.html)
2. [webpack](http://webpack.github.io/)

### 本次课程问题部分答疑

- **为什么我运行webpack-dev-server后在项目里看不到产出的实体文件**

使用webpack-dev-server的话是通过服务去伺服产出的文件的，不会生成实体文件，要生产实体文件可以直接执行webpack命令即可。
- **使用webpack.config.babel.js来命名配置文件行不行**

在入门的时候先用ES5语法来写配置文件，直接webpack.config.js
- **运行的时候报错解析不了文件怎么办**

按提示的信息，寻找是否有哪个loader没有下载下来，或者下载后没有配置正确。
- **是不是需要下载file-loader**

我们在项目中下载了url-loader进行配置，url-loader是基于file-loader做的一层封装，所以无需下载file-loader.

## 第一期第二次课课后作业

准备中....
