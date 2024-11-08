namespace SpriteKind {
    export const Penny = SpriteKind.create()
    export const Schnelligkeitstrank = SpriteKind.create()
    export const Stärketrank = SpriteKind.create()
    export const Resistenztrank = SpriteKind.create()
    export const Regenerationstrank = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    sprite.y += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stärketrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    SchadenZauberer = -20
    timer.after(40000, function () {
        SchadenZauberer = -10
    })
})
statusbars.onZero(StatusBarKind.BossHealth, function (status) {
    tiles.setTileAt(status.spriteAttachedTo().tilemapLocation(), assets.tile`PortalTile`)
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
    Zaubertrank = sprites.create(assets.image`RegenerationstrankBild`, SpriteKind.Regenerationstrank)
    Zaubertrank.sayText("Regneration")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zauberer.vy == 0) {
        Zauberer.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += randint(SchadenZauberer - 9, SchadenZauberer)
})
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Resistenztrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Schadengegner = -0.1
    timer.after(40000, function () {
        Schadengegner = -0.5
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PortalTile`, function (sprite, location) {
    LevelVar += 1
    sprites.destroy(KleinerGeist)
    if (LevelVar == 2) {
        tiles.setCurrentTilemap(tilemap`Bossarena1Tilemap`)
        Zauberer.setPosition(37, 743)
        Geist = sprites.create(assets.image`Geist Normal`, SpriteKind.Boss)
        statusbar = statusbars.create(20, 4, StatusBarKind.BossHealth)
        statusbar.setColor(10, 8)
        statusbar.attachToSprite(Geist, 0, 0)
        animation.runImageAnimation(
        Geist,
        assets.animation`GeistAngriffAnimation`,
        1000,
        true
        )
        Zaubertrank = sprites.create(assets.image`StärketrankBild`, SpriteKind.Stärketrank)
        Zaubertrank.setPosition(720, 582)
        Zaubertrank.sayText("Stärke")
        Zaubertrank = sprites.create(assets.image`ResistenztrankBild`, SpriteKind.Resistenztrank)
        Zaubertrank.setPosition(550, 550)
        Zaubertrank.sayText("Resistenz")
        Zaubertrank = sprites.create(assets.image`RegenerationstrankBild`, SpriteKind.Regenerationstrank)
        Zaubertrank.setPosition(200, 646)
        Zaubertrank.sayText("Regeneration")
    }
    if (LevelVar == 3) {
        tiles.setCurrentTilemap(tilemap`Level2Tilemap0`)
        Zauberer.setPosition(37, 720)
    }
    if (LevelVar == 4) {
        tiles.setCurrentTilemap(tilemap`Level3Tilemap`)
        Ball = sprites.create(assets.image`BallBild`, SpriteKind.Player)
        tiles.placeOnTile(Zauberer, tiles.getTileLocation(2, 2))
        tiles.placeOnTile(Ball, tiles.getTileLocation(32, 8))
        Ball.setScale(0.5, ScaleAnchor.Middle)
    }
    if (LevelVar == 5) {
        tiles.setCurrentTilemap(tilemap`Level3`)
        Zauberer.setPosition(37, 871)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Schnelligkeitstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    controller.moveSprite(Zauberer, 200, 0)
    timer.after(40000, function () {
        controller.moveSprite(Zauberer, 100, 0)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Regenerationstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.setLife(4)
})
info.onLifeZero(function () {
    timer.after(500, function () {
        game.setGameOverMessage(false, "Game Over; Geschaffte Level: " + (LevelVar - 1))
        game.setGameOverScoringType(game.ScoringType.HighScore)
        game.gameOver(false)
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function (sprite, location) {
	
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(50)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MenuModus == 0) {
        MenuModus = 1
        TraenkeMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Schnelligkeit", assets.image`SchnelligkeitstrankBild`),
        miniMenu.createMenuItem("Stärke", assets.image`StärketrankBild`),
        miniMenu.createMenuItem("Resistenz", assets.image`ResistenztrankBild`),
        miniMenu.createMenuItem("Regneration", assets.image`RegenerationstrankBild`)
        )
        TraenkeMenu.follow(Zauberer)
        TraenkeMenu.setTitle("Tränke")
        TraenkeMenu.setPosition(Zauberer.x, Zauberer.y)
        TraenkeMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            TraenkeMenu.close()
            MenuModus = 0
            if (selection == "Schnelligkeit" && info.score() >= 20) {
                info.changeScoreBy(-20)
                Zaubertrank = sprites.create(assets.image`SchnelligkeitstrankBild`, SpriteKind.Schnelligkeitstrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Stärke" && info.score() >= 45) {
                info.changeScoreBy(-45)
                Zaubertrank = sprites.create(assets.image`StärketrankBild`, SpriteKind.Stärketrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Resistenz" && info.score() >= 60) {
                info.changeScoreBy(-60)
                Zaubertrank = sprites.create(assets.image`ResistenztrankBild`, SpriteKind.Resistenztrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Regneration" && info.score() >= 20) {
                info.changeScoreBy(-20)
                Zaubertrank = sprites.create(assets.image`RegenerationstrankBild`, SpriteKind.Regenerationstrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else {
                game.showLongText("Du hast zu wenig Geld, Geringverdiener!", DialogLayout.Center)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += randint(SchadenZauberer - 10, SchadenZauberer - 20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(6, 18), assets.tile`FakeTile`)
    tiles.setTileAt(tiles.getTileLocation(5, 18), assets.tile`FakeTile`)
    tiles.setWallAt(tiles.getTileLocation(6, 18), true)
    tiles.setWallAt(tiles.getTileLocation(5, 18), true)
    game.showLongText("???: \"HAHAHAHA, DU BIST IN MEINE FALLE GETAPPT UND NUN STIRB!\"", DialogLayout.Top)
    Treppenarray = tiles.getTilesByType(sprites.dungeon.stairSouth)
    for (let Wert of tiles.getTilesByType(sprites.dungeon.stairSouth)) {
        tiles.setTileAt(Wert, sprites.builtin.brick)
    }
    for (let index = 0; index < 10; index++) {
        Spuckball = sprites.create(assets.image`SpukballBild`, SpriteKind.Enemy)
        Spuckball.setVelocity(randint(-100, 100), randint(-100, 100))
        Spuckball.setBounceOnWall(true)
    }
    timer.after(20000, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 2000)
        game.showLongText("???: \"NEIN!\"", DialogLayout.Top)
        for (let Wert2 of Treppenarray) {
            tiles.setTileAt(Wert2, sprites.dungeon.stairNorth)
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(Schadengegner)
        scene.cameraShake(4, 100)
        pause(5000)
    } else {
        info.changeLifeBy(0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-0.75)
        scene.cameraShake(4, 100)
        pause(5000)
    } else {
        info.changeLifeBy(0)
    }
    for (let index = 0; index < randint(1, 5); index++) {
        KleinerGeist = sprites.create(assets.image`KleinerGeistBild`, SpriteKind.Enemy)
        KleinerGeist.setPosition(Geist.x, Geist.x)
        KleinerGeist.setScale(0.2, ScaleAnchor.Middle)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.attachToSprite(KleinerGeist)
        KleinerGeist.follow(Zauberer)
    }
})
let projectile: Sprite = null
let ZaubererRichtung = 0
let Spuckball: Sprite = null
let Treppenarray: tiles.Location[] = []
let TraenkeMenu: miniMenu.MenuSprite = null
let Ball: Sprite = null
let Geist: Sprite = null
let MenuModus = 0
let Schadengegner = 0
let statusbar: StatusBarSprite = null
let KleinerGeist: Sprite = null
let SchadenZauberer = 0
let Zaubertrank: Sprite = null
let LevelVar = 0
let Zauberer: Sprite = null
tiles.setCurrentTilemap(tilemap`Level1Tilemap`)
let ZaubererBildVar = assets.image`Magier Normal`
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
let Scale = 0.9
Zauberer.setScale(Scale, ScaleAnchor.Middle)
Zauberer.setPosition(20, 199)
controller.moveSprite(Zauberer, 100, 0)
Zauberer.ay = 300
scene.cameraFollowSprite(Zauberer)
LevelVar = 1
info.setLife(4)
Zaubertrank = sprites.create(assets.image`SchnelligkeitstrankBild`, SpriteKind.Schnelligkeitstrank)
Zaubertrank.setPosition(500, 199)
Zaubertrank.sayText("Schnelligkeit")
SchadenZauberer = -10
KleinerGeist = sprites.create(assets.image`KleinerGeistBild`, SpriteKind.Enemy)
KleinerGeist.setPosition(500, 200)
KleinerGeist.setFlag(SpriteFlag.GhostThroughWalls, true)
KleinerGeist.setScale(0.2, ScaleAnchor.Middle)
info.setScore(0)
KleinerGeist.follow(Zauberer, 80)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(KleinerGeist)
Schadengegner = -0.5
MenuModus = 0
game.onUpdate(function () {
    if (controller.A.isPressed() && Zauberer.overlapsWith(Ball)) {
    	
    } else if (controller.A.isPressed()) {
        ZaubererBildVar = assets.image`ZaubererZaubert1Bild`
        if (ZaubererRichtung == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, 50, 0)
            projectile.setScale(Scale, ScaleAnchor.Middle)
            timer.after(500, function () {
                ZaubererBildVar = assets.image`ZaubererZaubert2Bild`
                projectile.setImage(assets.image`ProjectileZauberer`)
            })
        } else if (ZaubererRichtung == 2) {
            ZaubererBildVar.flipX()
            projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, -50, 0)
            projectile.setScale(Scale, ScaleAnchor.Middle)
            timer.after(500, function () {
                ZaubererBildVar = assets.image`ZaubererZaubert2Bild`
                ZaubererBildVar.flipX()
                projectile.setImage(assets.image`ProjectileZauberer`)
            })
        }
    } else if (Zauberer.vx > 0 && ZaubererRichtung == 1) {
        ZaubererBildVar = assets.image`Magier Normal`
    } else if (Zauberer.vx < 0 && ZaubererRichtung == 2) {
        ZaubererBildVar = assets.image`Magier Normal`
        ZaubererBildVar.flipX()
    } else if (Zauberer.vy != 0 && ZaubererRichtung == 1) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
    } else if (Zauberer.vy != 0 && ZaubererRichtung == 2) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
        ZaubererBildVar.flipX()
    }
    if (Zauberer.vx > 0) {
        ZaubererRichtung = 1
    } else if (Zauberer.vx < 0) {
        ZaubererRichtung = 2
    }
    Zauberer.setImage(ZaubererBildVar)
    Zauberer.sayText("" + Zauberer.x + " " + ("" + Zauberer.y))
})
