var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/servise.html', function (req, res) {
    res.sendFile(__dirname + '/servise.html');
});

app.get('/contact.html', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

http.listen(3000, function () {
    console.log('Listen on 3000');
});





