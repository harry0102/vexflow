var http       = require('http'),
    express    = require('express');

var app = express();

app.use(express.static(__dirname + '/../'));

app.listen(8081);

module.exports = app;