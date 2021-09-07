import Phaser from 'phaser'
import './style.css'
import TestScene from "./scenes/TestScene";
import Center = Phaser.Scale.Center;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        autoCenter: Center.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: [
        TestScene
    ]
}

new Phaser.Game(config)
