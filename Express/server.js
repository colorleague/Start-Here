var express = require('express'),
	app = express(),
	path = require('path');

// Cors!
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

/* option 1 - Set directory to "/App" & THEN make GET request from THAT directory */
app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

/* option 2 - Direct GET request to index file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/app/index.html'));
});
*/

/* option 2 - "ALL" GET request to index file
app.all('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/app/index.html'));
});
*/

app.listen(8080);
console.log('meet-irl is running on 8080');