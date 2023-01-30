const processArgv = process.argv;

console.log(processArgv);
// [
//   '/Users/duwei/.nvm/versions/node/v16.16.0/bin/node',
//   '/Users/duwei/Desktop/dw/duzit/du-nodejs/src/03-file-opt/demo1.js'
// ]
// argv[0] 固定等于NodeJS执行程序的绝对路径
// argv[1] 等于主模块的绝对路径
// 因此 第一个命令行参数从 argv[2] 开始

const fs = require('fs');

function copy(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src))
}

function main(argv) {
  if (!argv?.length) {
    console.log('no argv');
    return;
  }
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));

/**
 * node 03-file-opt/demo1.js  /Users/duwei/Desktop/dw/duzit/du-nodejs/fileTest/03-t1.js /Users/duwei/Desktop/dw/duzit/du-nodejs/fileTest/03-t2.js 这个命令会把 t1 的内容写到 t2 文件中
 */

const t1 = fs.readFileSync('/Users/duwei/Desktop/dw/duzit/du-nodejs/fileTest/03-t1.js')
console.log(t1); // <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 27 68 65 6c 6c 6f 20 74 31 27 29 3b> Buffer类型