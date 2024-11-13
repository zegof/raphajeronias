// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level3":
            case "Level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
            case "Level1Tilemap":
            case "Level2Tilemap1":return tiles.createTilemap(hex`24001000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050106010101010101010101040101010505050401010101010101010101010101010101050106010101010101010101010101010101010101010101010c0e0c01010104040404040404040101010101010101010101010101010101010101010d0e0e0e0e010101010101010101010101010101010101010101010101010101010101010e0d0d0d0d010101010101010101010101010104040101010101010101010101010101010e0e0e0c0d0101010101010101010101010101010104010101010101010101010101010101010b01010101010101010101010101010101010101010101010101010101010101010101010b01010101010101010101010103090a0707030a0803090303070307030803030a0309030b03090a030803090703030309020202020202020202020202020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
....................................
....................................
....................................
....................................
.................................2..
.........2...2222................2..
......................2.2...2....222
....................................
....................................
....22..............................
.....22................2............
.......................2............
.......................2............
222222222222222222222222222222222222
....................................
....................................
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles10,sprites.castle.tilePath8,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile5,myTiles.tile11], TileScale.Sixteen);
            case "Bossarena1Tilemap":
            case "Bossarena1Tilemap1":return tiles.createTilemap(hex`320032000407070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070706080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a0803030303030303030303030303030303030303030303030303030303030303030303030303030303030303030307070707080303030303030303030303030303030303030303030303030303030303030303030303030303030303070707070303030a080303030303030303030303030303030303030303030303030303030303030303030303030303070707030303030303030a070707070707070707070707070707070703030303030303030303030303030303030303070707030303030303030303030a080303030303030303030303030303030303030303030303030303030303030307070707030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303070703030303030303030303030303030303030a0803020303030303030303030303030303030303030303070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a0803030303030307070707070707070707070707070707070707070707070707070707070707070707070707070707070707080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a070707030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303070703030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a0803030303070703030303030303030707070707070707070707070707070707070707070707070707070707070707070707080303030303030707070303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030707030303030303030303030303030303030303030303030303030303030303030303030303030a070707030303030303030303070703030303030303030303030303030303030303030303030303030303030303030303030a080303070303030303030303030307070703030303030303030303030303030303030303030303030303030303030303030a0803030307070303030303030303030303070703030303030303070707070707070707070707070707070707070707070707080303030303070703030303030303030303030707070303030303030303030303030303030303030303030303030303030a080303030303030307070303030303030303030303030707030303030303030303030303030303030303030303030303030a080303030303030303030707030303030303030303030303070703030303030303030303030303030303030303030303030a080303030303030303030303070703030303030303030303030307070703030303030303030303030303030303030303030a070707070703030303030303030307070703030303030303030303030307070303030303030303030303030303030303030a0803030303070703030303030303030303070703030303030303030303030307070303030303030707070707070707070707080303030303030707030303030303030303030707030303030303030303030303070703030303030303030303030303030a080303030303030303070707030303030303030303070703030303030303030303030303030303030303030303030303030a080303030303030303030303070703030303030303030307070303030303030303030303030303030303030303030303030a0803030303030303030303030303030303030303030303030307070303030303030303030307070707070707070707070707080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a070707070707070707070707070707070707070703030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030307070707070707070707070707070707070707030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a0803030303030303030303030303030303030303030303030303030303030303030303030303030303030303070707070707080303030303030303030303030303030303030303030303030303030303030303030303030303030307070703030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a0803030302070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030707030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a080303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030a050909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090901010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222222222222222222222
2................................................2
2................................................2
2.............................................2222
2.........................................2222...2
2......................................222.......2
22222222222222222...................222..........2
2...............................2222.............2
2.............................22.................2
2......................222222222222222222222222222
2222222222222222222..............................2
2................................................2
2................................................2
2......2222222222222222222222222222222222222222222
2................................................2
222..............................................2
2..22............................................2
2....22........22222222222222222222222222222222222
2......222.......................................2
2.........22.....................................2
222.........22...................................2
2..2..........222................................2
2...22...........22.......222222222222222222222222
2.....22...........222...........................2
2.......22............22.........................2
2.........22............22.......................2
2...........22............222....................2
22222.........222............22..................2
2....22..........22............22......22222222222
2......22..........22............22..............2
2........222.........22..........................2
2...........22.........22........................2
2........................22..........2222222222222
2................................................2
22222222222222222222.............................2
2...................2222222222222222222..........2
2................................................2
2...........................................222222
2........................................222.....2
2................................................2
2................................................2
2....222222222222222222222222222222222222222222222
2................................................2
2................................................2
2...22...........................................2
2................................................2
2................................................2
22222222222222222222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "Level2Tilemap0":
            case "Bossarena2Tilemap1":return tiles.createTilemap(hex`140032000909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909080909090909090909090909090909090909090909090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b090909090909090909090909090909090909090b0909090909090909090a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090909090909090909090909090909090509090909090909090909090909090909090909050909090909090909090909090909090909090905090909090707070707070707070909090909090509090909070909090909090907090909090909050909090909090909090909090909090909090905090909090909090905090909090909090909090909090909090906090509060909090909090909090909090909060609050906060906060606060606060606060609090905090909060909090909090909090909090909090509090909090909090909090909090909090904010109090901010201010101020102010101010101040101010104010101010101010101010301010101010101`, img`
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
22222..2222222222222
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
...........222222222
...........2.......2
....................
....................
.............2...2..
............22...22.
222222222222.......2
....................
..............222...
22222222222222222222
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.stairNorth,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight2,myTiles.tile2,sprites.builtin.brick,myTiles.tile1,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "Level4":
            case "Level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "FinalBossarenaTilemap":
            case "Level1":return tiles.createTilemap(hex`640032000504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010504030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105040301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050403010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
...2................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
`, [myTiles.transparency16,myTiles.tile12,myTiles.tile3,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9], TileScale.Sixteen);
            case "Level3Tilemap":
            case "Level3Tilemap1":return tiles.createTilemap(hex`4b000a000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000700000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000700000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000700000000000007000000000000000000000000000000000000000000000000000000000000000000000000000001020202030606050202030000000000000000000000000001020202020a0000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000005000000000000000000000000000700000000000000010202020a00000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000005000000000000000000000102020a00000000000000070000000000000000000000000000000000000000000000000000000000000000000000000000000004000700000000000000000005000000000000000000000700000000000000000000070000000000000000000000000000000000000000000000000000000000000000000000040404040404000700000000000000000005000000000000000102020a000000000001020202020a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000005000000000102020a00000000000000000700000000000000000000000000000000000000000000010202020202020203040404010202020304040404040400000802020202020202020209010202020a00000000000001020202020a00000000000000000000000000000000000000000000`, img`
................................2................2.......2.................
................................2................2.......2.................
................................2................2.......2.................
.........................22222..2222.............2.......2.................
.........................2.........2.............2.......2.................
......................2..2.........2..........2..2.......2.................
..................22222..2.........2..........2..........2.................
.........................2.........2.......2222.....222..2.................
.........................2.........2....2222........2......................
222222222...22222........2222222222222222......222222......................
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles11,sprites.builtin.forestTiles14,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "FakeTile":
            case "tile1":return tile1;
            case "PortalTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile4":return tile4;
            case "Stamm":
            case "tile12":return tile12;
            case "Blätter":
            case "tile13":return tile13;
            case "Blume1":
            case "tile6":return tile6;
            case "Blume2":
            case "tile7":return tile7;
            case "Blume3":
            case "tile8":return tile8;
            case "Blume4":
            case "tile9":return tile9;
            case "Blätter0":
            case "tile5":return tile5;
            case "Blätter1":
            case "tile11":return tile11;
            case "myTile2":
            case "tile16":return tile16;
            case "tile3":return tile3;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
