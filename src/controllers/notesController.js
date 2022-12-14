let mongoose = require("mongoose");
let Note = mongoose.model("Notes");
let Types = require("../types.js");

exports.list_all_notes = function (req, res) {
    Note.find({}, function (err, note) {
        if (err) {
            res.send(err);
        }
        res.json(note);
    });
};

exports.create_note = function (req, res) {
    let new_note = new Note(req.body);
    new_note.save(function (err, note) {
        if (err) {
            res.send(err);
        }
        res.json(note);
    });
};

exports.read_note = function (req, res) {
    Note.findById(req.params.noteId, function (err, note) {
        if (err) res.send(err);
        res.json(note);
    });
};

exports.update_note = function (req, res) {
    Note.findOneAndUpdate(
        { _id: req.params.noteId },
        req.body,
        { new: true },
        function (err, note) {
            if (err) res.send(err);
            res.json(note);
        },
    );
};

exports.delete_note = function (req, res) {
    Note.deleteOne({ _id: req.params.noteId }, function (err) {
        if (err) res.send(err);
        res.json({ message: "note successfully deleted" });
    });
};

exports.get_types = function (req, res) {
    res.json(Types.note_types);
};
