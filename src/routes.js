const express = require('express');

// route generation and creation

module.exports = function(app) {
	const notesController = require('./controllers/notesController.js');
	app.get('/', (req, res) => {
		res.send("Check Docs for Correct Route");
	});

	app.route('/notes')
		.get(notesController.list_all_notes)
		.post(notesController.create_note);
	
	app.route('/notes/:noteId')
		.get(notesController.read_note)
		.put(notesController.update_note)
		.delete(notesController.delete_note);
}
