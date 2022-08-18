# A General Plan for the API

## API routes

### uncategorised

/version  
    get: gets the current API version

### Notes

/notes  
    get: list all notes  
    post: new note, send note object  

/notes/types
    get: list all note types  

/notes/:notesId  
    get: get note  
    put: update note, send new note  
    delete: remove note  

### Hex tiles

[Hexagon Information](https://www.redblobgames.com/grids/hexagons/)  
Hex Coordinates are stored in the "axial coordinate scheme"  
If a tile is not returned, then it does not exist  

/tiles  
    get: list all tiles  
    post: create new tiles at specified coordinates, send tile object  

/tiles/types
    get: list all tile types

/tiles/:CoordinateR/:CoordinateQ
    get: get tile
    put: update tile, send new tile object
    delete: remove tile

## Object Types

tile object

+ coordinates: { r: int, q: int }
+ tile_type // string reference to type  
+ notes // name of note, null if none  

types of tile

+ "Settlement" // specifics in notes  
+ "Plain"  
+ "Desert"  
+ "Mountain"  
+ "Water"  
+ "None" // also the not generated type  

### notes

Note

+ name // must be unique
+ note_type // string reference to type
+ content

types of notes

+ "General_note"
+ "NPC"
+ "Town"
+ "Weapon"

## proposed changes

+ [ ] tags be added to notes?
+ [ ] add session object, predominantly for scheduling
