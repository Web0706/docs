# **自我介绍**

面试官您好，我叫王守振，来自河南南阳，从事前端行业三年了

​ 21 底到今年就职于广州奇点未来科技有限公司，公司的话主要做二手电子产品手机这一块主要是 期间接了一个合作公司的项目定制了一个人力资源的后台，最近的做的是小程序商城后台管理项目和微信小程序，技术栈是 vue 全家桶和 uinapp ，后台项目的话 主要就是对商品的库存信息等进行管理 进行数据的统计展示 对商城的多种状态订单进行管理

## 最近项目介绍

### **项目背景：**

公司自有平台

## **项目模块罗列：**

### 小程序后台

- 首页 :当日总体数据的展示

- 商品: 商品管理 商品分类

- 订单: 订单管理 订单处理 订单配送 订单评价

- 会员：会员展示 等级金额排序 添加说明

- 财务: 退款管理 退款记录 进出帐管理

- 数据: 订单成交量 商品销量 用户访问量

  ### 小程序

  - 首页: 轮播图 Menu(mai niu)菜单 评论页 首页虚拟列表 商品列表 自定义 nabbar 商品列表

  - 分类: 商品分类展示跳转

  - 用户页面 ： 用户个人信息展示 收藏列表 订单页 回收估价 优惠券

  - 搜索页

### **具体每个模块细讲**

- 首页: 嵌套路由 类似于 tabbar 对今日成交金额 客单价 订单的笔数 总的浏览量 分为不同的子页面 使用 ECharts 的 雷达 漏斗 柱状 饼图 对每个总数据的详细信息进行分析并展示 数据实现真自动实时更新 (真自动与假自动)

- 商品管理: 管理商品的库存 出库入库 实现 excel 导入商品信息 对库内的商品进行分类 基于不同的品牌 机型 内存 成色 发售地区 进行分类搜索 商品的上下架 编辑商品的信息 价格 对商品的状态进行分类 在售 已售罄 库存中 添加商品标签 热卖 新品 推荐

- 订单: 对订单进行管理 对不同状态的订单 如待发货 待收货 已完成 等 封装筛选条件表单 如下单的时间 订单的来源 活动订单 售后状态 物流配送方式 订单的类型 修改订单的状态 修改用户收货信息 导出订单为 excel 封装弹出展示组件对商品发货单 详细进行展示 打印订单信息

- 会员: 头部筛选表单复用 对会员的按照 等级 金额排序 列表 展示会员的个人信息 注册时间 成交的订单量及金额量 对会员的信息进行编辑 添加会员标签 针对性营销 查看会员订单

- 财务:退款 流水

- 数据: echats 商品数据 支付人数 笔数 金额

# 深浅拷贝

- 浅拷贝
  - Object.assign(空对象, 源对象)
  - es6 ... 拓展运算符
- 深拷贝

  - 递归

  ```js
  function deepCopy(newObj, oldObj) {
    debugger
    for (let k in oldObj) {
      // 处理数组的问题  一定先写数组 在写 对象 不能颠倒
      if (oldObj[k] instanceof Array) {
        newObj[k] = []
        //  newObj[k] 接收 []  hobby
        //  oldObj[k]   ['乒乓球', '足球']
        deepCopy(newObj[k], oldObj[k])
      } else if (oldObj[k] instanceof Object) {
        newObj[k] = {}
        deepCopy(newObj[k], oldObj[k])
      } else {
        //  k  属性名 uname age    oldObj[k]  属性值  18
        // newObj[k]  === o.uname  给新对象添加属性
        newObj[k] = oldObj[k]
      }
    }
  }
  deepCopy(o, obj) // 函数调用  两个参数 o 新对象  obj 旧对象
  ```

  - JSON 不能拷贝 undefined 和 函数

  ```js
  const o = JSON.parse(JSON.stringify(obj))
  ```

# 从输入 url 到展示的过程

- 1.用户输入 url 浏览器会解析 url 并发起请求
- 2.发起请求 根据 url 发起 http 请求 请求包括 dnf 解析 tcp 握手 请求响应等阶段
- 3.接收响应 会返回 htmlcssjs 文件
- 4.解析 html 将 html 解析成 dom 树 css 解析 css 渲染规则 两个结合在一起合并为一个渲染树
- 5.绘制页面
- 6.js 执行
- 7.页面关闭回收资源

