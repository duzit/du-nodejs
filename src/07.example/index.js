const fs = require('fs')
const path = require('path')
const http = require('http')

function parseURL(root, url) {
  let base, pathnames, parts

  // 如果不存在?? 则添加
  if (url.indexOf('??') == -1) {
    url = url.replace('/', '/??')
  }

  parts = url.split('??')
  // 公共url部分 parts[0]
  base = parts[0]
  // 需要合并的文件 parts[1]
  pathnames = parts[1].split(',').map(v => {
    return path.join(root, base, v)
  })

  return {
    mime: MIME[path.extname(pathnames[0])] || 'text/plain',
    pathnames
  }
}

function combineFiles(pathnames, callback) {
  const output = [];

  (
    function next(i, len) {
      if (i < len) {
        fs.readFile(pathnames[i], function(err, data) {
          if (err) {
            callback(err)
          } else {
            output.push(data);
            next(i + 1, len);
          }
        })
      } else {
        callback(null, Buffer.concat(output));
      }
    }(0, pathnames.length)
  )

}

function main(argv) {
  const config = JSON.parse(fs.readFileSync(argv[0], 'utf-8'))
  const root = config.root
  const port = config.port

  http.createServer(function(request, response) {
    const urlInfo = parseURL(root, request.url)

    combineFiles(urlInfo.pathnames, function(err, data) {
      if (err) {
        response.writeHead(404)
        response.end(err.message)
      } else {
        response.writeHead(200, {
          'Content-Type': urlInfo.mime
        })
        response.end(data)
      }
    })

  }).listen(port)
}

main(process.argv.slice(2))