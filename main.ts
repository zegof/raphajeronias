let mySprite: Sprite = null
let Zauberer = sprites.create(assets.image`Magier Normal`, SpriteKind.Player)
animation.runImageAnimation(
Zauberer,
assets.animation`MagierZaubertAnimation`,
200,
false
)
controller.moveSprite(mySprite)
