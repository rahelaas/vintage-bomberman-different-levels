import {removeEnemies} from "../objects/enemies.js";
import {game} from "../script.js";

export let gameOver = function (){

    document.getElementById('player').remove()
    removeEnemies()
    let gameOver = document.createElement("div");
    gameOver.setAttribute("class", 'gameOver')
    document.body.appendChild(gameOver)
    let gameOverMenu = document.createElement("div")
    gameOverMenu.setAttribute("class", 'gameOverMenu')
    gameOverMenu.setAttribute("id", 'gameOverMenu')
    document.querySelector('body').appendChild(gameOverMenu)
    let btnEnd = document.createElement("button")
    if (game.timeSecond === 0){
        gameOverMenu.textContent = 'TIME IS OVER!'
        btnEnd.textContent = "LET ME PLAY MORE";
    } else {
        gameOverMenu.textContent = 'GAME OVER!'
        btnEnd.textContent = "LET ME PLAY MORE";
    }
    document.getElementById('gameOverMenu').appendChild(btnEnd);
    btnEnd.addEventListener("click", function () {
        document.location.reload();
    })
}