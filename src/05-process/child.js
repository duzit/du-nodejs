process.on('SIGTERM', function() {
  console.log('i am child.');
  process.exit(0);
})