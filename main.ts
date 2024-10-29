controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zauberer,
    assets.animation`MagierZaubertAnimation`,
    1000,
    false
    )
    projectile = sprites.createProjectileFromSprite(assets.image`ProjectileZauberer`, Zauberer, 50, 0)
})
let projectile: Sprite = null
let Zauberer: Sprite = null
let ZaubererBildVar = assets.image`Magier Normal`
let ZaubererBildRichtung = 1
Zauberer = sprites.create(ZaubererBildVar, SpriteKind.Player)
controller.moveSprite(Zauberer, 100, 0)
game.onUpdate(function () {
    Zauberer.setImage(ZaubererBildVar)
    if (Zauberer.vx > 0) {
        ZaubererBildVar = assets.image`Magier Normal`
        ZaubererBildRichtung = 1
    } else if (Zauberer.vx < 0) {
        if (ZaubererBildRichtung == 1) {
            ZaubererBildVar.flipX()
            ZaubererBildRichtung = 2
        }
    }
})
