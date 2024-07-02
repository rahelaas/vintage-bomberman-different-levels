import {game} from "../script.js";

//score counting function
export function countScore() {
    let getScoreDIV= document.getElementsByClassName('score')[0].getElementsByTagName('h1')[0];
    getScoreDIV.textContent = String(game.count)
}