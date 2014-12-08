var Project = require('../models/data');

function show(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	res.render('data.twig', {
		project: project.name
	});
};

function getusers(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	project.getscoring(function (scorings) {
		res.render('users.twig', {
			scorings: scorings
		});
	});
};

module.exports = {
	users: getusers,
	show: show, 
};