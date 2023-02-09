const child_process = require('child_process')
const { copyFile } = require('fs')
const util = require('util')
// nodejs调用终端命令 简化目录拷贝
function copy(source, target, callback) {
  child_process.exec(
    util.format('cp -r %s/* %s', source, target),
    callback
  )
}

// 子进程是异步运行的 通过回调函数返回执行结果
copy(dir1, dir2, function(err) {
  // do sth
})

/**
 * process 
 * 任何一个进程都有启动进程时使用的命令行参数，有标准输入标准输出，运行权限，运行环境和运行状态
 * 在NodeJS中 可以通过process对象感知和控制NodeJS自身进程的方方面面
 * ps：process不是内置模块 而是全局对象 任何地方都可以直接使用
 */

/**
 * Child Process
 * 使用 child_process 模块可以创建和控制子进程 
 * 核心API spawn 
 */

/**
 * cluster
 * 是对 child_process 模块的进一步封装，专用于解决单进程NodeJS web服务器无法充分利用多核CPU问题
 */

// 如何获取命令行参数
const argv = process.argv.slice(2); // node执行程序路径 和 主模块文件路径 占用了 [0] [1]
 
/**
 * 如何退出程序
 * 程序正常退出状态码为 0 
 * 异常退出状态码 不等于 0 
 */
try {
  // do sth
} catch (error) {
  // ...
  process.exit(1);
}

/**
 * 如何控制输入输出
 * process.stdin 只读数据流
 * process.stdout 只写数据流
 * process.stderr 只写数据流
 */
function log() {
  process.stdout.write(
    util.format.apply(util, arguments) + '\n'
  )
}

/**
 * 如何创建子进程
 * spawn(exec, args, options) http://nodejs.cn/api/child_process.html#child_processspawncommand-args-options
 * exec <string> 运行的命令
 * args <string[]> 字符串参数列表
 * options <Object> 配置子进程执行环境和行为
 */
const child = child_process.spawn('node', ['xxx.js']);

child.stdout.on('data', function(data) {
  console.log('stdout:' + data);
})

child.stderr.on('data', function(data) {
  console.log('stderr:' + data);
})

child.on('close', function(code) {
  console.log('close code:' + code);
})

/**
 * 进程间如何通信
 * child.kill()
 */
// parent.js child.js

