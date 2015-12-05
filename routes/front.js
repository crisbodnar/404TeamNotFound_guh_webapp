var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game', function(req, res, next) {
  res.render('game', {name1 : req.query.name1, name2 : req.query.name2});
});

<<<<<<< .merge_file_b0KeqF
// console.log(io);
=======
>>>>>>> .merge_file_eUz8KC

module.exports = router;