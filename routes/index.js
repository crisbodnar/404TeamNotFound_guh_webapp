var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/game', function(req, res, next) {
	var names = [];
	for (var key in req.query)
	{
		if (key != "keep")
			names.push(req.query[key]);
	}
	var scores = [];
	for (var i=0; i<names.length; i++)
	{
		scores[i] = (users[names[i]] ? users[names[i]].score : 0);
	}
	if(req.query.keep != 1)
	{
		if(users[req.query.name1]) users[req.query.name1].score = 0;
		if(users[req.query.name2]) users[req.query.name2].score = 0;
	}
	var width = Math.floor(12 / names.length);
	res.render('game', {names : names, 
						scores : scores,
						width : width});
});

router.get('/creategame', function(req, res, next) {
	res.render('creategame');
})

module.exports = router;
