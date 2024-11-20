namespace SpriteKind {
    export const Penny = SpriteKind.create()
    export const Schnelligkeitstrank = SpriteKind.create()
    export const Stärketrank = SpriteKind.create()
    export const Resistenztrank = SpriteKind.create()
    export const Regenerationstrank = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Zuckerschocktrank = SpriteKind.create()
    export const Spuckbälle = SpriteKind.create()
    export const FinalBoss = SpriteKind.create()
    export const LieberZauberer = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Schnelligkeitstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Regenerationstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.setLife(4)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Stärketrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zuckerschocktrank, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    otherSprite.top = 2
    otherSprite.left = 80
    info.setLife(10)
    SchadenZauberer = -50
    controller.moveSprite(Zauberer, 200, 0)
    Schadengegner = -0.01
    timer.after(40000, function () {
        SchadenZauberer = -10
        controller.moveSprite(Zauberer, 100, 0)
        Schadengegner = -0.5
        sprites.destroy(otherSprite)
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MenuModus == 0) {
        MenuModus = 1
        TraenkeMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Schnelligkeit 20", assets.image`SchnelligkeitstrankBild`),
        miniMenu.createMenuItem("Stärke        45", assets.image`StärketrankBild`),
        miniMenu.createMenuItem("Resistenz     60", assets.image`ResistenztrankBild`),
        miniMenu.createMenuItem("Regneration   20", assets.image`RegenerationstrankBild`),
        miniMenu.createMenuItem("Zucker        250", assets.image`ZuckertrankBild`),
        miniMenu.createMenuItem("MENU SCHLIESSEN")
        )
        TraenkeMenu.follow(Zauberer)
        TraenkeMenu.setTitle("Tränke")
        TraenkeMenu.setPosition(Zauberer.x, Zauberer.y)
        TraenkeMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            TraenkeMenu.close()
            MenuModus = 0
            if (selection == "Schnelligkeit 20" && info.score() >= 20) {
                info.changeScoreBy(-20)
                Zaubertrank = sprites.create(assets.image`SchnelligkeitstrankBild`, SpriteKind.Schnelligkeitstrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Stärke        45" && info.score() >= 45) {
                info.changeScoreBy(-45)
                Zaubertrank = sprites.create(assets.image`StärketrankBild`, SpriteKind.Stärketrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Resistenz     60" && info.score() >= 60) {
                info.changeScoreBy(-60)
                Zaubertrank = sprites.create(assets.image`ResistenztrankBild`, SpriteKind.Resistenztrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Regneration   20" && info.score() >= 20) {
                info.changeScoreBy(-20)
                Zaubertrank = sprites.create(assets.image`RegenerationstrankBild`, SpriteKind.Regenerationstrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "Zucker        250" && info.score() >= 250) {
                info.changeScoreBy(-250)
                Zaubertrank = sprites.create(assets.image`ZuckertrankBild`, SpriteKind.Zuckerschocktrank)
                Zaubertrank.setPosition(Zauberer.x, Zauberer.y)
            } else if (selection == "MENU SCHLIESSEN") {
            	
            } else {
                game.showLongText("Du hast zu wenig Geld, Geringverdiener!", DialogLayout.Center)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zuckerschocktrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 1000)
})
scene.onOverlapTile(SpriteKind.Food, sprites.builtin.forestTiles11, function (sprite, location) {
    sprites.destroy(Ball, effects.ashes, 500)
    animation.stopAnimation(animation.AnimationTypes.All, Ball)
    Zauberer.setBounceOnWall(false)
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Schnelligkeitstrank, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    otherSprite.top = 2
    otherSprite.left = 60
    controller.moveSprite(Zauberer, 200, 0)
    timer.after(40000, function () {
        controller.moveSprite(Zauberer, 100, 0)
        sprites.destroy(otherSprite)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spuckbälle, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(Schadengegner)
        sprites.destroy(otherSprite)
        pause(5000)
    } else {
        info.changeLifeBy(0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(Schadengegner)
        pause(5000)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zauberer.vy == 0) {
        Zauberer.vy = -200
    }
})
statusbars.onZero(StatusBarKind.BossHealth, function (status) {
    tiles.setTileAt(status.spriteAttachedTo().tilemapLocation(), assets.tile`PortalTile`)
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
    Zaubertrank = sprites.create(assets.image`RegenerationstrankBild`, SpriteKind.Regenerationstrank)
    Zaubertrank.sayText("Regneration")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Resistenztrank, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    otherSprite.top = 2
    otherSprite.left = 40
    Schadengegner = -0.1
    timer.after(40000, function () {
        Schadengegner = -0.5
        sprites.destroy(otherSprite)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Resistenztrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PortalTile`, function (sprite, location) {
    LevelVar += 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Spuckbälle)
    if (LevelVar == 2) {
        tiles.setCurrentTilemap(tilemap`Bossarena1Tilemap`)
        Zauberer.setPosition(37, 743)
        Geist = sprites.create(assets.image`Geist Normal`, SpriteKind.Boss)
        Geist.setPosition(734, 726)
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
        Zaubertrank = sprites.create(assets.image`ZuckertrankBild`, SpriteKind.Zuckerschocktrank)
        Zaubertrank.setPosition(200, 646)
        Zaubertrank.sayText("Zucker")
    }
    if (LevelVar == 3) {
        tiles.setCurrentTilemap(tilemap`Level2Tilemap0`)
        Zauberer.setPosition(37, 720)
    }
    if (LevelVar == 4) {
        tiles.setCurrentTilemap(tilemap`Level3Tilemap`)
        Ball.setImage(assets.image`BallBild`)
        tiles.placeOnTile(Zauberer, tiles.getTileLocation(2, 2))
        tiles.placeOnTile(Ball, tiles.getTileLocation(32, 8))
        Ball.setScale(0.5, ScaleAnchor.Middle)
        Ball.setFlag(SpriteFlag.GhostThroughWalls, true)
        for (let Wert of tiles.getTilesByType(sprites.dungeon.hazardLava1)) {
            LavaBall = sprites.create(assets.image`FeuerballBild`, SpriteKind.Spuckbälle)
            LavaBall.ay = 300
            tiles.placeOnTile(LavaBall, Wert)
        }
        Endboss = sprites.create(assets.image`BoeserZaubererBild`, SpriteKind.FinalBoss)
        animation.runImageAnimation(
        Endboss,
        assets.animation`BoeserZaubererAnimation`,
        1000,
        true
        )
        tiles.placeOnTile(Endboss, tiles.getTileLocation(62, 48))
        statusbar = statusbars.create(25, 4, StatusBarKind.BossHealth)
        statusbar.setColor(10, 2)
        statusbar.attachToSprite(Endboss, 0, 0)
    }
    if (LevelVar == 5) {
        tiles.setCurrentTilemap(tilemap`FinalBossarenaTilemap`)
        HimmlischerZauberer = sprites.create(assets.image`HimmlischerZaubererBild`, SpriteKind.LieberZauberer)
        tiles.placeOnTile(HimmlischerZauberer, tiles.getTileLocation(14, 48))
        tiles.placeOnTile(Zauberer, tiles.getTileLocation(1, 1))
    }
})
info.onLifeZero(function () {
    timer.after(500, function () {
        game.setGameOverMessage(false, "Game Over")
        game.setGameOverScoringType(game.ScoringType.HighScore)
        game.gameOver(false)
    })
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(50)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.LieberZauberer, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    game.setDialogTextColor(5)
    game.showLongText("Schiss mich doch nicht ab! 🥺 ", DialogLayout.Top)
    game.showLongText("Ich bin ein himmlischer Zauberer und will dir ein Edelstein als Belohnung geben. Hier!", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += randint(SchadenZauberer - 9, SchadenZauberer)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    sprite.y += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stärketrank, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    otherSprite.top = 2
    otherSprite.left = 100
    SchadenZauberer = -20
    timer.after(40000, function () {
        SchadenZauberer = -10
        sprites.destroy(otherSprite)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Regenerationstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-0.75)
        scene.cameraShake(4, 100)
        pause(5000)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FinalBoss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += -0.1
})
sprites.onDestroyed(SpriteKind.Spuckbälle, function (sprite) {
    info.changeScoreBy(50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    tiles.placeOnTile(Zauberer, tiles.getTileLocation(2, 2))
    info.changeLifeBy(Schadengegner)
})
info.onScore(50, function () {
    timer.after(500, function () {
        game.showLongText("Öffne das Tränkemenu mit dem B-Knopf und kaufe Tränke mit dem A-Knopf", DialogLayout.Top)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += randint(SchadenZauberer - 10, SchadenZauberer - 20)
})
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    info.changeScoreBy(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(6, 18), assets.tile`FakeTile`)
    tiles.setTileAt(tiles.getTileLocation(5, 18), assets.tile`FakeTile`)
    tiles.setWallAt(tiles.getTileLocation(6, 18), true)
    tiles.setWallAt(tiles.getTileLocation(5, 18), true)
    game.showLongText("???: \"HAHAHAHA, DU BIST IN MEINE FALLE GETAPPT UND NUN STIRB!\"", DialogLayout.Top)
    Treppenarray = tiles.getTilesByType(sprites.dungeon.stairSouth)
    for (let Wert2 of tiles.getTilesByType(sprites.dungeon.stairSouth)) {
        tiles.setTileAt(Wert2, sprites.builtin.brick)
    }
    for (let index = 0; index < 10; index++) {
        Spuckball = sprites.create(assets.image`SpukballBild`, SpriteKind.Spuckbälle)
        Spuckball.setVelocity(randint(-200, 200), randint(-200, 200))
        Spuckball.setBounceOnWall(true)
    }
    timer.after(20000, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Spuckbälle, effects.spray, 2000)
        game.showLongText("???: \"NEIN!\"", DialogLayout.Top)
        for (let Wert22 of Treppenarray) {
            tiles.setTileAt(Wert22, sprites.dungeon.stairNorth)
        }
    })
})
let projectile: Sprite = null
let ZaubererRichtung = 0
let Spuckball: Sprite = null
let Treppenarray: tiles.Location[] = []
let HimmlischerZauberer: Sprite = null
let Endboss: Sprite = null
let LavaBall: Sprite = null
let Geist: Sprite = null
let TraenkeMenu: miniMenu.MenuSprite = null
let MenuModus = 0
let Schadengegner = 0
let statusbar: StatusBarSprite = null
let KleinerGeist: Sprite = null
let SchadenZauberer = 0
let Zaubertrank: Sprite = null
let LevelVar = 0
let Ball: Sprite = null
let Zauberer: Sprite = null
let SHORT_VERSION = 0
music.play(music.createSong(assets.song`SpielLied`), music.PlaybackMode.LoopingInBackground)
music.setVolume(1)
tiles.setCurrentTilemap(tilemap`Level1Tilemap`)
let ZaubererBildVar = assets.image`Magier Normal`
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
Ball = sprites.create(assets.image`LeerBild`, SpriteKind.Food)
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
let darfZaubern = true
game.onUpdate(function () {
    if (controller.A.isPressed() && Zauberer.overlapsWith(Ball)) {
        animation.runImageAnimation(
        Ball,
        assets.animation`BallKickAnimation`,
        200,
        false
        )
    } else if (controller.A.isPressed() && darfZaubern) {
        ZaubererBildVar = assets.image`ZaubererZaubert1Bild`
        darfZaubern = false
        if (ZaubererRichtung == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, 50, 0)
            projectile.setScale(Scale, ScaleAnchor.Middle)
            timer.after(500, function () {
                ZaubererBildVar = assets.image`ZaubererZaubert2Bild`
                projectile.setImage(assets.image`ProjectileZauberer`)
                darfZaubern = true
            })
        } else if (ZaubererRichtung == 2) {
            ZaubererBildVar.flipX()
            projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, -50, 0)
            projectile.setScale(Scale, ScaleAnchor.Middle)
            timer.after(500, function () {
                ZaubererBildVar = assets.image`ZaubererZaubert2Bild`
                ZaubererBildVar.flipX()
                projectile.setImage(assets.image`ProjectileZauberer`)
                darfZaubern = true
            })
        }
    } else if (controller.down.isPressed() && ZaubererRichtung == 1) {
        ZaubererBildVar = assets.image`ZaubererDuckenBild`
    } else if (controller.down.isPressed() && ZaubererRichtung == 2) {
        ZaubererBildVar = assets.image`ZaubererDuckenBild`
        ZaubererBildVar.flipX()
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
})
game.onUpdateInterval(1000, function () {
    if (LevelVar == 4) {
        projectile = sprites.createProjectileFromSprite(assets.image`FeuerballBild`, Endboss, 50, 0)
        projectile.setScale(Scale, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(100, function () {
    if (LevelVar == 4) {
        for (let Wert3 of sprites.allOfKind(SpriteKind.Spuckbälle)) {
            if (Wert3.vy == 0) {
                Wert3.vy = -200
            }
        }
    }
})
