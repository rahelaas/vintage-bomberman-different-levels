import {makeRows, xToGreen} from "./game/createBoard.js";
import {template1} from "./game/template.js";
import {enemies, drawSpriteEnemy} from "./objects/enemies.js";
import {explosionsLoop} from "./objects/explosions.js";
import {bombLoop, createBomb} from "./objects/bomb.js";
import {createPlayer, playerAnimationLoop} from "./objects/player.js";
import {deadPlayerLoop} from "./objects/deadPlayer.js";
import {doorDIVPosition} from "./objects/door.js";
import {gameWon} from "./game/gameWon.js";
import {collision} from "./collisions/collision.js";
import {enemy1Moves} from "./enemiesMoving/enemy1Moves.js";
import {enemy2Moves} from "./enemiesMoving/enemy2Moves.js";
import {enemy3Moves} from "./enemiesMoving/enemy3Moves.js";
import {enemy4Moves} from "./enemiesMoving/enemy4Moves.js";
import {enemy5Moves} from "./enemiesMoving/enemy5Moves.js";
import {enemy6Moves} from "./enemiesMoving/enemy6Moves.js";


makeRows(15, template1)

let gameStartMenu = document.createElement("div");
gameStartMenu.setAttribute("class", 'gameStartMenu')
document.body.appendChild(gameStartMenu)
gameStartMenu.setAttribute("id", "gameStartMenu")
gameStartMenu.textContent = 'Bomberman'
let btnStart = document.createElement("button")
btnStart.textContent = "START GAME";
document.getElementById('gameStartMenu').appendChild(btnStart);
btnStart.addEventListener("click", function() {

    game.paused = false
    gameStartMenu.remove()
    xToGreen()
})

export const img = new Image();
export const imgExplosion = new Image()
export const imgDeadPlayer = new Image()
export let sprite, deadSprite, bomb, enemy1, enemy2, enemy3, enemy4
export let numberPattern = /\d+/g;

export let playerProperties = {
    height: 41.7,
    width: 43.3333,
    currentLoopIndex: 0,
    animationLoop: [5.98, 4.98, 3.98],
    slowedBy: 0,
    slowFrameRate: 7,
    dead: false,
    inBomb: false,
    moveBy: 2,
}

export let deadPlayerProperties = {
    height: 36,
    width: 29.75,
    currentLoopIndex: 0,
    animationLoop: [8.44, 8.44, 7.44, 6.44, 5.46, 4.46, 3.46, 2.43, 1.40],
    slowedBy: 0,
    slowFrameRate: 15,
    inLoop: false,
}

export let enemiesProperties = {
    height: 40.7,
    width: 43.3333,
    currentLoopIndex: 0,
    animationLoop: [15, 14, 13],
    animationLoop2: [10.87, 9.87, 8.87],
    slowedBy: 0,
    slowFrameRate: 7,
    moveBy: 1,
    enemy1:{
        dead: false,
    },
    enemy2: {
        dead: false,
    },
    enemy3: {
        dead: false,
    },
    enemy4: {
        dead: false,
    },
    enemy5: {
        dead: false,
    },
    enemy6: {
        dead: false,
    },
}

export let  bombProperties = {
    height: 40.7,
    width: 43.3333,
    currentLoopIndex: 0,
    animationLoop: [8.8, 7.8, 6.8],
    slowedBy: 0,
    slowFrameRate: 10,
    active:false,
    inLoop: false,
    counter: 0,
}

export let explosionProperties = {
    height: 50,
    width: 50,
    currentLoopIndex: 0,
    animationLoop: [7, 6, 5, 4, 3, 2, 1],
    slowedBy: 0,
    slowFrameRate: 4,
    active: false,
    inLoop: false,
    counter: 0,
}

export let game = {
    columnNumber: 15,
    levelOneFinished: false,
    levelTwoFinished: false,
    levelTwoStarted: false,
    levelThreeStarted: false,
    count: 0,
    paused: true,
    ended: false,
    doorFound: false,
    xChanged: false,
    timeSecond: 300
}


