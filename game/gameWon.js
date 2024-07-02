import {doorPositionID} from "../objects/door.js";
import {drawSpritePlayer} from "../objects/player.js";
import {game, numberPattern, playerProperties, sprite} from "../script.js";
import {gameReload} from "./gameReload.js";

let levelCounter = 0
export const gameWon = () => {
    if (!game.ended && !playerProperties.dead){
        let playerPosition = document.getElementById('player')
        let playerTopPixelsNumber = Number(playerPosition.style.top.match(numberPattern))
        let playerLeftPixelsNumber = Number(playerPosition.style.left.match(numberPattern))
        let doorPosition = document.getElementById(doorPositionID)
        let doorTopPixelNumber = Number(doorPosition.style.top.match(numberPattern))
        let doorLeftPixelNumber = Number(doorPosition.style.left.match(numberPattern))

        if ((game.timeSecond > 0) && (playerTopPixelsNumber - doorTopPixelNumber >= 2 && playerTopPixelsNumber - doorTopPixelNumber <= 14 ) && (playerLeftPixelsNumber - doorLeftPixelNumber >= -1 && playerLeftPixelsNumber - doorLeftPixelNumber <= 19)) {
            game.ended = true
            game.doorFound = false
            levelCounter++

            drawSpritePlayer(15, 5.98)
            sprite.style.left = Number(doorPosition.style.left.match(numberPattern)) + 13 + 'px'
            sprite.style.top = Number(doorPosition.style.top.match(numberPattern)) + 14 + 'px'

            if (levelCounter === 1) {
                game.levelOneFinished = true
                game.columnNumber = 15
                gameReload()
                game.timeSecond = 300
            }
            if (levelCounter === 2) {
                game.levelTwoFinished = true
                game.columnNumber = 17
                gameReload()
                game.timeSecond = 300
            }
            if (levelCounter === 3) {
                game.ended = true
                setTimeout (function(){
                    let winGame = document.createElement("div");
                    winGame.setAttribute("class", 'winGame')
                    document.body.appendChild(winGame)
                    let winGameMenu = document.createElement("div")
                    winGameMenu.setAttribute("class", 'winGameMenu')
                    winGameMenu.setAttribute("id", 'winGameMenu')
                    winGameMenu.textContent = 'YOU HAVE WON!'
                    document.querySelector('body').appendChild(winGameMenu)
                    let btnEnd = document.createElement("button")
                    btnEnd.textContent = "LET'S PLAY MORE";
                    document.getElementById('winGameMenu').appendChild(btnEnd);
                    btnEnd.addEventListener("click", function() {
                        document.location.reload();
                    })
                }, 900)
            }
        }
    }
}