# webpack 核心配置项

- entry：打包入口路径
- output：打包输出文件路径和名字
- module：定义模块加载方式和转换规则
- devserver：用于开发环境的服务器配置
- externals：打包忽略模块
- plugins：扩展 webpack 的功能 插件

# 新增语法

- 新增数据类型 symbol 独一无二的值
- let const 有块级作用域 不存在变量生命提升 暂时性死区
- 结构赋值
- Map Set
  - object 的键只能是字符串或 ES6 的 symbol 值，而 Map 可以是任何值。
  - Map 对象有一个 size 属性，存储了键值对的个数，而 object 对象没有类似属性。
  - Set 对象唯一的特性 实现数组去重
- assign 用于浅拷贝源对象可枚举属性到目标对象。
- is 方法和（===）功能基本类似，用于判断两个值是否绝对相等。
- find()和 findIndex()，查找数组中符合条件的元素值或索引，方法不会修改原数组。
- includes()用于检测数组是否包含某个值，可以指定开始位置。
- 函数默认值
- class 类
- import export
- Promise

# 继承的几种方式？

- 原型链继承
  - 父类构造函数 new 的实例 作为 子类构造函数的原型 只能继承原型链上的属性和方法
- 借用构造函数继承
  - 在子构造函数里 通过 call 来调用父构造函数 传入需要批量构建的属性
- 组合式继承
  - 原型链继承和借用构造函数继承的结合 属性会有两层 里层属性的值为 undefined
- 寄生组合式继承
  - 通过 Object.cerate() 创建一个父构造函数的原型 解决了组合式继承属性有两份的问题
- es6 class 继承
  - es6 calss extends 继承 通过 super() 调用父构造函数并传参

# 强缓存 协商缓存

- 缓存就是浏览器会对发送过的请求的数据进行缓存
- 强缓存就是请求发送之前 浏览器会检查 http 请求头里的 Expires (a ke si bai ye si) Cache-Control(kai shi kan chou) 来检查资源是否过期 如果资源过期则会触发协商缓存
- 协商缓存会向服务器发送一个请求头携带 Last-Modifed 和 Etag 的请求 由服务器对比文件是否更改 走 304 重定向 还是返回新数据

# 浏览器缓存机制

- 我们客户端向服务器发送请求要资源时候，有时候资源在本地是有现成，这个时候我们就需要一套机制判断本地的能不能继续使用，这就称为浏览器缓存机制
- 缓存机制分为两个阶段：强缓存和协商缓存
- 强缓存是用来看本地资源有没有过期，通过二个标识 expire,cache-control 来判断，如果这二个响应头都有的时候，expire 优先级更高
- 如果通过强缓存发现资源是过期了，下面就进入协商缓存的阶段 通过二个响应头标识判断 last-modified,etag，这二个同时存在，以 etag 为准，只要这个服务器上资源和本地资源的 etag 一样，就会返回 304 状态告诉客户端可以继续用，如果不可以用就返回 200，返回新的资源把本地旧的替换掉

- 先看这个东西有没有过期，没有过期肯定是可以放心的吃，如果过期了，有些比如像饼干虽然过期了，但是还是可以吃的

# http 状态码

- 2 开头表示响应成功 200 201 一般是 post put 的请求会返回表示响应成功 并创建了一个新的资源
- 3 开头 表示重定向消息 301 请求网址永久更改 302 网址暂时更改 304 浏览器缓存消息
- 4 开头 客户端错误 400 表示请求错误 401 常见 token 过期 404 服务器找不到请求的资源
- 5 开头 服务器端错误 500 服务器错误 501 服务器不支持当前请求方法 505 不支持请求中的 http 版本

# webpack 打包优化

- 关闭 sourcemap 关闭后 会少成成 map 文件
- 缩小 loader 查找范围

- 配置路径别名
- 开启多线程 thread-loader 用来代替 happypack
- 移除 console.log 可以通过插件 babel-plugin-transform-remove-console
- 压缩图片 image-webpack-loader
- DllPlugin 将 src 中的代码与 第三方库的代码分开 每次打包只是单独打包 src 中的逻辑代码
- 使用按需引入触发 webpack 的 Tree Shaking(树摇)

# 项目中优化

