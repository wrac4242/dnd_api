# API documentation

## Version 0.1.0

## Routes

/version  
    get: gets the current API version

/notes  
    get: list all notes  
    post: new note, send note object  

/notes/types  
    get: list all note types  

/notes/:notesId  
    get: get note  
    put: update note, send new note  
    delete: remove note  

/tiles  
    get: list all tiles in the database  
    post: create new tiles at specified coordinates, send tile object  

/tiles/types
    get: list all tile types

/tiles/:tileId
    get: get tile  
    put: update tile, send new tile object  
    delete: remove tile  

## Types

### Notes

#### Notes Datatype

{  
 name: String, must be unique, required  
 note_type: String, must be a type listed in /notes/types, defaults to the first type  
 content: String, defaults to ""  
}  

### Tiles

each tile represents a hexagon, the coordinates are stored in the "axial coordinate" scheme listed [here](https://www.redblobgames.com/grids/hexagons/)  
more information about how to use and represent hexagons can be found in that link  

#### Tiles Datatype

{  
 coordinates: { r: Integer, q: Integer }, both required
 tile_type: String, must be a type listed in /tiles/types, defaults to the first type  
 notes: String, defaults to ""  
}  
