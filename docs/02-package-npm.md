# 代码的组织和部署

## 模块路径解析规则

- 内置模块 
  - 如果传递给 `require` 函数的是 NodeJS 内置模块名称，**不做路径解析，直接返回内部模块的导出对象**，例如 `require('fs')`

- node_modules 目录
  - node_modules 是 NodeJS 定义的特殊目录，用于存放模块
  - `require(foo/far)` 这种引用方式，NodeJS会依次尝试以下路径解析，
    `/home/user/node_modules/foo/bar` `/home/node_modules/foo/bar` `/node_modules/foo/bar`
  
- NODE_PATH 环境变量
  - 指定额外的模块搜索路径
  - 如果 NODE_PATH=/home/user/lib:/home/lib ，则当使用 `require(foo/far)` 加载模块时，NodeJS 依次尝试以下路径，
    `/home/user/lib/foo/bar` `/home/lib/foo/bar`

## 包 package 

- 多个子模块组成的大模块叫做包(package)

- **入口模块**，其他模块使用包时，需要加载包的入口模块。一般入口模块命名 `index.js` 

- **自定义入口模块的文件名和存放位置**，需要在包目录下包含一个 `package.json` 文件，并在其中指定入口模块的路径。

```json
{
  "name": "cat",
  "main": "./lib/main.js"
}
```
  如上配置后，则可使用 `require('/home/user/lib/cat')` 方式加载模块。NodeJS会根据包目录下的 `package.json` 找到入口模块的所在位置

## npm

- 下载三方包 

```
npm install xx 

// 指定包版本
npm install xx@1.0.0
```

- 发布代码

```
// 注册账号
npm adduser 

// 发布 package.json 所在目录 
npm publish 

// 清空npm本地缓存 
npm cache clear 

// 撤销发布过的某个版本代码
npm unpublish <package>@<version> 
```