- 代码层面

  - 路由懒加载
  - pc 端分页
  - 图片懒加载
  - 移动端长列表优化 虚拟列表 上拉加载 下拉刷新
  - 第三方 ui 库按需引入
  - 防抖 节流
  - 封装组件
  - 减少重绘和回流 documentFragment
  - 类名操作 不要写行内
  - 用 css3 新属性 开始 gpu 硬件加速 transform opacity filter will-change

- 图片

  - 使用精灵图(雪碧图)
  - 字体图标
  - 压缩图片

- http 优化
  - 用 http2.0 做到多路复用
  - 开启浏览器缓存机制

# vue2 响应式原理

- 观察者模式 dependence(di pan den ci) 发布者 watcher 观察者 一对多 发布者(1) --> 观察者(多)

- vue 响应式就是 数据变化时 视图会重新渲染
  - 实现 vue 响应式 的就是 数据劫持 加上 观察者模式 数据劫持实现了数据变化时 程序是知道的 观察者模式实现了数据变化时 视图中多个用到数据的地方跟着变化
  - 首先通过 Observer 类对 data 里面的数据 用 Object.defineProperty 改写为 gettr settr 的写法 在 gettr 中为每一个数据都创建一个 dep 发布者实例对象
  - 通过 Compile(kang pai ou ) 模板解析器 对模板进行编译得到 data 中对应的 watcher 订阅者 把每订阅者添加进 dep 实例对象里
  - 一旦数据发生改变 会通知对应的 dep dep 会对所有的订阅者 watcher 进行遍历通知 watcher 会更新相应的视图

# call,bind,apply 的区别

- call bind apply 都可以改变函数的 this 指向
- call apply 都是立即执行此函数 bind 不会立即调用 而是复制一个改变 this 的函数体
- call 和 apply 第一个参数都是要改变的 this 指向 call 第二个参数可以传入很多个参数 apply 第二个参数传入的是一个数组
  - apply 可以用来求数组的最大值和最小值 借助 Math 数学对象

# WebSocket

- WebSocket 一种网络传输协议 可以实现双工通信 进行双向数据传输
- 弹幕 协同编辑(腾讯文档) 聊天

# 虚拟列表

假设有 1 万条记录需要同时渲染，直接渲染会导致卡死 比如我们屏幕的可见区域的高度为 500px,而列表项的高度为 50px，则此时我们在屏幕中最多只能看到 10 个列表项，那么在首次渲染的时候，我们只需加载 10 条即可 多一点
通过监听 scroll 事件 用事件对象里 scrollTop 这个属性来计算 页面蜷曲的头部

## 如何理解 vue

vue 是一个前端渐进式的框架 其设计采用了 mvvm 的思想 即数据驱动 其便于进行组件化开发

## mvvm 是什么

1.mvvm 即 model 数据 view 视图 vm viewmodel 链接数据与视图的桥梁

2.只要 m 变了 vm 就会通知 view 从而操作 dom 改变页面

3.原生开发 需要程序员自己操作 dom 更新页面 mvvm 的好处 1.不需要操作 dom 即可更新页面 减少操作 dom 2.减少代码量

## mvc 是什么

原生开发 代码都是写在一起的 mvc 实现了代码的分层 但是 代码量并没有变少

mvc 主要用于后端

## \<template\> \</template\>有什么用？

\<template\> \</template\>标签就是起一个包裹的作用 但是在最终渲染出来的 html 结构里没有这个标签

## 项目登录流程

项目的登录的重点就是 token

创建表单获取用户输入的数据(表单校验) --> 提交用户数据,获取 token --> 把用户数据保存到 vuex 中 --> 由于 vuex 中的数据刷新页面就会消失所以我们可以借助 vuex-persistedstate 插件进行持久化或者手动存储的浏览器的本地存储 localStorage 中 --> 在请求拦截器里在每个请求头里加上 token 判断用户是否有权限访问其他的页面 --> 也可以在响应拦截器里判断服务器返回的状态码是否为 401 是的话 清除 token 用编程式导航跳转到 login 让用户重新登录

## vue 路由守卫有哪些

- 全局路由守卫
  - beforeEach
  - afterEach
- 局部路由守卫
  - 这个项目一堆路由但是只有一个路由需要判断有没有 token,如果把判断 token 用全局前置守卫就浪费了
  - 写在路由规则内 beforeEnter && afterEnter
- 组件路由守卫
  - beforeRouteEnter 前置
  - beforeRouteUpdate 路由数据改变时
  - beforeRouteLeave 后置

