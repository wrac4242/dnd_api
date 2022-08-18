const express = require('express');
const app = express();

const routes_creator = require("./routes.js");

const port = process.env.PORT || 3000;

routes_creator(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})
