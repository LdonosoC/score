var request = require('request');

var getscoring = function (req, res, cb) {
	var owner	= req.params.owner;
	var repo	= req.params.repo;
	var project = owner + '/' + repo;
	var URL 	= 'https://gitscoring.herokuapp.com/' + project;
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

	var scorings = body;
	render(scorings);

	});

	var render = function (scorings) {
		res.render('data.twig', {
			scorings: scorings
		});
	};
};

module.exports = {
	scoring: getscoring
};