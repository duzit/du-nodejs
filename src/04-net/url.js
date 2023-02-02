// URL 组成部分
//                              href
//  -----------------------------------------------------------------
//                             host              path
//                       --------------- ----------------------------
//  http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
//  -----    ---------   --------   ---- -------- ------------- -----
// protocol     auth     hostname   port pathname     search     hash
//                                                 ------------
//                                                    query

const url = require('url');

/**
 * parse 
 * URL字符串转为对象
 */
const urlParse1 = url.parse('http://nqdeng.github.io/7-days-nodejs/#4.2.2');
const urlParse2 = url.parse('https://cn.bing.com/search?q=request.on+nodejs&qs=n&form=QBRE&sp=-1&pq=request.on+nodejs&sc=6-17&sk=&cvid=9D389B2CE5CA4EA7BED905721BA3A090&ghsh=0&ghacc=0&ghpl=');

console.log(urlParse1, 'urlParse1');
// {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'nqdeng.github.io',
//   port: null,
//   hostname: 'nqdeng.github.io',
//   hash: '#4.2.2',
//   search: null,
//   query: null,
//   pathname: '/7-days-nodejs/',
//   path: '/7-days-nodejs/',
//   href: 'http://nqdeng.github.io/7-days-nodejs/#4.2.2'
// } 
console.log(urlParse2, 'urlParse2');
// {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'cn.bing.com',
//   port: null,
//   hostname: 'cn.bing.com',
//   hash: null,
//   search: '?q=request.on+nodejs&qs=n&form=QBRE&sp=-1&pq=request.on+nodejs&sc=6-17&sk=&cvid=9D389B2CE5CA4EA7BED905721BA3A090&ghsh=0&ghacc=0&ghpl=',
//   query: 'q=request.on+nodejs&qs=n&form=QBRE&sp=-1&pq=request.on+nodejs&sc=6-17&sk=&cvid=9D389B2CE5CA4EA7BED905721BA3A090&ghsh=0&ghacc=0&ghpl=',
//   pathname: '/search',
//   path: '/search?q=request.on+nodejs&qs=n&form=QBRE&sp=-1&pq=request.on+nodejs&sc=6-17&sk=&cvid=9D389B2CE5CA4EA7BED905721BA3A090&ghsh=0&ghacc=0&ghpl=',
//   href: 'https://cn.bing.com/search?q=request.on+nodejs&qs=n&form=QBRE&sp=-1&pq=request.on+nodejs&sc=6-17&sk=&cvid=9D389B2CE5CA4EA7BED905721BA3A090&ghsh=0&ghacc=0&ghpl='
// }

/**
 * format
 * 将URL对象转换为URL字符串
 */

const format = url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
})

console.log(format); // https://example.com/some/path?page=1&format=json

/**
 * resolve 
 * 拼接URL
 */

const resolve1 = url.resolve(
  'https://www.hello.com/foo/bar',
  '../foo'
)
const resolve2 = url.resolve(
  'https://www.hello.com/foo/bar',
  'foo'
)

console.log(resolve1, resolve2); // https://www.hello.com/foo https://www.hello.com/foo/foo

/**
 * querystring 
 * 用于实现 URL参数字符串 与 参数对象 的相互转换
 */
const querystring = require('querystring')
const qsparse = querystring.parse('a=1&b=2&c=3&c=4&d=')
console.log(qsparse); // { a: '1', b: '2', c: [ '3', '4' ], d: '' }

const qsstringify = querystring.stringify({ a: '1', b: '2', c: [ '3', '4' ], d: '' })
console.log(qsstringify); // a=1&b=2&c=3&c=4&d=

