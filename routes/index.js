console.log('4');
var app = require('../app');
console.log('2');

app.get('/', function(){
	console.log('routaok');
});
console.log('3');