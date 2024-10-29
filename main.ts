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
Zauberer = sprites.create(assets.image`Magier Normal`, SpriteKind.Player)
controller.moveSprite(Zauberer, 100, 0)
game.onUpdate(function () {
    if (Zauberer.vx < 0) {
        Zauberer.setImage(assets.image`Magier Normal`)
    } else if (Zauberer.vx > 0) {
        Zauberer.setImage(assets.image`Magier Normal`)
        assets.image`Magier Normal`.flipX()
    }
})
