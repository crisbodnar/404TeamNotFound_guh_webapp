var express = require('express');
var router = express.Router();
GLOBAL.users = [];

function addPlayer(uname, ballid){
  var player = {
    ballid: ballid,
    score: 0
  };
  users[uname] = player;
}

function playerScore(ballid){
  for (var index in users)
  	if(users[index].ballid == ballid){
  		users[index].score++;
      io.emit('score',{uname : index, score : users[index].score});
  	}
}

router.get('/addPlayer', function(request, response) {
  addPlayer(request.query.uname, request.query.ballid);
  console.log(users);
  //console.log(request.query);
  response.send('respond with a resource');
});

router.get('/playerScore', function(request, response) {
  playerScore(request.query.ballid);
  console.log(users);
  response.send('respond with a resource');
});



module.exports = router;