## 路由只是参数切换了，就会发现 created 只会执行第一次

      1.watch 监听$route

      2.beforeRouteUpdate 组件路由守卫

## 项目中的 axios 咋用的？

- axios 在项目中就是用来发送 ajax 请求实现前后端交互的

- 项目中使用 axios 会进行进一步封装 在 scr/utils 文件夹下面封装一个 request.js 在里面写入

      axios.cerate({
        timeout:超时时间,
        baseUrl:项目基准地址
      })

  - 并在 request.js 里面写入请求和响应拦截器 请求拦截器主要用于在每次请求之前在请求头上加一个 token 用于权限验证
  - 在响应拦截器里主要判断响应状态码是否为 401 如果为 401 则进行 token 过期的处理

- 还会项目的 src 下新建一个 api 文件夹 用于封装不同的 api 请求 这样使每个请求实现了分离便于管理 也实现了 api 的复用
- axios 实际就是原生的 XHR XMLHttpRequest 封装了一层 promise

## promise 相关

- Promise 的三种状态
  - pending 未决定的(等待态)
  - fullfiled 已兑现(成功态)
  - rejected 已拒绝(失败)
- Promise 失败态会进.then 吗？ 会,但是不会执行回调函数里面的代码
- Promise 的静态方法 all race allsettled any
  - all 所有成功才为成功 并返回一个数组 失败的话返会失败的那个 promise 对象
  - race 返回值是最先执行完的那个 promise 的状态
  - allsettled 类似于 all 但是他只会返回所有 promise 执行完的结果 无论成功失败
  - any 返回值是第一个成功的 promise 对象
- Promise 值穿透
  - 当一个 promise.then 的值不是一个函数的时候这个值就会传递给下一个.then 这叫做值穿透

## 项目列表页，移动端列表页面的实现和优化？

- 上拉加载 下拉刷新 是借助于 vant 的 list 组件完成的 其中上拉加载的原理是 借助 IntersectionObserver 函数 检测底部加载中是否在当前视口内 从而发送请求获取数据分页
- 懒加载 lazy-load
  - 可以借助 lazy-load 插件实现 其原理也是 IntersectionObserver 检测是否在视口内 从而进行图片的请求和渲染
- 记录阅读位置 keep-alive
  - keep-alive 有二个钩子函数 激活 activated 失活 deactivated
  - 在 deactivated 组件失活是记录当前页面滚动的位置
  - 在 activated 组件激活时利用 window.scrollTo(0,y 轴的位置) 跳转到指定位置

## 图片懒加载的原理

- 判断图片是否在显示区域内 如果在显示区域内就把图片的 src 地址 替换成真实的 src 地址
- 如何判断？
  - 计算页面被卷去的头部 + 视口的高度 是否等于 图片到文档的距离 如果等于 说明 当前图片在视口内 利用 window.onscroll 性能不好
  - IntercetionObserver(in te sai ke shen ),这是个异步的 api 性能好 不存在 window.onscroll 触发频繁的问题

## 讲讲搜索业务的实现流程和优化？

- 搜索业务的主要实现就是根据用户输入的内容进行数据的搜索和展现
- v-model 双向数据绑定拿到用户输入的数据
- 根据数据发送 ajax 请求获取联想词列表 v-model 默认使 input 事件 触发频繁 所以这里要做一个防抖
- 每次把用户搜索的关键词 存到本地存贮

## 你在开发的时候遇到问题如何解决?

分析: 根据错误定位出现错误的位置

分析代码的业务,检查一下代码,调试代码直到代码调试成功

可以通过打断点\删代码\请求的还需要配合 network

调式到没有思路了
借助其他的参考/掘金/csdn/stackoverflow(英语好的同学可以说这些)

三方库/借助官方文档或者 github 的 isuse

搭梯子: 谷歌

技术交流群

## 权限功能

toB 项目权限问题主要分为四大块

