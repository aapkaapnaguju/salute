let player1Score = 0
let player2Score = 0
input.onButtonPressed(Button.A, function () {
    player1Score += 1
})
input.onButtonPressed(Button.AB, function () {
    if (player1Score == player2Score) {
        basic.showString("TIE")
    } else if (player1Score > player2Score) {
        basic.showString("Player 1")
    } else {
        basic.showString("Player 2")
    }
    basic.showNumber(Math.max(player1Score, player2Score))
})
input.onButtonPressed(Button.B, function () {
    player2Score += 1
})
input.onGesture(Gesture.Shake, function () {
    player1Score = 0
    basic.showString("Reset")
    basic.pause(1000)
    basic.clearScreen()
    player2Score = 0
})
