var mu = require('mu2'),
    util = require('util');


exports.template = function (res, statusCode, template, view) {
  mu.root = __dirname + '/../app/views/';

  res.writeHead(statusCode, {
    'Content-Type': 'text/html'
  });

  mu.compile(template, function (err, parsed) {
    if (err) throw err;

    var readableStream = mu.render(template, view);

    util.pump(readableStream, res, function (err) {
      console.log('ERROR pumping your mom');
    });
  });
};
