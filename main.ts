let Zauberer = sprites.create(assets.image`Magier Normal`, SpriteKind.Player)
animation.runImageAnimation(
Zauberer,
assets.animation`MagierZaubertAnimation`,
200,
false
)
pause(2000)
animation.stopAnimation(animation.AnimationTypes.All, Zauberer)
