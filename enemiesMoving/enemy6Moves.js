import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";

let enemyInDivPosition6
let counter6 = 0
let moveDown6 = false

export const enemy6Moves = () => {
    if(!game.paused && !game.ended) {
        if (!enemiesProperties.enemy6.dead) {
            let enemy6 = document.getElementById('enemy6')
            let enemyLeftWithoutPixelNUmber6 = Number(enemy6.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber6 = Number(enemy6.style.top.match(numberPattern))

            enemyInDivPosition6 = Math.trunc((enemyTopWithoutPixelNUmber6 / 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber6 / 50)

            // enemy6 moves down
            if (moveDown6 && (document.getElementById(enemyInDivPosition6).classList.contains('green') || document.getElementById(enemyInDivPosition6).classList.contains('door'))) {
                enemy6.style.top = parseInt(enemy6.style.top) + enemiesProperties.moveBy + 'px'
               // enemy6.style.transform = 'scaleX(1)'
            }
            if (bombProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === -26 && (Number(enemy6.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy6.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown6 = false
            }
            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === -21 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = false
            }
            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) === -21 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = false
            }
            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === -21 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = false
            }

            if (document.getElementById(String(enemyInDivPosition6 + game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition6 + game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition6 + game.columnNumber)).classList.contains('x')) {
                if (counter6 > 10 && Number(enemy6.style.top.match(numberPattern))% 50 === 20) {
                    moveDown6 = false
                    counter6 = 0
                }
                counter6++
            }
            // enemy6 moves up
            if (!moveDown6 && (document.getElementById(enemyInDivPosition6).classList.contains('green') || document.getElementById(enemyInDivPosition6).classList.contains('door'))) {
                enemy6.style.top = parseInt(enemy6.style.top) - enemiesProperties.moveBy + 'px'
              //  enemy6.style.transform = 'scaleX(-1)'
            }
            if (bombProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === 29 && (Number(enemy6.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy6.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown6 = true
            }

            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === 51 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = true
            }
            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) === 51 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = true
            }
            if (explosionProperties.active && Number(enemy6.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === 51 && (Number(enemy6.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy6.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown6 = true
            }

            if (document.getElementById(String(enemyInDivPosition6 - game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition6 - game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition6 - game.columnNumber)).classList.contains('x')) {
                if ( Number(enemy6.style.top.match(numberPattern) % 50 < 4)) {
                    moveDown6 = true
                }
            }
        }
    }
}