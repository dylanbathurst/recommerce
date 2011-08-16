var response = require('lib/response');

module.exports = function (app) {
  app.get('/', function (req, res) {
    response.template(res, 200, 'index.html', {});
  });
};
