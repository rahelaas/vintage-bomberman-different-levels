import {countScore} from "../game/score.js";
import {enemiesProperties, explosionProperties, game, numberPattern, playerProperties} from "../script.js";
import {playerDying} from "../objects/deadPlayer.js";


let explosionPositions = function (explosion){
    let explosionPosition = document.getElementById(`${explosion}`)
    let explosionTopPixelNumber = Number(explosionPosition.style.top.match(numberPattern))
    let explosionLeftPixelNumber = Number(explosionPosition.style.left.match(numberPattern))
    return [explosionTopPixelNumber, explosionLeftPixelNumber]
}


export const fireCollisionEnemy = (name) => {
    if (explosionProperties.active && !playerProperties.dead && !game.ended) {

        // left explosion pixel numbers
        let [explosionLeftPixelNumberTop, explosionLeftPixelNumberLeft] = explosionPositions('explosionLeft')

        // right explosion pixel numbers
        let [explosionRightPixelNumberTop, explosionRightPixelNumberLeft] = explosionPositions('explosionRight')

        // top explosion pixel numbers
        let [explosionTopPixelNumberTop, explosionTopPixelNumberLeft] = explosionPositions('explosionTop')

        // bottom explosion pixel numbers
        let [explosionBottomPixelNumberTop, explosionBottomPixelNumberLeft] = explosionPositions('explosionBottom')

        // enemy pixel numbers
        let enemy = document.getElementById(`${name}`)
        let enemyLeftWithoutPixelNUmber = Number(enemy.style.left.match(numberPattern))
        let enemyTopWithoutPixelNUmber = Number(enemy.style.top.match(numberPattern))

        //fire kills enemy from left side
        if ((enemyTopWithoutPixelNUmber - explosionLeftPixelNumberTop > -21 && enemyTopWithoutPixelNUmber - explosionLeftPixelNumberTop < 51) && (enemyLeftWithoutPixelNUmber - explosionLeftPixelNumberLeft > -28 && enemyLeftWithoutPixelNUmber - explosionLeftPixelNumberLeft < 51)) {
            document.getElementById(`${name}`).remove()
            game.count += 100
            countScore()
            return true
        }

        //fire kills enemy from right side
        if ((enemyTopWithoutPixelNUmber - explosionRightPixelNumberTop > -21 && enemyTopWithoutPixelNUmber - explosionRightPixelNumberTop < 51) && (enemyLeftWithoutPixelNUmber - explosionRightPixelNumberLeft > -28 && enemyLeftWithoutPixelNUmber - explosionRightPixelNumberLeft < 51)) {
            document.getElementById(`${name}`).remove()
            game.count += 100
            countScore()
            return true
        }
        //fire kills enemy from top side
        if ((enemyTopWithoutPixelNUmber - explosionTopPixelNumberTop > -21 && enemyTopWithoutPixelNUmber - explosionTopPixelNumberTop < 51) && (enemyLeftWithoutPixelNUmber - explosionTopPixelNumberLeft > -28 && enemyLeftWithoutPixelNUmber - explosionTopPixelNumberLeft < 51)) {
            document.getElementById(`${name}`).remove()
            game.count += 100
            countScore()
            return true
        }
        //fire kills enemy from bottom side
        if ((enemyTopWithoutPixelNUmber - explosionBottomPixelNumberTop > -21 && enemyTopWithoutPixelNUmber - explosionBottomPixelNumberTop < 51) && (enemyLeftWithoutPixelNUmber - explosionBottomPixelNumberLeft > -28 && enemyLeftWithoutPixelNUmber - explosionBottomPixelNumberLeft < 51)) {
            document.getElementById(`${name}`).remove()
            game.count += 100
            countScore()
            return true
        }
    }
    return false
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
    console.log('enemy1 dead', enemiesProperties.enemy1.dead)
}

export const fireCollisionPlayer = () => {
    if (!playerProperties.dead && !game.ended){
        let playerPosition = document.getElementById('player')
        let playerTopPixelsNumber = Number(playerPosition.style.top.match(numberPattern))
        let playerLeftPixelsNumber = Number(playerPosition.style.left.match(numberPattern))

        // get to know left explosion pixel numbers
        let [explosionLeftPixelNumberTop, explosionLeftPixelNumberLeft] = explosionPositions('explosionLeft')

        //get to know right explosion pixel numbers
        let [explosionRightPixelNumberTop, explosionRightPixelNumberLeft] = explosionPositions('explosionRight')

        //get to know top explosion pixel numbers
        let [explosionTopPixelNumberTop, explosionTopPixelNumberLeft] = explosionPositions('explosionTop')

        //get to know bottom explosion pixel numbers
        let [explosionBottomPixelNumberTop, explosionBottomPixelNumberLeft] = explosionPositions('explosionBottom')

        //get to know centre explosion pixel numbers
        let [explosionCentrePixelNumberTop, explosionCentrePixelNumberLeft] = explosionPositions('explosion')

        if ((Math.abs(playerTopPixelsNumber - explosionCentrePixelNumberTop) < 35) && ((Math.abs(playerLeftPixelsNumber - explosionCentrePixelNumberLeft) < 35))) {
            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
        }

        // fire from bottom
        if ((Math.abs(playerTopPixelsNumber - explosionBottomPixelNumberTop) < 49) && ((Math.abs(playerLeftPixelsNumber - explosionBottomPixelNumberLeft) < 26))) {
            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
            // fire from top
        } else if ((Math.abs(playerTopPixelsNumber - explosionTopPixelNumberTop) < 34) && ((Math.abs(playerLeftPixelsNumber - explosionTopPixelNumberLeft) < 29))) {
            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
            // fire from right
        } else if ((Math.abs(playerTopPixelsNumber - explosionRightPixelNumberTop) < 36) && ((Math.abs(playerLeftPixelsNumber - explosionRightPixelNumberLeft) < 50))) {
            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
            // fire from left
        } else if ((Math.abs(playerTopPixelsNumber - explosionLeftPixelNumberTop) < 36) && ((Math.abs(playerLeftPixelsNumber - explosionLeftPixelNumberLeft) < 26))) {
            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
        }
    }
}