
// 异步编程最直接的体现是回调，异步编程依托于回调来实现，但不能说使用了回调程序就异步了
function compute(n, callback) {
  let count = 0;

  for (let index = 0; index < n; index++) {
    count++;
  }

  callback(count);
}

compute(100, function(count) {
  console.log(count);
})

console.log('hello');

// 100
// hello
// 回调函数依然先于后续代码执行

/**
 * JS是单线程运行的，不可能在一段代码还未结束时去运行别的代码，因此就不存在异步执行的概念
 * 但是，
 * 如果某个函数做的事情就是创建一个别的线程或进程，并与js主线程并行地做一些事情，并在事情结束后通知js主线程，那情况就不一样了
 */

setTimeout(() => {
  console.log(222);
}, 100);

console.log(111);
// 111
// 222
// 可以看到回调函数在后续代码之后执行了
// setTimeout 是由运行环境提供的特殊函数，在JS规范之外，创建一个平行线程后立即返回，让js主进程可以继续执行后续代码，并在收到
// 平行线程的通知后再执行回调函数。但回调函数必须等主线程空闲时才能开始执行，如果此时主线程有大量的计算工作，那回调函数执行时间可能会延后。