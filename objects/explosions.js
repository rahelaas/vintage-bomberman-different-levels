import {
    bomb,
    imgExplosion,
    numberPattern,
    explosionProperties, game,
    bombProperties, enemiesProperties
} from "../script.js";
import {fireCollisionEnemy, fireCollisionPlayer} from "../collisions/fireCollision.js";
import {brickCollision} from "../collisions/brickCollision.js";


export const drawSpriteExplosion = (frameX, frameY, name) => {
    let explosion = document.getElementById(`${name}`)
    const k = frameX * explosionProperties.width
    const m = frameY * explosionProperties.height
    explosion.style.backgroundPosition = `${k}px ${m}px`
};

export let createExplosion = (top, left, name, degree, row) => {
    let explosion = document.createElement("div")
    explosion.setAttribute("id", `${name}`)
    explosion.style.height = `${explosionProperties.height}px`
    explosion.style.width = `${explosionProperties.width}px`
    explosion.style.backgroundImage = `url(${imgExplosion.src})`;
    explosion.style.position = 'absolute'
    explosion.style.zIndex = '6'
    explosion.style.transform = `rotate(${degree}deg)`
    explosion.style.top = String(Number(bomb.style.top.match(numberPattern)) + top) + 'px'
    explosion.style.left = String(Number(bomb.style.left.match(numberPattern)) + left) + 'px'
    document.getElementById('gameArea').appendChild(explosion)

    drawSpriteExplosion(7, row, `${name}`)

    return explosion
}


export const explosionsLoop = () => {
    if (!game.paused && !game.ended){
        if (explosionProperties.inLoop) {
            if (explosionProperties.slowedBy >= explosionProperties.slowFrameRate) {
                if (explosionProperties.currentLoopIndex <= explosionProperties.animationLoop.length) {
                    drawSpriteExplosion( explosionProperties.animationLoop[explosionProperties.currentLoopIndex],3, 'explosion')
                    drawSpriteExplosion( explosionProperties.animationLoop[explosionProperties.currentLoopIndex],1, 'explosionLeft')
                    drawSpriteExplosion( explosionProperties.animationLoop[explosionProperties.currentLoopIndex],1, 'explosionRight')
                    drawSpriteExplosion( explosionProperties.animationLoop[explosionProperties.currentLoopIndex],1, 'explosionBottom')
                    drawSpriteExplosion( explosionProperties.animationLoop[explosionProperties.currentLoopIndex],1, 'explosionTop')

                    explosionProperties.currentLoopIndex++
                    if (explosionProperties.counter === 0){
                        if (!enemiesProperties.enemy1.dead){
                            enemiesProperties.enemy1.dead = fireCollisionEnemy('enemy1')
                        }

                        if (!enemiesProperties.enemy2.dead){
                            enemiesProperties.enemy2.dead = fireCollisionEnemy('enemy2')
                        }

                        if (!enemiesProperties.enemy3.dead){
                            enemiesProperties.enemy3.dead = fireCollisionEnemy('enemy3')
                        }

                        if (!enemiesProperties.enemy4.dead){
                            enemiesProperties.enemy4.dead = fireCollisionEnemy('enemy4')
                        }

                        if (game.levelOneFinished && !enemiesProperties.enemy5.dead){
                            enemiesProperties.enemy5.dead = fireCollisionEnemy('enemy5')
                        }

                        if (game.levelTwoFinished && !enemiesProperties.enemy6.dead){
                            enemiesProperties.enemy6.dead = fireCollisionEnemy('enemy6')
                        }

                        fireCollisionPlayer()
                        brickCollision()
                        explosionProperties.counter ++
                    }
                } else {
                    document.getElementById('explosion').remove()
                    document.getElementById('explosionLeft').remove()
                    document.getElementById('explosionRight').remove()
                    document.getElementById('explosionBottom').remove()
                    document.getElementById('explosionTop').remove()
                    explosionProperties.inLoop = false
                    explosionProperties.active = false
                    bombProperties.active = false
                    explosionProperties.counter = 0
                    explosionProperties.currentLoopIndex = 0;
                }
                explosionProperties.slowedBy = 0;
            } else {
                explosionProperties.slowedBy++;
            }
        }
    }
}