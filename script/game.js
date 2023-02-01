const menu = document.getElementById("menu")
const scoreElement = document.getElementById("score")
const highscoreElement = document.getElementById("highscore")

/**
 * Represents the game states.
 */
const GameState = {
    Running: 0,
    Stopped: 1
}

/**
 * The current game state.
 */
var gameState = GameState.Stopped

const fromTop = 500

var highscore = 0
var score = 0

/**
 * Checks when the space bar is pressed.
 * @param {*} event The key press event. 
 */
document.body.onkeyup = function(event) {
    if (event.key == " "
    || event.code == "Space"   
    || event.keyCode == 32) {

        console.log("Key: Space")

        if (gameState == GameState.Stopped) {
            Game.start()
            return
        }

        Player.jump()
    }
}

document.body.addEventListener('click', function(event) {
    console.log("Key: Click")

        if (gameState == GameState.Stopped) {
            Game.start()
            return
        }

        Player.jump()
}, true); 

/**
 * Represents the game controller.
 */
class Game {

    static interval

    /**
     * Represents the game loop.
     */
    static loop() {
        Player.update()
        Obstical.update()
    }

    /**
     * Used to stop the game.
     */
    static stop() {
        gameState = GameState.Stopped
        menu.style.display = 'block'

        clearInterval(Game.interval)

        if (score >= highscore) {
            highscore = score
            highscoreElement.innerHTML = highscore
        }
    }

    /**
     * Used to start the game.
     */
    static start() {
        gameState = GameState.Running
        menu.style.display = 'none'

        Game.interval = setInterval(Game.loop, 100)

        score = 0

        Obstical.x = Obstical.startX
    }

    static getWidth() {
        return screen.width
    }

    static incrementScore() {
        score += 1
        scoreElement.innerHTML = score
    }
}

class Player {

    static gravity = 9.8
    static velocity = 0
    static y = 0

    static allowedJumps = 3
    static jumps = 2

    /**
     * Used to get the player.
     */
    static get() {
        return document.getElementById("player")
    }

    /**
     * Used to make the player jump.
     */
    static jump() {
        if (Player.jumps <= 0) return

        Player.velocity = 40
        Player.jumps -= 1
    }

    /**
     * Use to make the player jump.
     */
    static update() {
        Player.y -= Player.velocity
        Player.velocity -= Player.gravity

        let final = fromTop + Player.y

        if (final >= fromTop) {
            final = fromTop
            Player.velocity = 0
            Player.jumps = Player.allowedJumps
        }

        Player.get().style.top = final + "px"
    }

    static checkCollision(element) {
        if (Player.y <= -40) return false

        var player = Player.get().getBoundingClientRect();
        var obj = element.getBoundingClientRect();

        console.log(player)
        console.log(obj)

        if (obj.right >= player.right && obj.right <= player.right + 40) return true
        return false
    }
}

class Obstical {

    static x = -40
    static moveBy = 40
    static startX = -40

    static hold = false

    /**
     * Used to get the player.
     */
    static get() {
        return document.getElementById("obstical")
    }

    static update() {
        if (Obstical.hold) return

        Obstical.x += Obstical.moveBy

        if (Player.checkCollision(Obstical.get())) {
            Game.stop()
        }

        Obstical.get().style.right = Obstical.x + "px"

        if (Obstical.x >= Game.getWidth()) {

            if (Game.getWidth() <= 1000) {
                if (Obstical.x <= 1000) {
                    return
                }
            }

            Obstical.x = Obstical.startX
            Game.incrementScore()
        }
    }
}