- 登录权限 项目中就是用户登录成功后才可以访问页面 直接在全局路由内判断用户是否有 token 即可
- api token 权限 在响应拦截器里判断状态码是否为 401 是的话 就清除 token,用户信息 跳转到 login 页面 重新登录
- 路由权限 项目中的路由分为两种静态路由和动态路由 静态路由就是每个人都有的页面 如 login 404...动态路由则是需要权限才能访问 服务器数据里有我们需要的权限数组 在路由的 meta 属性里加上标识 或者 直接把路由的 name 设为标识 通过服务器返回的数据 过滤用户权限 把符合权限的路由通过 vuerouter 官方的 api addRoutes 添加进路由中 操作完成后 需要在用户退出登录后 清除用户的路由信息 在全局路由守卫里重新获取数据进行遍历
- 按钮权限 因为之前的项目的后台数据中有用户的按钮权限 所以我封装了一个自定义指令 来实现按钮的全限 函数配合 v-if 也可以做到

## echarts 响应式

- 利用 window.resize 来监听窗口的变化
- 调用 echarts 实例的 resize 方法进行适配

## 你们公司项目流程是什么样子的

需求文档 -> 需求评审会 -> 产品出原型稿 -> ui 出设计稿(中台项目可能没有设计稿) -> 前端根据设计稿或者原型图搭建页面 -> 后端接口写好 接口联调 实现功能 -> 进行自测然后给测试 改 bug -> 打包交给运维 -> 上线

## 你们的项目是如何打包部署的

运行 build 命令可以进行优化(cdn , 懒加载 ) -> 交给运维

## vue 项目怎么优化

- CDN 引入
- 项目按需引入
- 图片懒加载
- 路由懒加载
- 上拉加载 分页请求
- 组件复用
- keep——alive
- 防抖节流
- 骨架屏
- 加载进度条 NProgress(en po guai si)

## 前端如何打包 vue 开发的页面为移动 app？

- 借助 HbuilderX 提供的在线云打包（无需本地配置打包环境）

## 你们公司如何进行接口联调？

根据后端给的接口在开发环境中测试 用 postman apifox APIpost 主要来测试接口能不能跑通 数据格式是否正确 请求是否正确 如果有错误 及时和后端的同事沟通

## router 和 route 的区别

- router 是整个路由对象的实例可以用来跳转路由 router.push() router.go()
- route 是代表当前页面路由规则 用来获取路由传参 route.params route.query

## 为什么 data 属性是一个函数而不是一个对象？

- 函数的 return 可以保证 return 出去的数据是不重复的
- 可以保证多次使用一个组件 数据是不重复的

## computed 中的属性名和 data 中的属性名可以相同吗？

- 不可以 methods,computed,props,data 都不能重名
- 因为他们都是挂载到当前页面的 组件 实例身上的

## 面试官：你对 SPA 单页面的理解，它的优缺点分别是什么？

- spa 就是单页面应用程序 vue 就是用来开发单页面应用程序的 实现的原理就是不同组件之间的切换和跳转
- 不会出现多页面应用首次打开首页白屏的问题
- 缺点就是不利于 seo(搜索引擎优化),可以用 ssr(服务端渲染)解决

## ssr 是什么？

- 渲染模式有两种 服务端渲染 客户端渲染
  - ssr 就是服务端渲染
  - vue 就是客户端渲染
- vue 开发的是单页面应用 不利于 seo 但是可以用 ssr 解决 例如 nuxt.js 框架

## Vue 组件之间的通信方式都有哪些？

1.$emit(子向父)

2.porps 父向子

3.$refs

4.$child

5.$root

6.$parent

7.$listeners,$attrs

8. event Bus

9.vuex

10.状态提升

## $nextTick 实现的原理？

- vue 更新是异步的有时会遇到 视图更新的但是视图上最新的数据暂时没办法拿到 这时候就可以用$nextTick
- vue.js 在内部封装时采用了优雅降级 加了判断 promise(微任务) -> MutationObserve(微任务) -> setTimeout(宏任务)

## vuex 是什么？

- vuex 是 vue 集中式状态管理工具 多个组件要用到的数据可以储存在 vuex 中
- vuex 配置
  - state 存放数据的地方
  - mutations 唯一可以修改数据的地方
  - actions(ai ke shen) mutations 里面写的是同步的代码 异步代码要写到 actions 里 例如 ajax
  - getter 类似于组件内的计算属性 可以解决组件内使用 vuex 表达式过长的问题
  - modules 模块 项目较大的时候 我们可以将 vuex 分成几个不同的模块
- 辅助函数
  - mapState
  - mapMutations
  - mapActions
  - mapGetter
- 缺点
  - veux 里面的数据不是持久化的 页面一刷新就没有了 所以我们要进行本地持久化 存到 localStorage 或者借助 vuex-persistedstate
    (persisted（pe sei si dui de）)
