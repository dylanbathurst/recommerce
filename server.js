var connect  = require('connect');

require.paths.unshift(__dirname, __dirname + '/app');

var server = connect.createServer(
  connect.static(__dirname + '/public'),

  connect.router(require('./app/controllers/home'))
);

server.listen(8000);
