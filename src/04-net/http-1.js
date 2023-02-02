const http = require('http')

http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text-plain'
  });

  let body = [];

  // http request 本质是数据流 由请求头headers 和 请求体body 组成
  console.log(request.method); // GET

  console.log(request.headers);
  // {
  //   host: '127.0.0.1:8801',
  //   connection: 'keep-alive',
  //   'cache-control': 'max-age=0',
  //   'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  //   'sec-ch-ua-mobile': '?0',
  //   'sec-ch-ua-platform': '"macOS"',
  //   'upgrade-insecure-requests': '1',
  //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  //   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  //   'sec-fetch-site': 'none',
  //   'sec-fetch-mode': 'navigate',
  //   'sec-fetch-user': '?1',
  //   'sec-fetch-dest': 'document',
  //   'accept-encoding': 'gzip, deflate, br',
  //   'accept-language': 'zh-CN,zh;q=0.9',
  //   sofapenattrs: 'group'
  // }

  console.log(response.headers);

  request.on('data', function(chunk) {
    console.log(chunk, 'chunk');
    body.push(chunk);
  });

  request.on('end', function() {
    body = Buffer.concat(body);

    console.log(body.toString(), 'body');

  })

  response.write('hello moto.');
  response.end();

}).listen(8801);

// const http = require('node:http');

// const postData = JSON.stringify({
//   'msg': 'Hello World!'
// });

// const options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(postData)
//   }
// };

// const req = http.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// });

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// // 将数据写入请求正文
// req.write(postData);
// req.end();