- 命名空间
  - 把 vuex 模块化容易造成命名的混乱 变量方法之间的额相互覆盖 可以在单个模块的配置中加上 namespaced 开始命名空间
- 在其中一个模块中的想要操作其他模块
  - 配置中加上{root: true}

## Vue2 中注册在 router-link 上事件无效解决方法

- 在 router-link 上加上.native 修饰符

## ajax 请求代码应该写在组件的 methods 中还是 vuex 的 actions 中？

- 返回的数据如果是当前组件的就写在 methods 中 如果是公共的就写在 actions 中

## 操作 dom 是写在 created 中还是 mounted 中?

- 都可以 最好写在 mounted 中 此时是最早可以开始操作 dom 的时机
- 在 cerated 中 可以用$nextTick

## 发送 ajax 是写在 created 还是 mounted？

- 如果数据拿回来需要操作 dom 如数据可视化 百度地图 可以写在 mounted 中
- 不需要操作 dom 最好鞋子啊 cerated 中

## v-model 的理解

- v-model 是一个语法糖 是@input=“msg = $evenet” 和 :value="msg" 的简写
- 可以实现双向数据绑定
- 可以用于父子组件通信 缺点就是一个组件上只能写一个 v-model
  - 可以用 sync 修饰符

## Vue 项目中你是如何解决跨域的呢？

- 之前公司用的都是 cors 是后端在做
- 要前端处理的话 我也会 在 vue.config.js 中 devServe 配置项中添加 proxy 选项 这是开发环境里的解决方案 写完后打包上线 需要后端用 nginx 实现反向代理
- jsonp

  - 利用 script 标签可以跨域的特点
  - 只能发送 get 请求

  ## vue 的三种路由模式？

  - hash 模式
    - 利用 window.onhashchange
  - history 模式
    - history.pushState 来实现
  - abstract
    - 因为 ssr 里面玩 vue，里面是服务器，没有浏览器，没有 bom 的 api(history,onhashchange),只能用抽象的方式去模拟路由模式，称为 abstract

## 你都知道有哪些路由守卫？

- 全局路由守卫
  - router.beforeEach
  - router.afterEach
- 路由独享守卫
  - beforeEnter
  - 当项目中 只有一个或少量页面 需要权限时
- 组件内路由守卫
  - beforeRouteEnter 前置
  - beforeRouteUpdate
  - beforeRouteLeave 后置

## 设计模式你了解哪些？

- 单例模式
  - 只有一个组件实例 确保了唯一性
  - vue 组件注册(vue.use())就采用了单例模式
  - 所有的插件都采用了单例模式
- 发布订阅模式
  - 发布--订阅模式 定义了一种对象间的一对多的关系 当被依赖的对象状态发生改变时 会通知所有依赖于它的对象
- 观察者模式
  - 观察者模式也是一种一对多的被依赖的关系 但是他与发布订阅模式之间的区别就是 没有了中间的事件处理的函数 直接与依赖它的对象关联

## 盒子水平垂直居中?

- 开启绝对定位 边设置为 0 margin:auto
- 绝对定位 left:50% top:50% transform 水平 垂直都平移自身的-50%
- display:flex justify-content:center;align-items:center;
- 开启 flex 布局 设置 margin:auto

## 盒模型

- 盒模型是由宽高 内外边距 边框
- 有两种盒模型 标准盒模型 和 怪异盒子模型(c3 盒模型)
  - 开启 c3 盒模型的方法 box-sizing: border-box;
  - 它不会撑大盒子 会自动内减

## c3 新属性

- flex 弹性布局
- transform 2 D 转换
- transition 过渡
- 帧动画 animation(an nie mie shen)
- 背景图片的大小 background-size:cover,contain
- 各种阴影 text box
- 盒模型 box-sizing
- 边框圆角 border-radius

## bfc

- bfc(bu laoke for mate kang tai si ke)即格式化上下文 他会形成一块独立的额渲染区域 不会影响到外界
- 开启 bfc : bfc:overflow 不是 visible,position 为 absolute 或 fixed,display 为 inline-block,flex
- bfc 可以解决的问题:margin 的塌陷,清除浮动 可以做到左边固定右边自适应

## less/scss 的特性

