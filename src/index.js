const express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	mongoose = require('mongoose'),
	routes_creator = require("./routes.js");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL || "mongodb://localhost/dnd_db");

routes_creator(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
