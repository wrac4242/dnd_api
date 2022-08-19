const packageJson = require("../package.json");

// route generation and creation

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.send("Check Docs for Correct Route");
    });

    app.get("/version", (req, res) => {
        res.json(packageJson.version || "Err: version not found");
    });

    const notesController = require("./controllers/notesController.js");
    app.route("/notes")
        .get(notesController.list_all_notes)
        .post(notesController.create_note);

    app.route("/notes/types").get(notesController.get_types);

    app.route("/notes/:noteId")
        .get(notesController.read_note)
        .put(notesController.update_note)
        .delete(notesController.delete_note);

    const tilesController = require("./controllers/tilesController.js");
    app.route("/tiles")
        .get(tilesController.list_all_tiles)
        .post(tilesController.create_tile);

    app.route("/tiles/types").get(tilesController.get_types);

    app.route("/tiles/:tileId")
        .get(tilesController.read_tile)
        .put(tilesController.update_tile)
        .delete(tilesController.delete_tile);
};
