const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routes_creator = require("./routes.js");
const bodyParser = require('body-parser');

// mongoose type loading
require('./models/notesModel.js');
require('./models/tilesModel.js'); 

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1/dnd_db").then(() => {
		console.log("Connected to Database");
	}).catch((err) => {
		console.log("Not Connected to Database ERROR! ", err);
	});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes_creator(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
