controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ZaubererBildRichtung == 1) {
        animation.runImageAnimation(
        Zauberer,
        assets.animation`MagierZaubertAnimation`,
        1000,
        false
        )
        projectile = sprites.createProjectileFromSprite(assets.image`LeerBild`, Zauberer, 50, 0)
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
        pause(500)
        projectile.setImage(assets.image`ProjectileZauberer`)
    }
})
let projectile: Sprite = null
let Zauberer: Sprite = null
let ZaubererBildRichtung = 0
tiles.setCurrentTilemap(tilemap`Level2`)
let ZaubererBildVar = assets.image`Magier Normal`
ZaubererBildRichtung = 1
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
Zauberer.setScale(0.9, ScaleAnchor.Middle)
controller.moveSprite(Zauberer, 100, 0)
game.onUpdate(function () {
    if (Zauberer.vx > 0) {
        ZaubererBildVar = assets.image`Magier Normal`
        ZaubererBildRichtung = 1
        Zauberer.setImage(ZaubererBildVar)
    } else if (Zauberer.vx < 0) {
        if (ZaubererBildRichtung == 1) {
            ZaubererBildVar.flipX()
            ZaubererBildRichtung = 2
        }
        Zauberer.setImage(ZaubererBildVar)
    }
})
