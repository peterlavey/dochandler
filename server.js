// get the things we need
var express = require('express');
var app     = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
	//res.sendFile(path.join(__dirname + '/public/assets/sidebar/index.html'));
});

app.listen(3000);
console.log('Magic happens on port 3000.');
