const child_process = require('child_process');

const child = child_process.spawn('node', ['child.js'])

child.kill('SIGTERM')

child.on('close', function(code) {
  console.log('code: ' + code);
})