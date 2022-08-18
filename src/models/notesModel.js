var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var notesController = require("../controllers/nodesController.js");

var NoteSchema = new Schema({
	name: {type: String, required: true},
	note_type: {type: [{
			type: String,
			enum: notesController.note_types
		}], 
		default: notesController.note_types[0]
	},
	note_content: {type: String, default: ""}
});

module.exports = mongoose.model("Notes", NoteSchema);
