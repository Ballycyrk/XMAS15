var vacation                = require('../controllers/vacations.js');

module.exports = function(app){
  app.post('/vaca',         function(req, res) { vacation.create(req, res) })
  app.get('/vaca',          function(req, res) { vacation.show(req, res) })
  }

