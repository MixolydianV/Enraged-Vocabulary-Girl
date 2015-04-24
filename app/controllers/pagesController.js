var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();
var insidecount = 0;
var outsidecount = 0;
pagesController.main = function() {
  this.title = 'Enraged Vocabulary Girl';
  var result = Math.sqrt(Math.pow(Math.random(), 2) + Math.pow(Math.random(), 2))
  if(result <= 1) {
	insidecount++;  
  }
  else {
	  outsidecount++;
  }
  this.Pi = insidecount / Math.max(outsidecount, 1);
  this.inside = insidecount;
  this.outside = outsidecount;
  this.render();
}

module.exports = pagesController;
