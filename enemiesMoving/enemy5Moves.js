import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {bomb, bombProperties, enemiesProperties, explosionProperties, game, numberPattern} from "../script.js";

let enemyInDivPosition5
let counter5 = 0
let moveLeft5 = false
export const enemy5Moves = () => {
    if(!game.paused && !game.ended) {
        if (!enemiesProperties.enemy5.dead){
            let enemy5 = document.getElementById('enemy5')
            let enemyLeftWithoutPixelNUmber = Number(enemy5.style.left.match(numberPattern))
            let enemyTopWithoutPixelNUmber = Number(enemy5.style.top.match(numberPattern))

            enemyInDivPosition5 = Math.trunc((enemyTopWithoutPixelNUmber / 50)) * game.columnNumber + Math.ceil(enemyLeftWithoutPixelNUmber / 50)
            // moves enemy to left
            if (moveLeft5 && (document.getElementById(enemyInDivPosition5).classList.contains('green') || document.getElementById(enemyInDivPosition5).classList.contains('door'))) {
                enemy5.style.left = parseInt(enemy5.style.left) - enemiesProperties.moveBy + 'px'
              //  enemy5.style.transform = 'scaleX(1)'
            }

            if (bombProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === 26 && (Number(enemy5.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy5.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29)) {
                moveLeft5 = false
            }

            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionRight.style.left.match(numberPattern)) === 51  && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionRight.style.top.match(numberPattern)) < 51)) {
                moveLeft5 = false
            }
            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === 51  && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51)) {
                moveLeft5 = false
            }

            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === 51  && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) < 51)) {
                moveLeft5 = false
            }

            if (document.getElementById(String(enemyInDivPosition5 - 1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition5 - 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition5 - 1)).classList.contains('x')) {
                if (counter5 > 20 && Number(enemy5.style.left.match(numberPattern))% 50 === 3) {
                    moveLeft5 = false
                    counter5 = 0
                }
                counter5++
            }
            if (!moveLeft5 && (document.getElementById(enemyInDivPosition5).classList.contains('green') || document.getElementById(enemyInDivPosition5).classList.contains('door'))) {
                enemy5.style.left = parseInt(enemy5.style.left) + enemiesProperties.moveBy + 'px'
              //  enemy5.style.transform = 'scaleX(-1)'
            }

            if (bombProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(bomb.style.left.match(numberPattern)) === -32 && (Number(enemy5.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) > -26 && Number(enemy5.style.top.match(numberPattern)) - Number(bomb.style.top.match(numberPattern)) < 29) ) {
                moveLeft5 = true
            }

            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionLeft.style.left.match(numberPattern)) === -28 && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionLeft.style.top.match(numberPattern)) < 51) ) {
                moveLeft5 = true
            }

            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionTop.style.left.match(numberPattern)) === -28 && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionTop.style.top.match(numberPattern)) < 51) ) {
                moveLeft5 = true
            }

            if (explosionProperties.active && Number(enemy5.style.left.match(numberPattern)) - Number(explosionBottom.style.left.match(numberPattern)) === -28 && (Number(enemy5.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) > -28 && Number(enemy5.style.top.match(numberPattern)) - Number(explosionBottom.style.top.match(numberPattern)) < 51) ) {
                moveLeft5 = true
            }

            if (document.getElementById(String(enemyInDivPosition5+1)).classList.contains('stone') || document.getElementById(String(enemyInDivPosition5 + 1)).classList.contains('brick') || document.getElementById(String(enemyInDivPosition5 + 1)).classList.contains('x')) {
                if (Number(enemy5.style.left.match(numberPattern) % 50=== 25)) {
                    moveLeft5 = true
                }
            }
        }
    }
}