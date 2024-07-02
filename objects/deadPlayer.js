import {
    deadPlayerProperties, game,
    imgDeadPlayer,
    playerProperties,
    sprite
} from "../script.js";
import {gameReload} from "../game/gameReload.js";


export const drawSpriteDead = (frameX, frameY) => {
    let deadSprite = document.getElementById('deadSprite')
    const x = frameX * deadPlayerProperties.width
    const y = frameY * deadPlayerProperties.height
    deadSprite.style.backgroundPosition = `${x}px ${y}px`;
}

export let playerDying = () => {
    if (!game.paused && !game.ended){
        if (playerProperties.dead){
            deadPlayerProperties.inLoop = true

            createDeadPlayer()
            drawSpriteDead(8.44,0)
            document.getElementById("player").remove()
        }
    }
}

export const createDeadPlayer = () => {
    let deadSprite = document.createElement("div");
    deadSprite.setAttribute( "id", "deadSprite")
    deadSprite.style.height = `${deadPlayerProperties.height}px`; //-2
    deadSprite.style.width = `${deadPlayerProperties.width}px`; //
    deadSprite.style.backgroundImage = `url(${imgDeadPlayer.src})`;
    deadSprite.style.position = 'absolute'
    deadSprite.style.zIndex = '8'
    deadSprite.style.left = sprite.style.left
    deadSprite.style.top = sprite.style.top
    document.getElementById('gameArea').appendChild(deadSprite)
}

export const deadPlayerLoop = () => {
    if (!game.paused && !game.ended){

        if (deadPlayerProperties.inLoop) {
            if (deadPlayerProperties.slowedBy >= deadPlayerProperties.slowFrameRate) {
                if (deadPlayerProperties.currentLoopIndex <= deadPlayerProperties.animationLoop.length) {
                    drawSpriteDead(deadPlayerProperties.animationLoop[deadPlayerProperties.currentLoopIndex], 0);
                    deadPlayerProperties.currentLoopIndex++;
                } else {
                    deadPlayerProperties.inLoop = false
                    document.getElementById('deadSprite').remove()
                    gameReload()
                    deadPlayerProperties.currentLoopIndex = 0
                }
                deadPlayerProperties.slowedBy = 0;
            } else {
                deadPlayerProperties.slowedBy++;
            }
        }
    }
}