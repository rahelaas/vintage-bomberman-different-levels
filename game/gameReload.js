import {enemies, removeEnemies} from "../objects/enemies.js";
import {makeRows, xToGreen} from "./createBoard.js";
import {template1, template2, template3} from "./template.js";
import {createPlayer} from "../objects/player.js";
import {doorDIVPosition} from "../objects/door.js";
import {gameOver} from "./gameOver.js";
import {bombProperties, enemiesProperties, explosionProperties, game, playerProperties} from "../script.js";
import {displayTime} from "./app.js";

export function gameReload(){
    setTimeout(function () {
        if (playerProperties.dead){
            document.getElementsByClassName('lives')[0].children[0].remove()
        }
        removeEnemies()

        if (bombProperties.active) {
            document.getElementById('bomb').remove()
            bombProperties.active = false
            bombProperties.inLoop = false
            bombProperties.counter = 0
        }

        if (explosionProperties.active) {
            document.getElementById('explosion').remove()
            document.getElementById('explosionLeft').remove()
            document.getElementById('explosionRight').remove()
            document.getElementById('explosionBottom').remove()
            document.getElementById('explosionTop').remove()
            explosionProperties.active = false
        }
        game.timeSecond = 300
        displayTime(300)
        if (!game.levelOneFinished) {
            newLevel(game.columnNumber, '0', template1)
        }

        if (game.levelOneFinished && !game.levelTwoFinished) {
            newLevel(15, '-51px', template2)
            game.levelTwoStarted = true
        }

        if (game.levelOneFinished && game.levelTwoFinished) {
            newLevel(17, '-102px', template3)
            game.levelThreeStarted = true
        }

        createPlayer()
        playerProperties.dead = false
        enemies('enemy1')
        enemies('enemy2')
        enemies('enemy3')
        enemies('enemy4')
        if (game.levelTwoStarted){
            enemies('enemy5')
        }
        if (game.levelThreeStarted){
            enemies('enemy6')
        }
        doorDIVPosition()

        enemiesProperties.enemy1.dead = false
        enemiesProperties.enemy2.dead = false
        enemiesProperties.enemy3.dead = false
        enemiesProperties.enemy4.dead = false
        enemiesProperties.enemy5.dead = false
        enemiesProperties.enemy6.dead = false
        game.ended = false
        game.xChanged = false
        xToGreen()

        if (document.getElementsByClassName('lives')[0].children.length < 1) {
            gameOver()
        }
    }, 2000)
}

// creates a new level after finishing a level or after player dies
const newLevel = (cols, seasonPixel, template) => {
    document.getElementById("gameArea").remove()

    let container = document.createElement("div")
    container.setAttribute("id", "gameArea")
    container.setAttribute("class", "gameArea")
    document.body.appendChild(container)
    makeRows( cols, template)
    let newBrick = document.querySelectorAll(".brick")
    for (let i=0; i < newBrick.length; i++) {
        newBrick[i].style.backgroundPosition = '-102px ' + `${seasonPixel}`
    }

    let newStone = document.querySelectorAll(".stone")
    for (let i=0; i < newStone.length; i++) {
        newStone[i].style.backgroundPosition = '-153px ' + `${seasonPixel}`
    }

    let newGreen = document.querySelectorAll(".green")
    for (let i=0; i < newGreen.length; i++) {
        newGreen[i].style.backgroundPosition = '0px ' + `${seasonPixel}`
    }

    let newX = document.querySelectorAll(".x")
    for (let i=0; i < newX.length; i++) {
        newX[i].style.backgroundPosition = '0px ' + `${seasonPixel}`
    }

    let newDoor = document.querySelectorAll(".door")
    for (let i = 0; i < newDoor.length; i++) {
        newDoor[i].style.backgroundPosition = '-51px' + ` ${seasonPixel}`
    }
}