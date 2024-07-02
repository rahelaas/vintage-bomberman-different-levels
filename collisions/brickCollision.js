import {explosionProperties, game, numberPattern} from "../script.js";
import {explosionBottom, explosionLeft, explosionRight, explosionTop} from "../objects/bomb.js";
import {doorPositionID} from "../objects/door.js";
import {countScore} from "../game/score.js";



export const brickCollision = () => {
    if (explosionProperties.active){

        let rightDIVNumber = String(Math.trunc((Number(explosionRight.style.top.match(numberPattern)) / 50)) * game.columnNumber + Math.ceil(Number(explosionRight.style.left.match(numberPattern)) / 50) +1)
        let leftDIVNumber = String(Math.trunc((Number(explosionLeft.style.top.match(numberPattern)) / 50)) * game.columnNumber + Math.ceil(Number(explosionLeft.style.left.match(numberPattern)) / 50) +1)
        let bottomDIVNumber = String(Math.trunc((Number(explosionBottom.style.top.match(numberPattern)) / 50)) * game.columnNumber + Math.ceil(Number(explosionBottom.style.left.match(numberPattern)) / 50) +1)
        let topDIVNumber = String(Math.trunc((Number(explosionTop.style.top.match(numberPattern)) / 50)) * game.columnNumber + Math.ceil(Number(explosionTop.style.left.match(numberPattern)) / 50) +1)


        if (document.getElementById(rightDIVNumber).className === 'brick') {
            if ((document.getElementById(rightDIVNumber).id) === doorPositionID) {
                document.getElementById(rightDIVNumber).setAttribute('class', 'door')
                if (!game.levelOneFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '-51px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '-51px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '-51px -102px'
                }
                game.doorFound = true
            } else {
                document.getElementById(rightDIVNumber).setAttribute('class', 'green')
                if (!game.levelOneFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '0px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '0px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(rightDIVNumber).style.backgroundPosition = '0px -102px'
                }
            }
            game.count += 10;
            countScore()
        }
        if (document.getElementById(leftDIVNumber).className === 'brick') {
            if ((document.getElementById(leftDIVNumber).id) === doorPositionID) {
                document.getElementById(leftDIVNumber).setAttribute('class', 'door')
                if (!game.levelOneFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '-51px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '-51px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '-51px -102px'
                }
                game.doorFound = true
            } else {
                document.getElementById(leftDIVNumber).setAttribute('class', 'green')
                if (!game.levelOneFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '0px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '0px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(leftDIVNumber).style.backgroundPosition = '0px -102px'
                }
            }
            game.count += 10;
            countScore()
        }
        if (document.getElementById(bottomDIVNumber).className === 'brick') {
            if ((document.getElementById(bottomDIVNumber).id) === doorPositionID) {
                document.getElementById(bottomDIVNumber).setAttribute('class', 'door')
                if (!game.levelOneFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '-51px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '-51px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '-51px -102px'
                }
                game.doorFound = true
            } else {
                document.getElementById(bottomDIVNumber).setAttribute('class', 'green')
                if (!game.levelOneFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '0px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '0px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(bottomDIVNumber).style.backgroundPosition = '0px -102px'
                }
            }
            game.count += 10;
            countScore()
        }
        if (document.getElementById(topDIVNumber).className === 'brick') {
            if ((document.getElementById(topDIVNumber).id) === doorPositionID) {
                document.getElementById(topDIVNumber).setAttribute('class', 'door')
                if (!game.levelOneFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '-51px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '-51px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '-51px -102px'
                }
                game.doorFound = true
            } else {
                document.getElementById(topDIVNumber).setAttribute('class', 'green')
                if (!game.levelOneFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '0px 0px'
                }
                if (game.levelOneFinished && !game.levelTwoFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '0px -51px'
                }
                if (game.levelOneFinished && game.levelTwoFinished) {
                    document.getElementById(topDIVNumber).style.backgroundPosition = '0px -102px'
                }
            }
            game.count += 10;
            countScore()
        }
    }
}