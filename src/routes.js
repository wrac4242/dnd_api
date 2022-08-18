const express = require('express');

// route generation and creation

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.send("Hello World");
	});
}
