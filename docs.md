# API documentation

## Version 0.1.0

## Payload Information

All HTTP bodies if required should be in JSON  
When updating an item, send all required information as well

## Routes

/version  
 GET: gets the current API version

/notes  
 GET: list all notes  
 POST: new note, send note object

/notes/types  
 GET: list all note types

/notes/:notesId  
 GET: get note  
 PUT: update note, send new note  
 DELETE: remove note

/tiles  
 GET: list all tiles in the database  
 POST: create new tiles at specified coordinates, send tile object

/tiles/types  
 GET: list all tile types

/tiles/:tileId  
 GET: get tile  
 PUT: update tile, send new tile object  
 DELETE: remove tile

## Types

### Notes

#### Notes Datatype

{  
 name: String, must be unique, required  
 note_type: String, must be a type listed in /notes/types, defaults to the first type listed  
 content: String, defaults to ""  
}

### Tiles

each tile represents a hexagon, the coordinates are stored in the "axial coordinate" scheme listed [here](https://www.redblobgames.com/grids/hexagons/)  
more information about how to use and represent hexagons can be found in that link

#### Tiles Datatype

{  
 coordinates: { r: Integer, q: Integer }, both required  
 tile_type: String, must be a type listed in /tiles/types, defaults to the first type listed  
 notes: String, defaults to ""  
}
