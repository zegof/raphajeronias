namespace SpriteKind {
    export const Penny = SpriteKind.create()
    export const Schnelligkeitstrank = SpriteKind.create()
    export const Stärketrank = SpriteKind.create()
    export const Resistenztrank = SpriteKind.create()
    export const Regnerationstrank = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    sprite.y += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stärketrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    SchadenZauberer = -20
    timer.after(40000, function () {
        SchadenZauberer = -10
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zauberer,
    assets.animation`MagierZaubertAnimation`,
    500,
    false
    )
    projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, 50, 0)
    projectile.setScale(Scale, ScaleAnchor.Middle)
    pause(500)
    projectile.setImage(assets.image`ProjectileZauberer`)
})
statusbars.onZero(StatusBarKind.BossHealth, function (status) {
    tiles.setTileAt(status.spriteAttachedTo().tilemapLocation(), assets.tile`PortalTile`)
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
    Zaubertrank = sprites.create(assets.image`Regenerationstrank`, SpriteKind.Regnerationstrank)
    Zaubertrank.sayText("Regnerationstrank")
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
    timer.after(40000, function () {
    	
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
        Zaubertrank = sprites.create(assets.image`Stärketrank`, SpriteKind.Stärketrank)
        Zaubertrank.setPosition(720, 582)
        Zaubertrank.sayText("Stärketrank")
        Zaubertrank = sprites.create(assets.image`Resistenztrank`, SpriteKind.Resistenztrank)
        Zaubertrank.setPosition(550, 550)
        Zaubertrank.sayText("Resistenztrank")
    }
    if (LevelVar == 3) {
        tiles.setCurrentTilemap(tilemap`Level2Tilemap`)
        Zauberer.setPosition(37, 519)
    }
    if (LevelVar == 4) {
        tiles.setCurrentTilemap(tilemap`Bossarena2Tilemap`)
        Zauberer.setPosition(37, 720)
        for (let index = 0; index < 10; index++) {
            Spuckball = sprites.create(assets.image`SpukballBild`, SpriteKind.Enemy)
        }
        Spuckball.x = scene.screenWidth()
        Spuckball.y = randint(10, scene.screenHeight())
    }
    if (LevelVar == 5) {
        tiles.setCurrentTilemap(tilemap`Level3Tilemap`)
        Zauberer.setPosition(37, 871)
    }
    if (LevelVar == 6) {
        tiles.setCurrentTilemap(tilemap`Level3`)
        Zauberer.setPosition(37, 871)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Schnelligkeitstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    controller.moveSprite(Zauberer, 200, 0)
    timer.after(40000, function () {
        controller.moveSprite(Zauberer, 100, 0)
    })
})
info.onLifeZero(function () {
    timer.after(500, function () {
        game.setGameOverMessage(false, "Game Over; Geschaffte Level: " + (LevelVar - 1))
        game.setGameOverScoringType(game.ScoringType.HighScore)
        game.gameOver(false)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Regnerationstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.setLife(4)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += randint(SchadenZauberer - 9, SchadenZauberer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-0.5)
        pause(5000)
    } else {
        info.changeLifeBy(0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-0.75)
        pause(5000)
    } else {
        info.changeLifeBy(0)
    }
})
let Spuckball: Sprite = null
let statusbar: StatusBarSprite = null
let Geist: Sprite = null
let projectile: Sprite = null
let KleinerGeist: Sprite = null
let SchadenZauberer = 0
let Zaubertrank: Sprite = null
let LevelVar = 0
let Scale = 0
let Zauberer: Sprite = null
tiles.setCurrentTilemap(tilemap`Level1Tilemap`)
let ZaubererBildVar = assets.image`Magier Normal`
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
Scale = 0.9
Zauberer.setScale(Scale, ScaleAnchor.Middle)
Zauberer.setPosition(20, 199)
controller.moveSprite(Zauberer, 100, 0)
Zauberer.ay = 300
scene.cameraFollowSprite(Zauberer)
LevelVar = 1
info.setLife(4)
Zaubertrank = sprites.create(assets.image`Schnelligkeitstrank`, SpriteKind.Schnelligkeitstrank)
Zaubertrank.setPosition(500, 199)
Zaubertrank.sayText("Schnelligkeit")
SchadenZauberer = -10
KleinerGeist = sprites.create(assets.image`KleinerGeistBild`, SpriteKind.Enemy)
KleinerGeist.setPosition(500, 200)
KleinerGeist.setFlag(SpriteFlag.GhostThroughWalls, true)
KleinerGeist.setScale(0.2, ScaleAnchor.Middle)
info.setScore(0)
KleinerGeist.follow(Zauberer, 80)
Zauberer.sayText("" + Zauberer.x + ("" + Zauberer.y))
game.onUpdate(function () {
    if (Zauberer.vx > 0 && Zauberer.vy == 0) {
        ZaubererBildVar = assets.image`Magier Normal`
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vx < 0 && Zauberer.vy == 0) {
        ZaubererBildVar = assets.image`Magier Normal`
        ZaubererBildVar.flipX()
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vy != 0 && Zauberer.vx > 0) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vy != 0 && Zauberer.vx < 0) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
        ZaubererBildVar.flipX()
        Zauberer.setImage(ZaubererBildVar)
    }
    Zauberer.sayText(convertToText(Zauberer.y))
})
