var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game', function(req, res, next) {
  res.render('game');
});

// console.log(io);

module.exports = router;