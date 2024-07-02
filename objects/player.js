import {game, img, numberPattern, playerProperties} from "../script.js";


export const drawSpritePlayer = (frameX, frameY) => {
    let player = document.getElementById('player')
    const x = frameX * playerProperties.width
    const y = frameY * playerProperties.height
    player.style.backgroundPosition = `${x}px ${y}px`;
};

export let topPixelNumber, leftPixelNumber, startDivTop, startDivLeft

// here we assign player's starting position in random place in gameArea
const playerPosition = () => {
    let playerPossibleStart = document.querySelectorAll(".x")
    const random = Math.floor(Math.random() * playerPossibleStart.length)
    let playerPositionID = playerPossibleStart[random].id
    let startDiv = document.getElementById(playerPositionID)
    startDivTop = startDiv.style.top
    topPixelNumber = Number(startDivTop.match(numberPattern)) + 10 +`px`
    startDivLeft = startDiv.style.left
    leftPixelNumber = Number(startDivLeft.match(numberPattern)) + 13 +`px`
}


export const createPlayer = () => {
    playerPosition()
    let player = document.createElement("div")
    player.setAttribute("id","player")
    player.style.height = `${playerProperties.height-6}px`
    player.style.width = `${playerProperties.width-13}px`
    player.style.backgroundImage = `url(${img.src})`
    player.style.position = 'absolute'
    player.style.left = leftPixelNumber
    player.style.top = topPixelNumber
    player.style.position = 'absolute'
    player.style.zIndex = '8'
    document.getElementById('gameArea').appendChild(player)
    // which sprite we start the animation with
    drawSpritePlayer(15, 5.98)
}

export const playerAnimationLoop = () => {
    window.addEventListener('keydown', function(event) {
        if(!game.paused && !game.ended && !playerProperties.dead) {

            switch (event.code) {
                case 'ArrowLeft':
                    drawSpritePlayer(14, playerProperties.animationLoop[playerProperties.currentLoopIndex])
                    break

                case 'ArrowDown':
                    drawSpritePlayer(15, playerProperties.animationLoop[playerProperties.currentLoopIndex]);
                    break

                case 'ArrowUp':
                    drawSpritePlayer(13, playerProperties.animationLoop[playerProperties.currentLoopIndex]);
                    break

                case 'ArrowRight':
                    drawSpritePlayer(11.95, playerProperties.animationLoop[playerProperties.currentLoopIndex]);
                    break
            }
        }
    })
}