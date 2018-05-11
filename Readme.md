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

- 准备将webpack修改为多入口模式，以解决公共组件的打包问题

- 另类解决办法，不使用webpack，只使用tsc编译，公共部分仍然在*.html引入，但是为了让Ts文件识别$,仍旧 import jQuery 后注释掉 