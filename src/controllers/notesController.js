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
	Note.find({}, "name _id", function (err, note){
		if (err) {
			res.send(err);
		}
		res.json(note);
	});
};
