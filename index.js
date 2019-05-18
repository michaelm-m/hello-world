//importing node framework
var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var myJson = require('./sample.json');

app.get('/', function (req, res) {
 res.render('index', {});
});

app.get('/hello', function (req, res) {
 res.send('hello there updated : ' + process.env.testKey);
});


//listen to port 3000 by default
app.listen(3000);
console.log('Running on Port : 3000');


// var redis = require("redis"),
//     client = redis.createClient();
//
// client.on("connect", function () {
//   console.log('REDIS connect');
//     client.set("bar", JSON.stringify(myJson));
//     client.get("bar", function (err, value) {
//       if (err) throw(err);
//       var testJson = JSON.parse(value);
//       console.log(testJson.glossary.title);
//     });
// });

module.exports = app;
