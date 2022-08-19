let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Types = require("../types.js");

let TilesSchema = new Schema({
    coordinates: {
        r: {
            type: Number,
            required: true,
            integer: true,
            get: (v) => Math.round(v),
            set: (v) => Math.round(v),
        },
        q: {
            type: Number,
            required: true,
            integer: true,
            get: (v) => Math.round(v),
            set: (v) => Math.round(v),
        },
    },
    tile_type: {
        type: String,
        enum: Types.tile_types,
        default: Types.tile_types[0],
    },
    notes: { type: String, default: "" },
});

module.exports = mongoose.model("Tiles", TilesSchema);
