import {game} from "../script.js";

export function makeRows (cols, template) {
    const container = document.getElementById("gameArea");
    const rows = 13

    //transforms multidimensional template array into one single array
    let templateArray =[]
    for (let i = 0; i < template.length; i++) {
        templateArray = templateArray.concat(template[i])
    }

    let currentWidth = 0
    let currentHeight = 0

    container.style.setProperty('--grid-rows', `${rows}`);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.textContent = String(c + 1);
        container.appendChild(cell).className = "gridItem";
        let currentCell = c + 1
        cell.setAttribute("id", String(currentCell))
        cell.setAttribute("class", templateArray[c])

        if((templateArray[c] === 'green') && (Math.random() < 0.30)) {
            cell.setAttribute("class", "brick")
        }

        if (currentCell !== 1 && currentCell % cols === 1) {
            currentHeight += 50
            currentWidth = 0
        }
        cell.style.setProperty("top", `${currentHeight}px`)
        cell.style.setProperty("left", `${currentWidth}px`)
        currentWidth += 50
    }
}

const defineXArea = function () {
    let a, b, c, d

    if (game.levelOneFinished && game.levelTwoFinished){
        a = 19
        b = 20
        c = 36
        d = 53

    } else {

        a = 17
        b = 18
        c = 32
        d = 47
    }
    return [a, b, c, d]
}

//turning enemy-free area where player is born into green DIV
export const xToGreen = function () {
    let [a, b, c, d] = defineXArea()

    setTimeout(function (){
        if (!game.paused){
            let divA = document.getElementById(`${a}`)
            divA.classList.remove('x')
            divA.classList.add('green')

            let divB = document.getElementById(`${b}`)
            divB.classList.remove('x')
            divB.classList.add('green')

            let divC = document.getElementById(`${c}`)
            divC.classList.remove('x')
            divC.classList.add('green')

            let divD = document.getElementById(`${d}`)
            divD.classList.remove('x')
            divD.classList.add('green')
            game.xChanged = true
        }
    },10000)
}

