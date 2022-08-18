const express = require('express');
const packageJson = require("../package.json");

// route generation and creation

module.exports = function(app) {
	const notesController = require('./controllers/notesController.js');
	app.get('/', (req, res) => {
		res.send("Check Docs for Correct Route");
	});

	app.route('/notes')
		.get(notesController.list_all_notes)
		.post(notesController.create_note);
		
	app.route('/notes/types')
		.get(notesController.get_types);

	app.route('/notes/:noteId')
		.get(notesController.read_note)
		.put(notesController.update_note)
		.delete(notesController.delete_note);

	app.get('/version', (req, res) => {
		res.json(packageJson.version || "Err: version not found");
	})

}
