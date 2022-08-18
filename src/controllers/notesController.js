var mongoose = require('mongoose'),
	Note = mongoose.model('Notes');

exports.note_types = [ // practically an enum, first is default
	"General_note",
	"NPC",
	"Town",
	"Weapon"
]
