import {game, playerProperties} from "../script.js";
import {gameOver} from "./gameOver.js";

const timeH = document.querySelector('h1');

displayTime(300)

const countDown = setInterval(()=>{
    if (playerProperties.dead){
        game.timeSecond = 300
    }
    if(!game.paused && !game.ended && !playerProperties.dead) {
        game.timeSecond--;
        displayTime(game.timeSecond);
        if (game.timeSecond === 0 || game.timeSecond < 1) {
            clearInterval(countDown);
        }
    }
}, 1000);

export function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.textContent = `  ${(min < 10) ? '0' : ''}${min}:${(sec < 10) ? '0' : ''}${sec}  `;
    if (min === 0 && sec === 0) {
        gameOver()
    }
}

