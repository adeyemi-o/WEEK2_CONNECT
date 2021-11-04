var connect = require('connect');
var http = require('http');

var app = connect();

console.log("Our connect server is running");

function helloworld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}

function byeworld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye World');
}

app.use('/hello', helloworld);
app.use('/bye', byeworld);

app.listen(3000);