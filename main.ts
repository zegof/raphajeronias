namespace SpriteKind {
    export const Penny = SpriteKind.create()
    export const Schnelligkeitstrank = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    sprite.y += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ZaubererBildRichtung == 1) {
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
    } else if (ZaubererBildRichtung == 2) {
        animation.runImageAnimation(
        Zauberer,
        assets.animation`MagierZaubertAnimation`,
        1000,
        false
        )
        projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, -50, 0)
        projectile.setScale(Scale, ScaleAnchor.Middle)
        pause(500)
        projectile.setImage(assets.image`ProjectileZauberer`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zauberer.vy == 0) {
        Zauberer.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PortalTile`, function (sprite, location) {
    LevelVar += 1
    if (LevelVar == 2) {
        tiles.setCurrentTilemap(tilemap`Bossarena1Tilemap`)
        Zauberer.setPosition(37, 743)
        Geist = sprites.create(assets.image`Geist Normal`, SpriteKind.Enemy)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.setColor(10, 8)
        statusbar.attachToSprite(Geist, 0, 0)
        animation.runImageAnimation(
        Geist,
        assets.animation`GeistAngriffAnimation`,
        1000,
        true
        )
    }
    if (LevelVar == 3) {
        tiles.setCurrentTilemap(tilemap`Level2Tilemap`)
        Zauberer.setPosition(37, 519)
    }
    if (LevelVar == 4) {
        tiles.setCurrentTilemap(tilemap`Bossarena2Tilemap`)
        Zauberer.setPosition(37, 519)
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
statusbars.onZero(StatusBarKind.Health, function (status) {
    tiles.setTileAt(status.spriteAttachedTo().tilemapLocation(), assets.tile`PortalTile`)
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Schnelligkeitstrank, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    controller.moveSprite(Zauberer, 200, 0)
    timer.after(40000, function () {
        controller.moveSprite(Zauberer, 100, 0)
    })
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (true) {
        statusbarpennys += 50
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += randint(-1, -10)
})
let statusbarpennys = 0
let statusbar: StatusBarSprite = null
let Geist: Sprite = null
let projectile: Sprite = null
let LevelVar = 0
let Scale = 0
let Zauberer: Sprite = null
let ZaubererBildRichtung = 0
tiles.setCurrentTilemap(tilemap`Level1Tilemap`)
let ZaubererBildVar = assets.image`Magier Normal`
let Penny = sprites.create(img`
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .....................444444......................
    ...................444444444d....................
    ..................444444444444...................
    .................4444444444444d..................
    .................44444444444444..................
    ................4444444ffc44444e.................
    ................444444ffff444444.................
    ................444444f444444444.................
    ...............e44444fe444444444d................
    ...............444444f4444444444e................
    ...............444444f44444444444................
    ...............444444f44444444444................
    ...............444444f4444444444e................
    ...............e44444fe444444444.................
    ................44444ff444c44444.................
    ................444444fffff44444.................
    ................e444444fff44444d.................
    .................44444444444444..................
    .................d444444444444...................
    ..................c4444444444b...................
    ...................b44444444d....................
    .....................e4444b......................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    .................................................
    `, SpriteKind.Penny)
ZaubererBildRichtung = 1
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
Scale = 0.9
Zauberer.setScale(Scale, ScaleAnchor.Middle)
Zauberer.setPosition(20, 199)
controller.moveSprite(Zauberer, 100, 0)
Zauberer.ay = 300
scene.cameraFollowSprite(Zauberer)
LevelVar = 1
info.setLife(4)
let Zaubertrank = sprites.create(assets.image`Schnelligkeitstrank`, SpriteKind.Schnelligkeitstrank)
Zaubertrank.setPosition(500, 199)
game.onUpdate(function () {
    if (Zauberer.vx > 0 && Zauberer.vy == 0) {
        ZaubererBildVar = assets.image`Magier Normal`
        ZaubererBildRichtung = 1
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vx < 0 && Zauberer.vy == 0) {
        if (ZaubererBildRichtung == 1) {
            ZaubererBildVar.flipX()
            ZaubererBildRichtung = 2
        }
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vy != 0 && Zauberer.vx > 0) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
        ZaubererBildRichtung = 1
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vy != 0 && Zauberer.vx > 0) {
        ZaubererBildVar = assets.image`ZaubererJumpBild`
        if (ZaubererBildRichtung == 1) {
            ZaubererBildVar.flipX()
            ZaubererBildRichtung = 2
        }
        Zauberer.setImage(ZaubererBildVar)
    }
    Zauberer.sayText(convertToText(Zauberer.y))
})
