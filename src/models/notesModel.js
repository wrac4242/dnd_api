let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Types = require("../types.js");

let NoteSchema = new Schema({
    name: { type: String, required: true, unique: true },
    note_type: {
        type: String,
        enum: Types.note_types,
        default: Types.note_types[0],
    },
    content: { type: String, required: true },
});

module.exports = mongoose.model("Notes", NoteSchema);
