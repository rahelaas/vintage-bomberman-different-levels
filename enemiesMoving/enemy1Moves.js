import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";

let enemyInDivPosition
let counter = 0
let moveLeft = false
export const enemy1Moves = () => {
    if (!game.paused && !game.ended) {
        if (!enemiesProperties.enemy1.dead) {

            let enemy = document.getElementById('enemy1')
            let enemyLeftWithoutPixelNUmber = Number(enemy.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber = Number(enemy.style.top.match(numberPattern))

            enemyInDivPosition = Math.trunc((enemyTopWithoutPixelNUmber / 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber / 50)
            // moves enemy to left
            if (moveLeft && (document.getElementById(enemyInDivPosition).classList.contains('green') || document.getElementById(enemyInDivPosition).classList.contains('door'))) {
                enemy.style.left = parseInt(enemy.style.left) - enemiesProperties.moveBy + 'px'
                enemy.style.transform = 'scaleX(1)'
            }

            if (bombProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === 26 && (Number(enemy.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29)) {
                moveLeft = false
            }

            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) === 51 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) < 51)) {
                moveLeft = false
            }
            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === 51 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51)) {
                moveLeft = false
            }

            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === 51 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) < 51)) {
                moveLeft = false
            }
            // counter keeps the enemy direction changes precise when close to brick, x area or stone
            if (document.getElementById(String(enemyInDivPosition - 1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition - 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition - 1)).classList.contains('x')) {
                if (counter > 20 && Number(enemy.style.left.match(numberPattern)) % 50 === 3) {
                    moveLeft = false
                    counter = 0
                }
                counter++
            }
            if (!moveLeft && (document.getElementById(enemyInDivPosition).classList.contains('green') || document.getElementById(enemyInDivPosition).classList.contains('door'))) {
                enemy.style.left = parseInt(enemy.style.left) + enemiesProperties.moveBy + 'px'
                // mirrors the enemy animation
                enemy.style.transform = 'scaleX(-1)'
            }

            if (bombProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === -32 && (Number(enemy.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29)) {
                moveLeft = true
            }

            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) === -28 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) < 51)) {
                moveLeft = true
            }

            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === -28 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51)) {
                moveLeft = true
            }

            if (explosionProperties.active && Number(enemy.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === -28 && (Number(enemy.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) < 51)) {
                moveLeft = true
            }

            if (document.getElementById(String(enemyInDivPosition + 1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition + 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition + 1)).classList.contains('x')) {
                if (Number(enemy.style.left.match(numberPattern) % 50 === 25)) {
                    moveLeft = true
                }
            }
        }
    }
}