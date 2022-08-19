var mongoose = require('mongoose');
var Tile = mongoose.model('Tiles');
var Types = require("../types.js");

exports.list_all_tiles = function(req, res) {
	Tile.find({}, function (err, tile){
		if (err) {
			res.send(err);
		}
		res.json(tile);
	});
};

exports.create_tile = function(req, res) {
	var new_tile = new Tile(req.body);
	new_tile.save(function(err, tile) {
		if (err){
			res.send(err);
		}
		res.json(tile);
	});
}

exports.read_tile = function (req, res) {
	Tile.findById(req.params.tileId, function(err, tile) {
		if (err) 
			res.send(err);
		res.json(tile);
	});
};

exports.update_tile = function(req, res) {
	Tile.findOneAndUpdate({_id: req.params.tileId}, req.body, {new: true}, function(err, tile) {
		if (err)
			res.send(err);
		res.json(tile);
	});
};


exports.delete_tile = function(req, res) {
	Tile.deleteOne({_id: req.params.tileId}, function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'tile successfully deleted' });
	});
};

exports.get_types = function(req, res) {
	res.json(Types.tile_types);
}
