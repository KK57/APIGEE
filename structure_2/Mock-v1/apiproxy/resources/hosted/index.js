var http = require('http');

console.log('node.js application starting...');
console.log(process.env);

var svr = http.createServer(function(req, resp) {
  console.log(req.method, req.url);
  resp.setHeader("Content-Type", "application/json");
  var mysql = require('./mysql');

mysql.query();

  resp.end(JSON.stringify({ date: new Date(), msg: 'Hello, World! I am KK.'}));
});

svr.listen(process.env.PORT || 3000, function() {
  console.log('Node HTTP server is listening');
});
