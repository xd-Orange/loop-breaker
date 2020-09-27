input.onButtonPressed(Button.A, function () {
    pressed = true
})
let pressed = false
pressed = false
while (pressed == false) {
    basic.showString("Press A")
    basic.pause(150)
}
basic.showString("Bye")
