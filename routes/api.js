var express = require('express');
var router = express.Router();
var users = [];

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
  		break;
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