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

\<template\> \</template\>标签+

## 项目登录流程

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
