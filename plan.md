# A General Plan for the API

## API routes

### Important Notes

/notes  
    get: list all notes  
    post: new notes, returns notesId  

/notes/:notesId  
    get: get note  
    put: update note  
    delete: remove note  

### Hex tiles

[Hexagon Information](https://www.redblobgames.com/grids/hexagons/)  
Hex Coordinates are stored in the "axial coordinate scheme"  
If a tile is not returned, then it does not exist  

/tiles  
    get: list all tiles  
    post: create new tiles at specified coordinates  

## Object Types

tile object

+ coordinates // tuple of integers (r, q)  
+ type of tile // string reference to type  
+ notes  

types of tile

+ settlement // specifics in notes  
+ plain  
+ desert  
+ mountain  
+ water  
+ not_generated  

### notes

Note

+ Name
+ Type of note // string reference to type
+ NoteId
+ note content

types of notes

+ general notes
+ NPC
+ Town
+ Weapon

## proposed changes

+ [ ] tags be added to notes?