const loop = () => {
    if (playerProperties.slowedBy > playerProperties.slowFrameRate) {
        if (playerProperties.currentLoopIndex < playerProperties.animationLoop.length) {
            if (!playerProperties.dead){
                playerAnimationLoop()
            }
            if (enemiesProperties.enemy1.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop[playerProperties.currentLoopIndex], 14, 'enemy1')
            }

            if (enemiesProperties.enemy2.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop[playerProperties.currentLoopIndex], 14, 'enemy2')
            }

            if (enemiesProperties.enemy3.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop[playerProperties.currentLoopIndex], 14, 'enemy3')
            }

            if (enemiesProperties.enemy4.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop[playerProperties.currentLoopIndex], 14, 'enemy4')
            }

            if (game.levelTwoStarted && enemiesProperties.enemy5.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop2[playerProperties.currentLoopIndex], 14, 'enemy5')
            }

            if (game.levelThreeStarted && enemiesProperties.enemy6.dead === false) {
                drawSpriteEnemy(enemiesProperties.animationLoop2[playerProperties.currentLoopIndex], 14, 'enemy6')
            }

            playerProperties.currentLoopIndex++;
        } else {
            playerProperties.currentLoopIndex = 0;
        }
        playerProperties.slowedBy = 0;
    } else {
        playerProperties.slowedBy++;
    }

    if (!enemiesProperties.enemy1.dead) {
        enemy1Moves()
    }

    if (!enemiesProperties.enemy2.dead) {
        enemy2Moves()
    }

    if (!enemiesProperties.enemy3.dead) {
        enemy3Moves()
    }

    if (!enemiesProperties.enemy4.dead) {
        enemy4Moves()
    }

    if (game.levelTwoStarted && !enemiesProperties.enemy5.dead) {
        enemy5Moves()
    }

    if (game.levelThreeStarted && !enemiesProperties.enemy6.dead) {
        enemy6Moves()
    }

    if (!playerProperties.dead && !game.ended && !game.paused){
        if (!enemiesProperties.enemy1.dead) {
            collision('enemy1')
        }
        if (!enemiesProperties.enemy2.dead) {
            collision('enemy2')
        }
        if (!enemiesProperties.enemy3.dead) {
            collision('enemy3')
        }
        if (!enemiesProperties.enemy4.dead) {
            collision('enemy4')
        }
        if (game.levelTwoFinished && !enemiesProperties.enemy5.dead) {
            collision('enemy5')
        }
        if (game.levelTwoFinished && !enemiesProperties.enemy6.dead) {
            collision('enemy6')
        }
    }

    if (playerProperties.dead){
        deadPlayerLoop()
    }

    if (bombProperties.active) {
        bombLoop()
    }

    if (explosionProperties.active){
        explosionsLoop()
    }

    if (!game.levelOneFinished && game.doorFound && !playerProperties.dead && enemiesProperties.enemy1.dead && enemiesProperties.enemy2.dead && enemiesProperties.enemy3.dead && enemiesProperties.enemy4.dead && !game.ended) {
        gameWon()
    }
    if (game.levelOneFinished && !game.levelTwoFinished && game.doorFound && !playerProperties.dead && enemiesProperties.enemy1.dead && enemiesProperties.enemy2.dead && enemiesProperties.enemy3.dead && enemiesProperties.enemy4.dead && enemiesProperties.enemy5.dead && !game.ended) {
        gameWon()
    }
    if (game.levelOneFinished && game.levelTwoFinished && game.doorFound && !playerProperties.dead && enemiesProperties.enemy1.dead && enemiesProperties.enemy2.dead && enemiesProperties.enemy3.dead && enemiesProperties.enemy4.dead && enemiesProperties.enemy5.dead && enemiesProperties.enemy6.dead && !game.ended) {
        gameWon()
    }
    window.requestAnimationFrame(loop);
}

window.onload = () => {
    img.src = "./images/sprite.svg"
    imgExplosion.src = "./images/explosion.png"
    imgDeadPlayer.src = "./images/deadPlayer.svg"
}


img.onload = () => {
    createPlayer()
    enemies('enemy1')
    enemies('enemy2')
    enemies('enemy3')
    enemies('enemy4')
    doorDIVPosition()

    window.requestAnimationFrame(loop);
}

