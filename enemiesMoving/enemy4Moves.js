import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";


let enemyInDivPosition4
let counter4 = 0
let moveDown4 = false


export const enemy4Moves = () => {
    if(!game.paused && !game.ended) {
        if (!enemiesProperties.enemy4.dead) {
            let enemy4 = document.getElementById('enemy4')
            let enemyLeftWithoutPixelNUmber4 = Number(enemy4.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber4 = Number(enemy4.style.top.match(numberPattern))

            enemyInDivPosition4 = Math.trunc(((enemyTopWithoutPixelNUmber4)/ 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber4 / 50)

            // enemy4 moves down
            if (moveDown4 && (document.getElementById(enemyInDivPosition4).classList.contains('green') || document.getElementById(enemyInDivPosition4).classList.contains('door'))) {
                enemy4.style.top = parseInt(enemy4.style.top) + enemiesProperties.moveBy + 'px'
                enemy4.style.transform = 'scaleX(-1)'

            }
            if (bombProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === -26 && (Number(enemy4.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy4.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown4 = false
            }

            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === -21 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = false
            }
            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) === -21 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = false
            }
            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === -21 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = false
            }


            if (document.getElementById(String(enemyInDivPosition4 + game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition4 + game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition4 + game.columnNumber)).classList.contains('x')) {
                if (counter4 > 11 && Number(enemy4.style.top.match(numberPattern))% 50 === 20) {
                    moveDown4 = false
                    counter4 = 0
                }
                counter4++
            }
            // enemy4 moves up
            if (!moveDown4 && (document.getElementById(enemyInDivPosition4).classList.contains('green') || document.getElementById(enemyInDivPosition4).classList.contains('door'))) {
                enemy4.style.top = parseInt(enemy4.style.top) - enemiesProperties.moveBy + 'px'
                enemy4.style.transform = 'scaleX(1)'
            }
            if (bombProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === 29 && (Number(enemy4.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy4.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown4 = true
            }

            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === 51 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = true
            }
            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) === 51 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = true
            }
            if (explosionProperties.active && Number(enemy4.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === 51 && (Number(enemy4.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy4.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown4 = true
            }
            if (document.getElementById(String(enemyInDivPosition4 - game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition4 - game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition4 - game.columnNumber)).classList.contains('x')) {
                if (Number(enemy4.style.top.match(numberPattern)%50 < 4)) {
                    moveDown4 = true
                }
            }
        }
    }
}
