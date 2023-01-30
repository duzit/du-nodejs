const fs = require('fs');

function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));

// fs.createReadStream 创建了源文件的只读数据流
// fs.createWriteStream 创建了目标文件的只写数据流
// pipe 把两个数据流链接了起来