var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
	if(req.query.keep != 1)
	{
		if(users[req.query.name1]) users[req.query.name1].score = 0;
		if(users[req.query.name2]) users[req.query.name2].score = 0;
	}
	res.render('game', {name1 : req.query.name1, 
						name2 : req.query.name2, 
						score1 : (users[req.query.name1] ? users[req.query.name1].score : 0),
						score2 : (users[req.query.name2] ? users[req.query.name2].score : 0)});
});

module.exports = router;
