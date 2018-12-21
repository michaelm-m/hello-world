//importing node framework
var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
 res.render('index', {});
});

app.get('/hello', function (req, res) {
 res.send('hello there');
});


function checkRange(x, a, b) {
  return a<x==x<b;
}

console.log('Range : ', checkRange(15, 20, 10));


//listen to port 3000 by default
app.listen(3000);
console.log('Running on Port : 3000');

module.exports = app;