const checkPlayerInBomb = () => {
    playerProperties.inBomb = bombProperties.active && (Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -14 && Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 6) && ((Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -14) && Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 10);
}

// Listener Switch Case which makes Player move around the gameArea
document.addEventListener("keydown", (keypress) => keypress.preventDefault());

window.addEventListener('keydown', (e) => {
    let leftPlayerWithoutPixel
    let topPlayerWithoutPixel
    let playerInDivPosition
    let gameAreaDIVNumber
    let potentialMove
    sprite = document.getElementById('player')

    switch (e.code) {

        case 'Enter':
            if(!game.paused && !game.ended) {
                game.paused = true
                let gamePausedMenu = document.createElement("div");
                gamePausedMenu.setAttribute("class", 'gamePausedMenu')
                document.body.appendChild(gamePausedMenu)
                gamePausedMenu.setAttribute("id", "gamePausedMenu")
                let btnRestart = document.createElement("button")
                btnRestart.textContent = "RESTART GAME";
                document.getElementById('gamePausedMenu').appendChild(btnRestart);
                btnRestart.addEventListener("click", function() {
                    game.paused = false;
                    gamePausedMenu.remove()
                    document.location.reload()
                })

                let btnEnd = document.createElement("button")
                btnEnd.textContent = "CONTINUE GAME";
                document.getElementById('gamePausedMenu').appendChild(btnEnd);
                btnEnd.addEventListener("click", function() {
                    game.paused = false;
                    gamePausedMenu.remove()
                    if(bombProperties.inLoop){
                        bombLoop()
                    }
                    if (explosionProperties.inLoop){
                        explosionsLoop()
                    }
                    if (deadPlayerProperties.inLoop){
                        deadPlayerLoop()
                    }
                    if (!game.xChanged){
                        xToGreen()
                    }
                })
            }
            break

        case 'ArrowLeft':
            if(!game.paused && !game.ended && !playerProperties.dead) {
                if (bombProperties.active){
                    checkPlayerInBomb()
                }
                potentialMove = parseInt(sprite.style.left) - playerProperties.moveBy + 'px'
                leftPlayerWithoutPixel = Number(potentialMove.match(numberPattern))
                //helps to move player to the left
                topPlayerWithoutPixel = Number(sprite.style.top.match(numberPattern)) + 2
                //let's say we get 30 but on the border we get 29
                playerInDivPosition = Math.trunc((topPlayerWithoutPixel / 50)) * game.columnNumber + Math.ceil(leftPlayerWithoutPixel / 50)
                gameAreaDIVNumber = document.getElementById(playerInDivPosition)
                // IF DIV 30 is green player moves. 29 is a brick player can't move
                if (gameAreaDIVNumber.classList.contains('green') || gameAreaDIVNumber.classList.contains('x') || gameAreaDIVNumber.classList.contains('door')) {

                    if(bombProperties.active && !playerProperties.inBomb && (Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 && Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > 6) && (Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) >= -33 && Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) <= 30)) {

                    } else if (Number(sprite.style.top.match(numberPattern)%50 >= 16) && Number(sprite.style.top.match(numberPattern)%50 <= 49) && document.getElementById(String(playerInDivPosition + game.columnNumber)).classList.contains('stone')) {

                    } else {
                        sprite.style.left = parseInt(sprite.style.left) - playerProperties.moveBy + 'px'
                    }
                }
            }
            break

        case 'ArrowRight':
            if(!game.paused && !game.ended && !playerProperties.dead) {
                if (bombProperties.active){
                    checkPlayerInBomb()
                }
                potentialMove = parseInt(sprite.style.left) + playerProperties.moveBy + 'px'
                leftPlayerWithoutPixel = Number(potentialMove.match(numberPattern))+30
                topPlayerWithoutPixel = Number(sprite.style.top.match(numberPattern)) +2
                playerInDivPosition = Math.trunc((topPlayerWithoutPixel / 50)) * game.columnNumber + Math.ceil(leftPlayerWithoutPixel / 50)
                gameAreaDIVNumber = document.getElementById(playerInDivPosition)
                // IF DIV 30 is green player moves. 29 is a brick player can't move
                if (gameAreaDIVNumber.classList.contains('green') || gameAreaDIVNumber.classList.contains('x') || gameAreaDIVNumber.classList.contains('door')) {
                    if(bombProperties.active && !playerProperties.inBomb && (Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -33 && Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) <= -14) && (Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) >= -33 && Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) <= 30)) {

                    } else if (Number(sprite.style.top.match(numberPattern)%50 >= 16) && Number(sprite.style.top.match(numberPattern)%50 <= 49) && document.getElementById(String(playerInDivPosition + game.columnNumber)).classList.contains('stone')) {

                    } else {
                        sprite.style.left = parseInt(sprite.style.left) + playerProperties.moveBy + 'px'
                    }
                }
            }
            break

        case 'ArrowUp':
            if(!game.paused && !game.ended && !playerProperties.dead) {
                if (bombProperties.active){
                    checkPlayerInBomb()
                }
                potentialMove = parseInt(sprite.style.top) - playerProperties.moveBy + 'px'
                leftPlayerWithoutPixel = Number(sprite.style.left.match(numberPattern))
                // lifts towards top
                topPlayerWithoutPixel = Number(potentialMove.match(numberPattern))
                playerInDivPosition = Math.trunc((topPlayerWithoutPixel / 50)) * game.columnNumber + Math.ceil(leftPlayerWithoutPixel / 50)
                gameAreaDIVNumber = document.getElementById(playerInDivPosition)
                if (gameAreaDIVNumber.classList.contains('green') || gameAreaDIVNumber.classList.contains('x') || gameAreaDIVNumber.classList.contains('door')) {

                    if (bombProperties.active && !playerProperties.inBomb && (Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29 && Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) >= 11) && (Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) >= -32 && Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) <= 26)) {
                    } else if ((Number(sprite.style.left.match(numberPattern) % 50 >= 24) && Number(sprite.style.left.match(numberPattern) % 50 <= 49)|| Number(sprite.style.left.match(numberPattern) % 50 === 0)) && !document.getElementById(String(playerInDivPosition - game.columnNumber)).classList.contains('stone') && Number(sprite.style.top.match(numberPattern) % 50 === 0)) {

                    } else {
                        sprite.style.top = parseInt(sprite.style.top) - playerProperties.moveBy +'px'
                    }
                }
            }
            break

        case 'ArrowDown':
            if(!game.paused && !game.ended && !playerProperties.dead) {
                if (bombProperties.active){
                    checkPlayerInBomb()
                }
                potentialMove = parseInt(sprite.style.top) + playerProperties.moveBy + 'px'
                leftPlayerWithoutPixel = Number(sprite.style.left.match(numberPattern))
                topPlayerWithoutPixel = Number(potentialMove.match(numberPattern)) + 37
                playerInDivPosition = Math.trunc((topPlayerWithoutPixel / 50)) * game.columnNumber + Math.ceil(leftPlayerWithoutPixel / 50)
                gameAreaDIVNumber = document.getElementById(playerInDivPosition)

                if (gameAreaDIVNumber.classList.contains('green') || gameAreaDIVNumber.classList.contains('x') || gameAreaDIVNumber.classList.contains('door')) {

                    if (bombProperties.active && !playerProperties.inBomb && (Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -33 && Number(sprite.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) <= -15 ) && (Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) >= -32 && Number(sprite.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) <= 26)) {
                    } else  if ((Number(sprite.style.left.match(numberPattern) % 50 >= 24) && Number(sprite.style.left.match(numberPattern) % 50 <= 49)|| Number(sprite.style.left.match(numberPattern) % 50 === 0)) && !document.getElementById(String(playerInDivPosition + game.columnNumber)).classList.contains('stone') && !Number(sprite.style.top.match(numberPattern) % 50 < 5) ) {

                    } else {
                        sprite.style.top = parseInt(sprite.style.top) + playerProperties.moveBy + 'px'
                    }
                }
            }
            break

        case 'Space':
            if(!game.paused && !game.ended) {
                if (!bombProperties.active && !playerProperties.dead) {
                    bombProperties.active = true
                    bombProperties.inLoop = true
                    bomb = createBomb()
                }
            }
            break
    }
})