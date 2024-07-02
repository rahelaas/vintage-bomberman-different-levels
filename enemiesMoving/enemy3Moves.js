import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";

let enemyInDivPosition3
let counter3 = 0
let moveDown3 = false

export const enemy3Moves = () => {
    if(!game.paused && !game.ended) {
        if (!enemiesProperties.enemy3.dead) {
            let enemy3 = document.getElementById('enemy3')
            let enemyLeftWithoutPixelNUmber3 = Number(enemy3.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber3 = Number(enemy3.style.top.match(numberPattern))

            enemyInDivPosition3 = Math.trunc((enemyTopWithoutPixelNUmber3 / 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber3 / 50)

            // enemy3 moves down
            if (moveDown3 && (document.getElementById(enemyInDivPosition3).classList.contains('green') || document.getElementById(enemyInDivPosition3).classList.contains('door'))) {
                enemy3.style.top = parseInt(enemy3.style.top) + enemiesProperties.moveBy + 'px'
                enemy3.style.transform = 'scaleX(1)'
            }
            if (bombProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === -26 && (Number(enemy3.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy3.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown3 = false
            }
            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === -21 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = false
            }
            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) === -21 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = false
            }
            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === -21 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = false
            }

            if (document.getElementById(String(enemyInDivPosition3 + game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition3 + game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition3 + game.columnNumber)).classList.contains('x')) {
                if (counter3 > 10 && Number(enemy3.style.top.match(numberPattern))% 50 === 20) {
                    moveDown3 = false
                    counter3 = 0
                }
                counter3++
            }
            // enemy3 moves up
            if (!moveDown3 && (document.getElementById(enemyInDivPosition3).classList.contains('green') || document.getElementById(enemyInDivPosition3).classList.contains('door'))) {
                enemy3.style.top = parseInt(enemy3.style.top) - enemiesProperties.moveBy + 'px'
                enemy3.style.transform = 'scaleX(-1)'
            }
            if (bombProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) === 29 && (Number(enemy3.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) > -32 && Number(enemy3.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) < 26 )) {
                moveDown3 = true
            }

            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) === 51 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = true
            }
            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) === 51 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = true
            }
            if (explosionProperties.active && Number(enemy3.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) === 51 && (Number(enemy3.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) > -28 && Number(enemy3.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) < 51 )) {
                moveDown3 = true
            }

            if (document.getElementById(String(enemyInDivPosition3 - game.columnNumber)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition3 - game.columnNumber)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition3 - game.columnNumber)).classList.contains('x')) {
                if ( Number(enemy3.style.top.match(numberPattern) % 50 < 4)) {
                    moveDown3 = true
                }
            }
        }
    }
}