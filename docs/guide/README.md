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

- 如果需要
