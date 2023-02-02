// 与http极为相似 区别是 https 模块需要额外处理SSL正式

// 服务端模式
const fs = require('fs');
const https = require('https');

// 配置公钥和私钥
const options = {
  key: fs.readFileSync('./ssl/default.key'),
  cert: fs.readFileSync('./ssl/default.cer')
}

const server = https.createServer(options, (request, response) => {
  // ...
})

// NodeJS支持SNI技术，可以根据与https客户端请求使用的域名动态使用不同的证书，同一个https服务器可以使用多个域名提供服务
server.addContext('foo.com', {
  key: fs.readFileSync('./ssl/foo.com.key'),
  cert: fs.readFileSync('./ssl/foo.com.cer')
})

server.addContext('bar.com', {
  key: fs.readFileSync('./ssl/bar.com.key'),
  cert: fs.readFileSync('./ssl/bar.com.cer')
})

