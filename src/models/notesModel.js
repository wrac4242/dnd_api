var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Types = require("../types.js");

var NoteSchema = new Schema({
	name: {type: String, required: true, unique: true},
	note_type: {type: [{
			type: String,
			enum: Types.note_types
		}], 
		default: Types.note_types[0]
	},
	content: {type: String, required: true}
});

module.exports = mongoose.model("Notes", NoteSchema);
