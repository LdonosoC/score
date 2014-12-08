var request = require('request');

function Project(name) {
	var self = this;
	this.name = name;

	this.getscoring = function (cb) {
		var path 	= self.name;
		var URL 	= 'https://gitscoring.herokuapp.com/' + path;
		var options = {
		    url: URL,
		    headers: {
		        'User-Agent': 'NodeJS User-Agent',
		        'Accept'	: "application/json" 
		    }
		};
		request(options, function (err, res, body) {
			if (err) {
				console.log(err);
				return;
			}

		var scorings = JSON.parse(body);
		cb(scorings);
		});
	};
};

module.exports = Project;