- 共同
  - 支持嵌套语法
  - 都有 mixin
  - 都有父选择器
  - 可以定义变量
  - 都是 css 预解析
  - 都支持运算
- 不同
  - less 变量使用@定义 sass 使用$号定义
  - sass 支持 for 循环 分支语句 less 不支持

## 移动端适配

- rem rem 是相对单位 相对于 html 根节点 font-size 大小 我们可以用 js 获取当前页面的宽度 来设置 html font-size 大小实现适配 插件 portcss-pxtorem

- vw vh 是相对于当前视口的宽度/高度 他把当前视口的宽/高分为 100 份 每一份 vw/vh 都是当前视口宽/高的 1% 我们可以借助 protcss-px-to-viewport 来实现

## rem，em，vw，vh，vmin，vmax，px 的区别

- px 是绝对单位 量出来是多少就是多少

- rem 是相对于 html 根节点 font-size 大小

- vw vh 是相对于视口的宽和高

- em 是当前节点的父元素的 font-size 大小 一般用于首行缩进

- vmax 取当前屏幕长宽的最大值 vmin 取当前屏幕的最小值

## 让 Chrome 支持小于 12px 的文字方式有哪些?

- zoom 非标属性 要考虑兼容性
- -webkit-transform:scale() (谷歌浏览器)
- 使用图片

## flex:1 ？

- 是 flex 布局的三个属性的符合写法

  - flex-grow: 1; 盒子放大比例
  - flex-shrink: 1; 盒子缩小比例
  - flex-basis: 0%; 设置为 0 会覆盖当前盒子宽度

## 重绘(repaint)/回流(reflow)

- 浏览器渲染原理
  - html 通过 html 解析器解析为 dom 树 , css 通过 css 解析为渲染规则
  - 两者会合二为一 成为渲染树
  - 浏览器根据渲染树 渲染页面
- 重绘 -- 回流
  - 代码发生了

```js
const arr = [5, 8, 12, 1, 2, 3, 4, 5, 6, 7, 1, 5, 7, 5, 2, 6, 3]

// 一: new Set()
// 输出为一个去重后的对象
// console.log(new Set(arr))
// 1.拓展运算符展开数组
// console.log([...new Set(arr)])
// 2.Array.from()
// console.log(Array.from(new Set(arr)))
// 3.函数封装
// const removeDuplication = arr => [...new Set(arr)]

// console.log(removeDuplication(arr)) // [1, 2, 3, 4, 5, 6, 7]

// 二:indexOf()
// const removeDuplication = arr => {
//   const tempArr = []
//   arr.forEach(
//     item => (tempArr.indexOf(item) === -1 ? tempArr.push(item) : item)

//     // if (tempArr.indexOf(item) === -1) {
//     //   tempArr.push(item)
//     // }
//   )
//   return tempArr
// }

// console.log(removeDuplication(arr))

// 三:sort()
// const removeDuplication = arr => {
//   arr = arr.sort()
//   const tempArr = []
//   arr.forEach((item, index) =>
//     item !== arr[index - 1] ? tempArr.push(item) : item
//   )

//   // {
//   //   if (item !== arr[index - 1]) {
//   //     tempArr.push(item)
//   //     console.log(111)
//   //   }
//   // }

//   return tempArr
// }

// console.log(removeDuplication(arr))

// 四.includes

// const removeDuplication = arr => {
//   const tempArr = []
//   arr.forEach(item => (tempArr.includes(item) ? item : tempArr.push(item)))

//   return tempArr
// }

// console.log(removeDuplication(arr))

// 五.filter()

// const removeDuplication = arr => {
//   return arr.filter((item, index) => arr.indexOf(item) === index)
// }

// console.log(removeDuplication(arr))

// 六.reduce
// const removeDuplication = arr => {
//   return arr.reduce((prev, item, index) => {
//     if (!prev.includes(item)) {
//       prev.push(item)
//     }
//     return prev
//   }, [])
// }

// console.log(removeDuplication(arr))

// 七.some

// const removeDuplication = arr => {
//   const tempArr = []
//   arr.forEach(item =>
//     !tempArr.some(temp => temp === item) ? tempArr.push(item) : item
//   )

//   // {
//   //   if (!tempArr.some(temp => temp === item)) {
//   //     tempArr.push(item)
//   //   }
//   // }

//   return tempArr
// }

// console.log(removeDuplication(arr))
```

```js

```
