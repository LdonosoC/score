function root (req, res){
	res.render('index.twig', {
		name	: 'GitScoring',
	});
};

module.exports = {
	root: root
};