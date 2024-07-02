import {
    explosionProperties,
    bombProperties,
    game,
    img,
    numberPattern, playerProperties
} from "../script.js";
import {createExplosion} from "./explosions.js";

export let explosion, explosionBottom, explosionLeft, explosionRight, explosionTop
let bombWhichDIV
let getBombDIVElement
let bombDIVLeftPixel
let bombDIVTopPixel

export const drawSpriteBomb = (frameX, frameY) => {
    let bomb = document.getElementById('bomb')
    const k = frameX * bombProperties.width
    const m = frameY * bombProperties.height
    bomb.style.backgroundPosition = `${k}px ${m}px`;
};


export let createBomb = () => {
    let bomb = document.createElement("div");
    bomb.setAttribute("id", 'bomb')
    bomb.style.height = `${bombProperties.height - 13}px`;
    bomb.style.width = `${bombProperties.width - 13}px`;
    bomb.style.backgroundImage = `url(${img.src})`;
    bomb.style.position = 'absolute'
    bomb.style.left = document.getElementById('player').style.left
    bomb.style.top = (Number(document.getElementById('player').style.top.match(numberPattern)) + 21) + 'px'
    bomb.style.position = 'absolute'
    bomb.style.zIndex = '6'
    bombWhichDIV = Math.trunc((Number(bomb.style.top.match(numberPattern)) / 50)) * game.columnNumber + Math.ceil(Number(bomb.style.left.match(numberPattern)) / 50)
    getBombDIVElement = document.getElementById(bombWhichDIV)
    bombDIVLeftPixel = getBombDIVElement.style.left
    bombDIVTopPixel = getBombDIVElement.style.top
    let bombDIVLeftPixelCenter = Number(bombDIVLeftPixel.match(numberPattern)) + 13 +'px'
    let bombDIVTopPixelCenter = Number(bombDIVTopPixel.match(numberPattern)) + 13 + 'px'
    bomb.style.left = bombDIVLeftPixelCenter
    bomb.style.top = bombDIVTopPixelCenter
    document.getElementById('gameArea').appendChild(bomb)

    drawSpriteBomb(8.8, 2.85)
    return bomb
}

export const bombLoop = () => {
    if (!game.paused && !game.ended){
        if ( bombProperties.inLoop && bombProperties.counter <= 4){
            if (bombProperties.slowedBy >= bombProperties.slowFrameRate) {
                if (bombProperties.currentLoopIndex <= bombProperties.animationLoop.length) {
                    drawSpriteBomb(bombProperties.animationLoop[bombProperties.currentLoopIndex], 2.85);
                    bombProperties.currentLoopIndex++;
                } else {
                    bombProperties.counter++
                    bombProperties.currentLoopIndex = 0;
                    if (bombProperties.counter > 4){

                        if (!explosionProperties.active && !playerProperties.dead && bombProperties.active) {
                            explosionProperties.active = true
                            explosionProperties.inLoop = true
                            explosion = createExplosion(-13, -13, 'explosion', 0, 3)
                            explosionLeft = createExplosion(-13, -63, 'explosionLeft', 180, 1)
                            explosionRight = createExplosion(-13, 37, 'explosionRight', 0, 1)
                            explosionBottom = createExplosion(37, -13, 'explosionBottom',90, 1)
                            explosionTop = createExplosion(-63, -13, 'explosionTop', 270, 1)
                            document.getElementById('bomb').remove();
                            bombProperties.inLoop = false
                            bombProperties.counter = 0
                        }
                    }
                }
                bombProperties.slowedBy = 0;
            } else {
                bombProperties.slowedBy++;
            }
        }
    }
}