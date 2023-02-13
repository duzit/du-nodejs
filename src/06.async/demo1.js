
function compute(count) {
  let n = 0;
  for (let i = 0; i < count; i++) {
    n++;
  }
}

const t = new Date();

setTimeout(() => {
  console.log(new Date() - t); // 1002 != 1000
}, 1000)

compute(5000);