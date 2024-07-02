import {playerDying} from "../objects/deadPlayer.js";
import {game, numberPattern, playerProperties} from "../script.js";

export const collision  = (name) => {

    if (!playerProperties.dead && !game.ended && game.timeSecond !== 0) {
        let playerPosition = document.getElementById('player')
        let playerTopPixelsNumber = Number(playerPosition.style.top.match(numberPattern))
        let playerLeftPixelsNumber = Number(playerPosition.style.left.match(numberPattern))
        // get to know enemy's pixels
        let enemyPosition1 = document.getElementById(`${name}`)
        let enemyTopPixelsNumber = Number(enemyPosition1.style.top.match(numberPattern))
        let enemyLeftPixelsNumber = Number(enemyPosition1.style.left.match(numberPattern))

        if (((playerLeftPixelsNumber - enemyLeftPixelsNumber) > -28 && (playerLeftPixelsNumber - enemyLeftPixelsNumber) < 28) && ((playerTopPixelsNumber - enemyTopPixelsNumber) > -36 && (playerTopPixelsNumber - enemyTopPixelsNumber) < 28)) {

            if (!playerProperties.dead) {
                playerProperties.dead = true
                playerDying()
            }
        }
    }
}