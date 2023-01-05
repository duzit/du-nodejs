const demo = require('./demo1')
const demo2 = require('./demo2')

const counter1 = require('./demo3')
const counter2 = require('./demo3')

function hello() {
  console.log('hello node.');
}

hello()

// 主要用于替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用 `module`
console.log(demo); // { name: 'duzit', age: 12 }

console.log(demo2('module')); // module
// console.log(demo2);


// 一个模块中的js代码仅在模块被第一次使用时初始化一次，并在执行过程中初始化模块的导出对象 
console.log(counter1.counter()); // 2
console.log(counter2.counter()); // 3
console.log(counter2.counter()); // 4