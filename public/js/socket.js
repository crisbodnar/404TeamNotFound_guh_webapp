var socket = io();

socket.connect('http://2guys2balls.azurewebsites.net');
socket.on('score',function(message)
{
	console.log(message);
	if ($('p#name1').text() == message.uname) $('p#score1').text(message.score);
	if ($('p#name2').text() == message.uname) $('p#score2').text(message.score);
});
