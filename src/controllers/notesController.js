var mongoose = require('mongoose'),
	Note = mongoose.model('Notes');

/*
/notes  
    get: list all notes by name and ID 
    post: new note

/notes/:notesId  
    get: get note  
    put: update note  
    delete: remove note 
*/

exports.list_all_notes = function(req, res) {
	Note.find({}, function (err, note){
		if (err) {
			res.send(err);
		}
		res.json(note);
	});
};

exports.create_note = function(req, res) {
	var new_note = new Note(req.body);
	new_note.save(function(err, task) {
		if (err){
			res.send(err);
		}
		res.json(task);
	});
}
