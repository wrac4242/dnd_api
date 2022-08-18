var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Types = require("../types.js");

var TilesSchema = new Schema({
	name: {
		r: {
			type: Number, required: true, integer: true,
			get: v => Math.round(v),
			set: v => Math.round(v),
		}, q: {
			type: Number, required: true, integer: true,
			get: v => Math.round(v),
			set: v => Math.round(v),
		}
	},
	Tile_type: {
		type: String,
		enum: Types.tile_types, 
		default: Types.tile_types[0]
	},
	notes: {type: String, default: ""}
});

module.exports = mongoose.model("Tiles", TilesSchema);

