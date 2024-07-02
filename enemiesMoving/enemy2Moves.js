import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";

let enemyInDivPosition2
let counter2 = 0
let moveLeft2 = false

export const enemy2Moves = () => {
    if(!game.paused && !game.ended) {
        if (!enemiesProperties.enemy2.dead) {
            let enemy2 = document.getElementById('enemy2')
            let enemyLeftWithoutPixelNUmber2 = Number(enemy2.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber2 = Number(enemy2.style.top.match(numberPattern))

            enemyInDivPosition2 = Math.trunc((enemyTopWithoutPixelNUmber2 / 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber2 / 50)

            if (moveLeft2 && (document.getElementById(enemyInDivPosition2).classList.contains('green') || document.getElementById(enemyInDivPosition2).classList.contains('door'))) {
                enemy2.style.left = parseInt(enemy2.style.left) - enemiesProperties.moveBy + 'px'
                enemy2.style.transform = 'scaleX(1)'
            }

            // turns around with bomb
            if (bombProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === 26 && (Number(enemy2.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy2.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29)) {
                moveLeft2 = false
            }
            // turns around with explosion
            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) === 51  && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) < 51)) {
                moveLeft2 = false
            }
            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === 51  && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51)) {
                moveLeft2 = false
            }

            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === 51  && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51)) {
                moveLeft2 = false
            }
            // counter keeps the enemy direction changes precise when close to brick, x area or stone
            if (document.getElementById(String(enemyInDivPosition2 - 1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition2 - 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition2 - 1)).classList.contains('x')) {
                if (counter2 > 20 && Number(enemy2.style.left.match(numberPattern))% 50 === 3) {
                    moveLeft2 = false
                    counter2 = 0
                }

                counter2++
            }
            if (!moveLeft2 && (document.getElementById(enemyInDivPosition2).classList.contains('green') || document.getElementById(enemyInDivPosition2).classList.contains('door'))) {
                enemy2.style.left = parseInt(enemy2.style.left) + enemiesProperties.moveBy + 'px'
                // mirrors the enemy animation
                enemy2.style.transform = 'scaleX(-1)'
            }
            // turns around with bomb
            if (bombProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === -28 && (Number(enemy2.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy2.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29)) {
                moveLeft2 = true
            }
            // turns around with explosion
            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) === -28 && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) < 51) ) {
                moveLeft2 = true
            }

            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === -28 && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51) ) {
                moveLeft2 = true
            }

            if (explosionProperties.active && Number(enemy2.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === -28 && (Number(enemy2.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy2.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) < 51) ) {
                moveLeft2 = true
            }

            if (document.getElementById(String(enemyInDivPosition2 + 1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition2 + 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition2 + 1)).classList.contains('x')) {
                if (Number(enemy2.style.left.match(numberPattern) % 50 === 20)) {
                    moveLeft2 = true
                }
            }
        }
    }
}
