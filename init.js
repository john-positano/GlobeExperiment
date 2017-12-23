var express = require('express');
var app = express();

app.get(
	'/',
	(req, res, next) => {
		res.setHeader('Content-Type','text/plain');
		res.status(200);
		res.send('Hi.');
		return;
	}
);

app.listen(8080);
