var express = require('express');
var app = express();
require('dotenv').config();

app.get(
	'/',
	(req, res, next) => {
		res.send('Hi!');
	}
);

app.set(
	'port',
	process.env.PORT
	||
	80
);

app.listen(
	app.get('port'),	
	() => {
		console.log(`Listening on port ${app.get('port')}`);
	}
);