
/**
 * domain 域
 * 简化异步代码的异常处理
 * 一个域就是一个js运行环境，在一个运行环境中，如果一个异常没有被捕获，将作为一个全局异常被抛出 process.on('uncaughtException', callback)
 */

const http = require('http')
const domain = require('domain')

function async(request, callback) {
  // do sth

  // asyncA(request, function(data) {
  //   // do sth 
  //   asyncB(request, function(data) {
  //     // do sth
  //   })
  //   // ...
  // })
}

http.createServer(function(request, response) {
  const d = domain.create()

  d.on('error', function() {
    response.writeHead(500)
    response.end()
  })

  d.run(function () {
    async(request, function(data) {
      response.writeHead(200)
      response.end()
    })
  })
})