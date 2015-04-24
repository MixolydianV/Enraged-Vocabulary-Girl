var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Enraged Vocabulary Girl';
  this.render();
}

module.exports = pagesController;
