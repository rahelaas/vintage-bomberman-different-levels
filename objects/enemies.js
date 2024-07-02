import {img, numberPattern, enemiesProperties, game} from "../script.js";


let enemyTopPixelNumber
let enemyLeftPixelNumber
let enemyPositionID

export const drawSpriteEnemy = (frameX, frameY, name) => {
    let sprite = document.getElementById(`${name}`)
    const a = frameX * enemiesProperties.width
    const b = frameY * enemiesProperties.height
    sprite.style.backgroundPosition = `${a}px ${b}px`;
}

//create enemy's random start position
const enemyRandomStartPosition = (name) => {
    let enemyPossibleStart = document.querySelectorAll(".green")
    let enemyRandom = Math.floor(Math.random() * enemyPossibleStart.length)
    enemyPositionID = enemyPossibleStart[enemyRandom].id
    checkRandomPositionEnemy(name)
    return enemyPositionID
}


//checks if random position is not stones to the left or right of enemy. If it is, function goes back to enemyRandomPosition and generates new number
const checkRandomPositionEnemy = (name) => {

    if (`${name}` === 'enemy1' || `${name}` === 'enemy2' || `${name}` === 'enemy5'){
        if ((document.getElementById(String(Number(enemyPositionID) - 1)).className === 'stone') && (document.getElementById(String(parseInt(enemyPositionID)+1)).className === 'stone')) {
            do {
                enemyPositionID = enemyRandomStartPosition(name)
            } while ((document.getElementById(String(Number(enemyPositionID - 1))).className !== 'stone') && (document.getElementById(String(parseInt(enemyPositionID)+1)).className !== 'stone'))
            checkRandomPositionEnemy(name)
        }
    } else {
        if ((document.getElementById(String(Number(enemyPositionID) - game.columnNumber)).className === 'stone') && (document.getElementById(String(parseInt(enemyPositionID)+ game.columnNumber)).className === 'stone')) {
            do {
                enemyPositionID = enemyRandomStartPosition()
            } while ((document.getElementById(String(Number(enemyPositionID) - game.columnNumber)).className !== 'stone') && (document.getElementById(String(parseInt(enemyPositionID)+ game.columnNumber)).className !== 'stone'))
            checkRandomPositionEnemy()
        }
    }
}


//enemy's start position
const enemiesPositions = (name) => {
    enemyPositionID = enemyRandomStartPosition(name)
    let enemyStartDiv = document.getElementById(enemyPositionID)
    let enemyStartDivTop = enemyStartDiv.style.top
    enemyTopPixelNumber = Number(enemyStartDivTop.match(numberPattern)) + 10+`px`
    let enemyStartDivLeft = enemyStartDiv.style.left
    enemyLeftPixelNumber = Number(enemyStartDivLeft.match(numberPattern)) + 13 +`px`
}


export const enemies = (name) => {
    enemiesPositions(name)
    let  enemy = document.createElement("div")
    enemy.setAttribute("id", `${name}`)
    enemy.style.height = `${enemiesProperties.height - 13}px`
    enemy.style.width = `${enemiesProperties.width - 13}px`
    enemy.style.backgroundImage = `url(${img.src})`
    enemy.style.position = 'absolute'
    enemy.style.zIndex = '6'
    enemy.style.left = enemyLeftPixelNumber
    enemy.style.top = enemyTopPixelNumber
    document.getElementById('gameArea').appendChild(enemy)
    // the starting animation for enemies
    if (`${name}` === 'enemy5' || `${name}` === 'enemy6'){
        drawSpriteEnemy(8.87, 14, name)

    } else {
        drawSpriteEnemy(12, 14, name)
    }


}
export const removeEnemies = function () {
    if (enemiesProperties.enemy1.dead === false) {
        document.getElementById('enemy1').remove()
        enemiesProperties.enemy1.dead = true
    }

    if(enemiesProperties.enemy2.dead === false){
        document.getElementById('enemy2').remove()
        enemiesProperties.enemy2.dead = true
    }

    if (enemiesProperties.enemy3.dead === false) {
        document.getElementById('enemy3').remove()
        enemiesProperties.enemy3.dead = true
    }

    if(enemiesProperties.enemy4.dead === false){
        document.getElementById('enemy4').remove()
        enemiesProperties.enemy4.dead = true
    }

    if(game.levelTwoStarted && enemiesProperties.enemy5.dead === false){
        document.getElementById('enemy5').remove()
        enemiesProperties.enemy5.dead = true
    }

    if(game.levelThreeStarted && enemiesProperties.enemy6.dead === false){
        document.getElementById('enemy6').remove()
        enemiesProperties.enemy6.dead = true
    }

}