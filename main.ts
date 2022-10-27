input.onButtonPressed(Button.A, function () {
    Enemy_Attack_Y = -1
})
input.onGesture(Gesture.TiltLeft, function () {
    Enemy_Attack_X = -1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Enemy_Attack_Y = 1
})
input.onGesture(Gesture.Shake, function () {
    Enemy_Attack_X = 1
})
let Enemy_Attack_X = 0
let Enemy_Attack_Y = 0
game.setScore(6)
Enemy_Attack_Y = 0
Enemy_Attack_X = 0
let Battle_Ship_1 = 0
let Battle_ship_2 = 0
let Battle_Ship_3 = 0
let Cruiser_1 = 0
let Cruiser_2 = 0
let Scout = 0
basic.forever(function () {
    if (game.score() == 0) {
        basic.showString("sunk")
        game.gameOver()
    }
})
