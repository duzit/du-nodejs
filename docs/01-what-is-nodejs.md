## NodeJS 基础

### 概念

- nodejs是一个解析器
  - js是脚本语言，需要解析器才能运行，对于写在HTML中js，浏览器是解析器。
  - 对于需要独立运行的js，nodejs是解析器。

- 每一种解析器都是一个运行环境
  - 允许js定义各种数据结构，进行各种计算。
  - 允许js使用运行环境提供的内置对象和方法做一些事情。

> 运行在浏览器中的js的用途是操作DOM，浏览器提供了document之类的内置对象。
> 运行在nodejs中的js的用途是操作磁盘文件或搭建http服务器，提供了fs，http等内置对象。

### 安装

- https://nodejs.org/en/download/ 

### 运行

- 打开终端，输入node进入命令交互模式

```bash
☁ ⚡  node    
Welcome to Node.js v16.16.0.
Type ".help" for more information.
> console.log
[Function: log]
> console.log('hello ')
hello 
undefined
> 
```

- 运行js文件

```js
// js文件
function hello() {
  console.log('hello node.');
}

hello()
```

```
☁  src [main] ⚡  node 01-what-is-nodejs.js 
hello node.
☁  src [main] ⚡  
```

### 模块

- nodejs 使用CMD模块系统 
  - js模块 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules 

- 一个文件就是一个模块，文件路径就是模块名
  - require
  - exports 
  - module

#### require 

- 在当前模块中加载和使用别的模块，传入模块名，返回一个模块导出对象

```js
// 相对路径
var foo2 = require('./foo.js') 
var foo1 = require('./foo') // 可省略扩展名
// 绝对路径
var foo1 = require('/home/user/foo') 

// 引用json文件
var data = require('./data_mock.json')
```

#### exports 

- 当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过`require`得到的就是当前模块`exports`对象

```js
exports.hello = function() {
  // do sth
}
```

#### module 

- 主要用于替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用 `module`

```js
module.exports = function() {
  // do sth
}
```

## 模块初始化

- 一个模块中的js代码仅在模块被第一次使用时初始化一次，并在执行过程中初始化模块的导出对象，之后，缓存起来的导出对象被重复利用。

