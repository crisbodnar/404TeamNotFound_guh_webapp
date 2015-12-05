var socket = io();

socket.connect('http://localhost:3000');

$('p#score1').text('3');