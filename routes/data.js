var controller 	= require('../controllers/data');
var app 		= require('../app');

app.get('/:owner/:repo', controller.show);
app.get('/:owner/:repo/users', controller.users);