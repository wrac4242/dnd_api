const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routes_creator = require("./routes.js");
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

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

app.use(compression()); //Compress all routes
app.use(helmet()); //Basic security checks

app.disable('x-powered-by'); // disable basic fingerprinting

// custom 404
app.use((req, res) => {
	res.status(404).send("Not Found");
})

  // custom error handler
app.use((err, req, res) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
})

routes_creator(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
