var controller 	= require('../controllers/data');
var app 		= require('../app');

app.get('/:owner/:repo', controller.scoring);