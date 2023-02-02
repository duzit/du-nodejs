// net

const http = require('http')

http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text-plain'
  })

  response.end('Hello Node.\n')
}).listen(8080);

// createServer 创建服务器
// listen 监听端口
// 访问 http://127.0.0.1:8080/ 页面出现 Hello Node.