# ts-jQuery-frontEnd package
## 尝试原因：
- 学习 typescript ，尝试介入传统的前端场景
  - react/ng 已经使用 typescript
  - vue cli 目前版本 3.0 beta6 ，在完善typescript与vue的使用，等待正式版
  - 当前时间 ：2018.5.10 16:29
- 希望以此来解决部分JS部分类型错误和代码提示与检查的问题
## [参考资料](https://www.cnblogs.com/angrymoto/p/giveupjquery-1.html)
## 运行环境
- 必须全局安装 typescript 、 webpack 、 webpack-cli
- 编辑器建议使用 vscode

## 问题
- 多页面 jQuery 缓存的问题

- 准备将webpack修改为多入口模式，以解决公共组件的缓存与打包问题
  - [参考资料](http://www.jb51.net/article/117490.htm)

- 另类解决办法，不使用webpack，只使用tsc编译，公共部分仍然在*.html引入，但是为了让Ts文件识别$,仍旧 import jQuery 后注释掉 




## 考虑后决定理清两个编译方式的区别
1. 分别为 tsc 方式 and webpack 方式
1. 区分开的原因：
    - webpack 不适合使用在老项目中，否则会引起项目整体的割裂，缓存与可读性，前后分离与架构的问题（PHP模板、jsp等），除非重构？？？
    - 只使用tsc的方式能较好的兼容老项目，注意不要使用import export 等语法



## 拖延症，webpack多入口模式待补充