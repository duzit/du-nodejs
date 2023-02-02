const http = require('http');

const options = {
  hostname: 'https://juejin.cn/user/2981531267631864',
  port: 8080,
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};


// http.request 创建客户端 
const req = http.request(options, (res) => {
  console.log(res);
  // 当客户端发送请求 并接收到服务端响应头时 就会调用回调函数
  // res 对象可访问响应头数据，也可当做只读数据流访问响应体数据
})

// 写入请求体数据
req.write('hello moto')
req.end(); // 结束请求

// http.get('https://juejin.cn/user/2981531267631864', (res) => {
//   console.log(res, 12);
// })